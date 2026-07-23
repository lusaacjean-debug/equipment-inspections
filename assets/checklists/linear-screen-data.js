window.CHECKLIST_DATA = {
  storageKey: 'linear-screen',
  docTitle: 'Linear Screen Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-SCREEN-LIN-001',
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
      title: 'Belt Coupling',
      items: [
        { id: '3.1', text: 'Check general condition and noise' },
        { id: '3.2', text: 'Inspect drive belt condition (wear, crack, mismatch, looseness)' },
        { id: '3.3', text: 'Check sheaves and grooves condition' },
        { id: '3.4', text: 'Record motor/driven sheave temperature and universal lug joint temperature (°C)' }
      ]
    },
    {
      title: 'Gearbox',
      items: [
        { id: '4.1', text: 'Check general condition and listen for unusual noise' },
        { id: '4.2', text: 'Inspect hold-down bolts - adaptor base & frame' },
        { id: '4.3', text: 'Check gearbox input/output shaft-casing for oil seal leaks' },
        { id: '4.4', text: 'Check gearbox lube condition and oil level' },
        { id: '4.5', text: 'Record temperature at Shaft 1-3 and casing (target range 87-93°C)' }
      ]
    },
    {
      title: 'Head Pulley',
      items: [
        { id: '5.1', text: 'Check general condition and noise' },
        { id: '5.2', text: 'Inspect housing assembly condition (wear, crack, looseness)' },
        { id: '5.3', text: 'Check lube fitting integrity and damper springs' },
        { id: '5.4', text: 'Record DE/NDE temperature (Max. 76°C)' }
      ]
    },
    {
      title: 'Screen Panel',
      items: [
        { id: '6.1', text: 'Check general condition and noise' },
        { id: '6.2', text: 'Check for tears, holes, wear, or blockages' },
        { id: '6.3', text: 'Check for excessive misalignment' }
      ]
    },
    {
      title: 'Pillow Block Bearings',
      items: [
        { id: '7.1', text: 'Check general condition and noise' },
        { id: '7.2', text: 'Check for blockages' },
        { id: '7.3', text: 'Check for excessive clearance' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Belt Coupling', 'Gearbox', 'Head Pulley', 'Screen Panel', 'Pillow Block Bearings']
  },
  signoff: ['Checked By', 'Reviewed By']
};
