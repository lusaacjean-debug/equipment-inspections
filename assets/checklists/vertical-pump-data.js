window.CHECKLIST_DATA = {
  storageKey: 'vertical-pump',
  docTitle: 'Vertical Pump Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-PUMP-VERT-001',
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
        { id: '2.1', text: 'Check general condition and unusual noise' },
        { id: '2.2', text: 'Inspect hold-down bolts and foundation base plate' },
        { id: '2.3', text: 'Check cooling system and lube fitting integrity' },
        { id: '2.4', text: 'Record motor temperature - NDE, DE, Body (Max. 76°C)' }
      ]
    },
    {
      title: 'Coupling',
      items: [
        { id: '3.1', text: 'Check general condition and unusual noise' },
        { id: '3.2', text: 'Inspect coupling hubs for cracks and looseness' },
        { id: '3.3', text: 'Record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Pump Centrifugal',
      items: [
        { id: '4.1', text: 'Check general condition and unusual noise' },
        { id: '4.2', text: 'Inspect pedestal hold-down bolts and foundation base plate' },
        { id: '4.3', text: 'Check suction and discharge line flange and bellows' },
        { id: '4.4', text: 'Record DE temperature (Max 76°C)' },
        { id: '4.5', text: 'Record tank level (%)' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Coupling', 'Pump Centrifugal']
  },
  signoff: ['Checked By', 'Reviewed By']
};
