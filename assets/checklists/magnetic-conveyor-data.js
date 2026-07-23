window.CHECKLIST_DATA = {
  storageKey: 'magnetic-conveyor',
  docTitle: 'Magnetic Conveyor Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-CONV-MAG-001',
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
        { id: '2.3', text: 'Check cooling system and lube fitting integrity' },
        { id: '2.4', text: 'Record motor temperature - NDE, DE, Body (Max. 76°C)' }
      ]
    },
    {
      title: 'V-Belt Coupling',
      items: [
        { id: '3.1', text: 'Check general condition and noise' }
      ]
    },
    {
      title: 'Gearbox',
      items: [
        { id: '4.1', text: 'Check general condition and noise' },
        { id: '4.2', text: 'Inspect hold-down bolts - adaptor base & frame' },
        { id: '4.3', text: 'Check gearbox input/output shaft-casing for oil seal leaks' },
        { id: '4.4', text: 'Check gearbox lube condition and oil level' },
        { id: '4.5', text: 'Record temperature at Shaft 1-2 and casing (target range 87-93°C)' }
      ]
    },
    {
      title: 'Head Pulley - Tail Pulley',
      items: [
        { id: '5.1', text: 'Check pillow block general condition and noise' },
        { id: '5.2', text: 'Check carriage and return idler general condition' },
        { id: '5.3', text: 'Check belt tracking, logging, scraper, skirting board, feed chute' },
        { id: '5.4', text: 'Record head and tail temperature (DE/NDE)' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'V-Belt Coupling', 'Gearbox', 'Head/Tail Pulley']
  },
  signoff: ['Checked By', 'Reviewed By']
};
