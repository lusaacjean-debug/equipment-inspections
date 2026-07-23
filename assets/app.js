/* ============================================================
   Checklist rendering + persistence engine.
   Any page defines window.CHECKLIST_DATA and calls CM.render()
   into a <div id="app"></div>. All state is saved to localStorage
   under the data's storageKey, so nothing is lost on refresh.
   ============================================================ */

const CM = (() => {

  function loadState(key) {
    try {
      const raw = localStorage.getItem('cm:' + key);
      return raw ? JSON.parse(raw) : { items: {}, fields: {}, summary: {}, signoff: {} };
    } catch (e) {
      return { items: {}, fields: {}, summary: {}, signoff: {} };
    }
  }

  function saveState(key, state) {
    try { localStorage.setItem('cm:' + key, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  function countTotals(data) {
    let total = 0;
    data.sections.forEach(s => total += s.items.length);
    return total;
  }

  function computeProgress(key, data) {
    const state = loadState(key);
    const total = countTotals(data);
    let done = 0;
    data.sections.forEach(s => s.items.forEach(it => { if (state.items[it.id] && state.items[it.id].checked) done++; }));
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  // Used on index.html cards to show progress without full render
  function summarizeForCard(key, itemCount) {
    const state = loadState(key);
    let done = 0;
    Object.values(state.items || {}).forEach(v => { if (v && v.checked) done++; });
    return { done, total: itemCount, pct: itemCount ? Math.round((done / itemCount) * 100) : 0 };
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else node.setAttribute(k, v);
    });
    (Array.isArray(children) ? children : [children]).forEach(c => {
      if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function render(data) {
    const key = data.storageKey;
    let state = loadState(key);
    const app = document.getElementById('app');
    app.innerHTML = '';

    /* ---- Progress bar (sticky) ---- */
    const progressPanel = el('div', { class: 'progress-panel' });
    const progressInner = el('div', { class: 'progress-panel-inner' });
    const track = el('div', { class: 'progress-track-lg' });
    const fill = el('div', { class: 'progress-fill-lg' });
    track.appendChild(fill);
    const label = el('div', { class: 'progress-label' });
    const printBtn = el('button', { class: 'btn' }, 'Print / Save PDF');
    printBtn.onclick = () => {
      // Empty textareas visually show their placeholder text, and window.print()
      // captures whatever is visually rendered — so blank notes were printing
      // "Notes / observations…" as if it were real content. Clear placeholders
      // on empty fields just before printing, then restore them after.
      const emptyNotes = Array.from(document.querySelectorAll('.item-body textarea'))
        .filter(t => !t.value.trim());
      const originalPlaceholders = emptyNotes.map(t => t.placeholder);
      emptyNotes.forEach(t => { t.placeholder = ''; });
      const restore = () => {
        emptyNotes.forEach((t, i) => { t.placeholder = originalPlaceholders[i]; });
        window.removeEventListener('afterprint', restore);
      };
      window.addEventListener('afterprint', restore);
      window.print();
      // Fallback restore in case afterprint doesn't fire (some browsers/print-to-PDF flows)
      setTimeout(restore, 2000);
    };
    const exportBtn = el('button', { class: 'btn' }, 'Export findings');
    exportBtn.onclick = () => exportFindings(data, state);
    const resetBtn = el('button', { class: 'btn danger' }, 'Reset');
    resetBtn.onclick = () => {
      if (confirm('Clear all checks, notes, and field entries on this checklist? This cannot be undone.')) {
        state = { items: {}, fields: {}, summary: {}, signoff: {} };
        saveState(key, state);
        render(data);
      }
    };
    progressInner.appendChild(track);
    progressInner.appendChild(label);
    progressInner.appendChild(printBtn);
    progressInner.appendChild(exportBtn);
    progressInner.appendChild(resetBtn);
    progressPanel.appendChild(progressInner);
    app.appendChild(progressPanel);

    const page = el('div', { class: 'page-wrap' });

    /* ---- Title block ---- */
    const tb = el('div', { class: 'title-block' });
    const tbTop = el('div', { class: 'title-block-top' });
    const tbMain = el('div', { class: 'tb-main' }, [
      el('div', { class: 'doc-title' }, data.docTitle),
      el('div', { class: 'doc-standard' }, data.docStandard)
    ]);
    const tbDoc = el('div', { class: 'tb-cell' }, [
      el('div', { class: 'k' }, 'Document No.'),
      el('div', { class: 'v' }, data.docNo)
    ]);
    const tbRev = el('div', { class: 'tb-cell' }, [
      el('div', { class: 'k' }, 'Revision / Effective'),
      el('div', { class: 'v' }, data.revision + ' \u2014 ' + data.effectiveDate)
    ]);
    tbTop.appendChild(tbMain);
    tbTop.appendChild(tbDoc);
    tbTop.appendChild(tbRev);
    tb.appendChild(tbTop);

    const fieldsRow = el('div', { class: 'title-block-fields' });
    data.infoFields.forEach(f => {
      const wrap = el('div', { class: 'field' });
      wrap.appendChild(el('div', { class: 'k' }, f.label));
      const input = el('input', { type: 'text', placeholder: f.placeholder || '' });
      input.value = (state.fields && state.fields[f.key]) || '';
      input.addEventListener('input', () => {
        state.fields = state.fields || {};
        state.fields[f.key] = input.value;
        saveState(key, state);
      });
      wrap.appendChild(input);
      fieldsRow.appendChild(wrap);
    });
    tb.appendChild(fieldsRow);
    page.appendChild(tb);

    /* ---- Sections ---- */
    data.sections.forEach((section, sIdx) => {
      const block = el('div', { class: 'section-block' });
      const head = el('div', { class: 'section-head' }, [
        el('div', { class: 'num' }, String(sIdx + 1).padStart(2, '0')),
        el('h2', {}, section.title),
        el('div', { class: 'section-count' }, section.items.length + ' checks')
      ]);
      block.appendChild(head);

      section.items.forEach(item => {
        const st = (state.items && state.items[item.id]) || { checked: false, flagged: false, note: '', status: '' };
        const row = el('div', { class: 'item' + (st.checked ? ' checked' : '') });
        row.appendChild(el('div', { class: 'step' }, item.id));

        const body = el('div', { class: 'item-body' });
        body.appendChild(el('div', { class: 'item-text' }, item.text));
        const statusLabel = el('div', { class: 'status-label', style: 'display:none;font-weight:600;margin-top:4px;' });
        body.appendChild(statusLabel);
        function updateStatusLabel(status) {
          if (status === 'Fail') {
            statusLabel.textContent = '\u2717 FAIL';
            statusLabel.setAttribute('style', 'display:block;font-weight:600;margin-top:4px;color:#d65c4f;');
          } else if (status === 'Pass') {
            statusLabel.textContent = '\u2713 PASS';
            statusLabel.setAttribute('style', 'display:block;font-weight:600;margin-top:4px;color:#5cb88a;');
          } else if (status === 'N/A') {
            statusLabel.textContent = 'N/A';
            statusLabel.setAttribute('style', 'display:block;font-weight:600;margin-top:4px;color:#8b96a3;');
          } else {
            statusLabel.setAttribute('style', 'display:none;');
          }
        }
        updateStatusLabel(st.status || '');
        if (st.flagged) {
          body.appendChild(el('div', { class: 'flag-label' }, '\u26A0 Flagged \u2014 follow-up required'));
        }
        const note = el('textarea', { placeholder: 'Notes / observations\u2026', rows: '1' });
        note.value = st.note || '';
        note.addEventListener('input', () => {
          state.items = state.items || {};
          state.items[item.id] = Object.assign({}, state.items[item.id], { note: note.value });
          saveState(key, state);
        });
        body.appendChild(note);
        row.appendChild(body);

        const controls = el('div', { class: 'item-controls' });
        const statusSelect = el('select', { class: 'status-select', title: 'Status' });
        ['', 'Pass', 'Fail', 'N/A'].forEach(opt => {
          statusSelect.appendChild(el('option', { value: opt }, opt || 'Status\u2026'));
        });
        statusSelect.value = st.status || '';
        statusSelect.addEventListener('change', () => {
          state.items = state.items || {};
          const cur = state.items[item.id] || { checked: false, flagged: false, note: note.value, status: '' };
          cur.status = statusSelect.value;
          state.items[item.id] = cur;
          saveState(key, state);
          updateStatusLabel(cur.status);
        });
        controls.appendChild(statusSelect);
        const checkBtn = el('button', { class: 'check-toggle' + (st.checked ? ' on' : ''), title: 'Mark complete' }, st.checked ? '\u2713' : '');
        checkBtn.onclick = () => {
          state.items = state.items || {};
          const cur = state.items[item.id] || { checked: false, flagged: false, note: note.value };
          cur.checked = !cur.checked;
          state.items[item.id] = cur;
          saveState(key, state);
          render(data);
        };
        const flagBtn = el('button', { class: 'flag-toggle' + (st.flagged ? ' on' : ''), title: 'Flag for follow-up' }, '\u26A0');
        flagBtn.onclick = () => {
          state.items = state.items || {};
          const cur = state.items[item.id] || { checked: false, flagged: false, note: note.value };
          cur.flagged = !cur.flagged;
          state.items[item.id] = cur;
          saveState(key, state);
          render(data);
        };
        controls.appendChild(checkBtn);
        controls.appendChild(flagBtn);
        row.appendChild(controls);

        block.appendChild(row);
      });
      page.appendChild(block);
    });

    /* ---- Data tables (condition summary, thickness readings, etc.) ---- */
    function buildTable(tableDef, stateBucketName) {
      state[stateBucketName] = state[stateBucketName] || {};
      page.appendChild(el('h2', { class: 'h-standalone' }, tableDef.title));
      const table = el('table', { class: 'summary-table' });
      const thead = el('tr');
      tableDef.columns.forEach(c => thead.appendChild(el('th', {}, c)));
      table.appendChild(thead);
      tableDef.rows.forEach(rowName => {
        const tr = el('tr');
        tr.appendChild(el('td', {}, rowName));
        tableDef.columns.slice(1).forEach(col => {
          const td = el('td', {});
          const fieldKey = tableDef.title + '::' + rowName + '::' + col;
          if (col.toLowerCase().includes('condition') || col.toLowerCase().includes('status')) {
            const options = col.toLowerCase().includes('status')
              ? ['', 'Acceptable', 'Monitor', 'Action Required']
              : ['', 'Good', 'Fair', 'Poor', 'Critical', 'Unsafe'];
            const sel = el('select');
            options.forEach(opt => sel.appendChild(el('option', { value: opt }, opt || '\u2014')));
            sel.value = (state[stateBucketName][fieldKey]) || '';
            sel.addEventListener('change', () => {
              state[stateBucketName][fieldKey] = sel.value;
              saveState(key, state);
            });
            td.appendChild(sel);
          } else {
            const inp = el('input', { type: 'text' });
            inp.value = (state[stateBucketName][fieldKey]) || '';
            inp.addEventListener('input', () => {
              state[stateBucketName][fieldKey] = inp.value;
              saveState(key, state);
            });
            td.appendChild(inp);
          }
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      page.appendChild(table);
    }

    if (data.summaryTable) buildTable(Object.assign({ title: 'Condition Summary' }, data.summaryTable), 'summary');
    if (data.extraTables) data.extraTables.forEach((t, i) => buildTable(t, 'extra' + i));

    /* ---- Sign-off ---- */
    if (data.signoff) {
      page.appendChild(el('h2', { class: 'h-standalone' }, 'Sign-off & Approval'));
      const grid = el('div', { class: 'signoff-grid' });
      ['Role', 'Name (Print)', 'Signature / Initials', 'Date'].forEach(h => grid.appendChild(el('div', { class: 'cell head' }, h)));
      data.signoff.forEach(role => {
        grid.appendChild(el('div', { class: 'cell' }, role));
        ['name', 'sig', 'date'].forEach(fk => {
          const cell = el('div', { class: 'cell' });
          const inp = el('input', { type: 'text' });
          const stateKey = role + '::' + fk;
          inp.value = (state.signoff && state.signoff[stateKey]) || '';
          inp.addEventListener('input', () => {
            state.signoff = state.signoff || {};
            state.signoff[stateKey] = inp.value;
            saveState(key, state);
          });
          cell.appendChild(inp);
          grid.appendChild(cell);
        });
      });
      page.appendChild(grid);
    }

    app.appendChild(page);

    // Update progress
    const prog = computeProgress(key, data);
    fill.style.width = prog.pct + '%';
    label.textContent = prog.done + ' / ' + prog.total + ' checks (' + prog.pct + '%)';
  }

  function exportFindings(data, state) {
    let lines = [data.docTitle, data.docNo + ' Rev ' + data.revision, ''];
    data.infoFields.forEach(f => {
      const v = (state.fields && state.fields[f.key]) || '';
      if (v) lines.push(f.label + ': ' + v);
    });
    lines.push('');
    data.sections.forEach(s => {
      const flaggedOrNoted = s.items.filter(it => {
        const st = state.items && state.items[it.id];
        return st && (st.flagged || st.status === 'Fail' || (st.note && st.note.trim()));
      });
      if (flaggedOrNoted.length) {
        lines.push('== ' + s.title + ' ==');
        flaggedOrNoted.forEach(it => {
          const st = state.items[it.id];
          const tags = [];
          if (st.status === 'Fail') tags.push('FAIL');
          if (st.flagged) tags.push('FLAGGED');
          const prefix = tags.length ? '[' + tags.join('/') + '] ' : '';
          lines.push(prefix + it.id + ' ' + it.text);
          if (st.note && st.note.trim()) lines.push('    Note: ' + st.note.trim());
        });
        lines.push('');
      }
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = data.storageKey + '-findings.txt';
    a.click();
  }

  return { render, summarizeForCard, countTotals };
})();
