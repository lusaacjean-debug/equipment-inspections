window.CHECKLIST_DATA = {
  storageKey: 'neutralization-tank-agitator',
  docTitle: 'Neutralization Tank Agitator Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-AGIT-NEUT-001',
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
        { id: '1.1', text: 'Verify equipment tags in place' },
        { id: '1.2', text: 'Check housekeeping/cleaning around equipment' },
        { id: '1.3', text: 'Inspect hand rail/grating condition' },
        { id: '1.4', text: 'Check terminal box/grounding cables condition' }
      ]
    },
    {
      title: 'Motor',
      items: [
        { id: '2.1', text: 'Check general condition and noise' },
        { id: '2.2', text: 'Inspect hold-down bolts and foundation base plate' },
        { id: '2.3', text: 'Check cooling system and lube fitting integrity' },
        { id: '2.4', text: 'Record motor temperature - NDE, DE, Body' }
      ]
    },
    {
      title: 'Motor to Gearbox Coupling (Jaw Type)',
      items: [
        { id: '3.1', text: 'Check general condition and noise' },
        { id: '3.2', text: 'Check coupling element and key/keyway' },
        { id: '3.3', text: 'Record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Gearbox',
      items: [
        { id: '4.1', text: 'Check general condition and noise' },
        { id: '4.2', text: 'Inspect hold-down bolts - adaptor base & frame' },
        { id: '4.3', text: 'Check cooling system' },
        { id: '4.4', text: 'Check gearbox input/output shaft-casing for oil seal leaks' },
        { id: '4.5', text: 'Check gearbox lube condition and oil level' },
        { id: '4.6', text: 'Record gearbox temperature at Shaft 1-4 and casing' }
      ]
    },
    {
      title: 'Agitator Shaft',
      items: [
        { id: '5.1', text: 'Check general condition and noise' },
        { id: '5.2', text: 'Check for excessive agitator shaft deflection' },
        { id: '5.3', text: 'Check tank seal condition and water lute level' },
        { id: '5.4', text: 'Record tank level (%)' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Motor-Gearbox Coupling', 'Gearbox', 'Agitator Shaft']
  },
  signoff: ['Checked By', 'Reviewed By']
};
