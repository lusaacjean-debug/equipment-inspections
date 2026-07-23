window.CHECKLIST_DATA = {
  storageKey: 'yard-conveyor',
  docTitle: 'Yard Conveyor Belt Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Engineering Department',
  docNo: 'CM-CONV-YARD-001',
  revision: 'Rev 1',
  effectiveDate: '23-Jul',
  infoFields: [
    { key: 'equipmentTag', label: 'Equipment Tag #' },
    { key: 'checkedBy', label: 'Checked By' },
    { key: 'reviewedBy', label: 'Reviewed By' },
    { key: 'date', label: 'Date' },
    { key: 'workOrder', label: 'WO #' },
    { key: 'monitoringType', label: 'Monitoring Type (Visual/Vibration)' }
  ],
  sections: [
    {
      title: 'Safety',
      items: [
        { id: '1.1', text: 'Verify equipment tags/lockout tags in place' },
        { id: '1.2', text: 'Check housekeeping and cleaning around equipment' },
        { id: '1.3', text: 'Inspect hand rail and grating condition' },
        { id: '1.4', text: 'Check terminal box and grounding cables condition' }
      ]
    },
    {
      title: 'Motor',
      items: [
        { id: '2.1', text: 'Check general condition and noise' },
        { id: '2.2', text: 'Inspect hold-down bolts and foundation base plate' },
        { id: '2.3', text: 'Record motor temperature - NDE, DE, Body (Max. 76°C)' }
      ]
    },
    {
      title: 'Motor-to-Gearbox Coupling',
      items: [
        { id: '3.1', text: 'Check general condition and noise' },
        { id: '3.2', text: 'Inspect coupling hubs for cracks' },
        { id: '3.3', text: 'Record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Gearbox',
      items: [
        { id: '4.1', text: 'Check general condition and noise' },
        { id: '4.2', text: 'Inspect hold-down bolts - adaptor base & frame' },
        { id: '4.3', text: 'Check gearbox input/output shaft-casing for oil seal leaks' },
        { id: '4.4', text: 'Check gearbox lube condition and oil level' },
        { id: '4.5', text: 'Record temperature at Shaft 1-4 and casing (target range 87-93°C)' }
      ]
    },
    {
      title: 'Gearbox-to-Pulley Coupling',
      items: [
        { id: '5.1', text: 'Check general condition and noise' },
        { id: '5.2', text: 'Inspect coupling hubs for cracks' },
        { id: '5.3', text: 'Check coupling element key and keyway' },
        { id: '5.4', text: 'Record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Head - Snub - Tail Pulley',
      items: [
        { id: '6.1', text: 'Check pillow block general condition and noise' },
        { id: '6.2', text: 'Check carriage and return idler general condition' },
        { id: '6.3', text: 'Check belt tracking, logging, scraper, skirting board, feed chute' },
        { id: '6.4', text: 'Record head, snub, and tail temperatures (DE/NDE)' }
      ]
    },
    {
      title: 'Bend - Counterweight & Take-Up Pulley',
      items: [
        { id: '7.1', text: 'Check pillow block general condition and noise' },
        { id: '7.2', text: 'Inspect safety guard' },
        { id: '7.3', text: 'Record Bend 1, Bend 2, Bend 3, and Take-Up temperatures (DE/NDE)' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Motor-Gearbox Coupling', 'Gearbox', 'Gearbox-Pulley Coupling', 'Head/Snub/Tail Pulley', 'Bend/Counterweight/Take-Up Pulley']
  },
  signoff: ['Checked By', 'Reviewed By']
};
