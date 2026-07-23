window.CHECKLIST_DATA = {
  storageKey: 'mineral-sizer',
  docTitle: 'Mineral Sizer Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-SIZER-001',
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
      title: 'Voith Coupling',
      items: [
        { id: '3.1', text: 'Check general condition, noise, and leaks' },
        { id: '3.2', text: 'Inspect coupling hubs for cracks' },
        { id: '3.3', text: 'Check coupling element key and keyway' },
        { id: '3.4', text: 'Record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Sizer Mill',
      items: [
        { id: '4.1', text: 'Check general condition, noise, and mill casing' },
        { id: '4.2', text: 'Inspect hold-down bolts and pedestal base' },
        { id: '4.3', text: 'Check bearing seal and mill housing for leaks' },
        { id: '4.4', text: 'Check condition of online temperature probe' },
        { id: '4.5', text: 'Record mill temperature DE/NDE' }
      ]
    },
    {
      title: 'Lubrication Oil Distribution System - Motor',
      items: [
        { id: '5.1', text: 'Check general condition and noise' },
        { id: '5.2', text: 'Inspect hold-down bolts and foundation base plate' },
        { id: '5.3', text: 'Check cooling system and lube fitting integrity' },
        { id: '5.4', text: 'Record motor temperature - NDE, DE, Body (76°C)' }
      ]
    },
    {
      title: 'Pump (External Gear Pump)',
      items: [
        { id: '6.1', text: 'Check general condition and noise' },
        { id: '6.2', text: 'Inspect pump hold-down bolts and base plate' },
        { id: '6.3', text: 'Check suction/discharge line, relief valve, and casing' },
        { id: '6.4', text: 'Record suction line, discharge line, and pump inboard bearing temperatures (°C)' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Voith Coupling', 'Sizer Mill', 'Lube Oil Distribution', 'External Gear Pump']
  },
  signoff: ['Checked By', 'Reviewed By']
};
