window.CHECKLIST_DATA = {
  storageKey: 'sag-mill',
  docTitle: 'SAG / Ball Mill Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-MILL-SAG-001',
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
      title: 'Motor M1 & Motor M2',
      items: [
        { id: '2.1', text: 'Check M1 general condition and unusual noise' },
        { id: '2.2', text: 'Check M1 hold-down bolts and foundation base plate' },
        { id: '2.3', text: 'Check M1 NDE/DE lube condition and circulating' },
        { id: '2.4', text: 'Record M1 temperature (Max. 76°C) and oil flow, NDE/DE' },
        { id: '2.5', text: 'Check M2 general condition and unusual noise' },
        { id: '2.6', text: 'Check M2 hold-down bolts and foundation base plate' },
        { id: '2.7', text: 'Check M2 NDE/DE lube condition and circulating' },
        { id: '2.8', text: 'Record M2 temperature (Max. 76°C) and oil flow, NDE/DE' }
      ]
    },
    {
      title: 'Motor Couplings (Coupling & Grid Coupling)',
      items: [
        { id: '3.1', text: 'Check coupling general condition and noise' },
        { id: '3.2', text: 'Inspect coupling hubs' },
        { id: '3.3', text: 'Record coupling temperature (°C)' },
        { id: '3.4', text: 'Check grid coupling general condition and noise' },
        { id: '3.5', text: 'Inspect grid coupling hubs' },
        { id: '3.6', text: 'Record grid coupling temperature (°C)' }
      ]
    },
    {
      title: 'Gearboxes (Both Drives)',
      items: [
        { id: '4.1', text: 'Check general condition and unusual noise' },
        { id: '4.2', text: 'Inspect hold-down bolts - adaptor base & frame' },
        { id: '4.3', text: 'Check input/output shaft-casing for oil seal leaks' },
        { id: '4.4', text: 'Record Shaft 1 and Shaft 2 temperature (DE/NDE)' },
        { id: '4.5', text: 'Record casing temperature and inlet oil line pressure (Min & Max bar)' },
        { id: '4.6', text: 'Record return oil temperature and inlet oil flow (L/min)' }
      ]
    },
    {
      title: 'Pinion & Bull Gear',
      items: [
        { id: '5.1', text: 'Check general condition and unusual noise' },
        { id: '5.2', text: 'Check hold-down bolts and grouting' },
        { id: '5.3', text: 'Check pillow block DE/NDE for oil seal leaks' },
        { id: '5.4', text: 'Check lube supply and return line at pillow block' },
        { id: '5.5', text: 'Check lube grease storage level, supply piping, and fittings' },
        { id: '5.6', text: 'Record pinion temperature (Max. 76°C) DE/NDE' },
        { id: '5.7', text: 'Record pinion lube oil flow (L/min) and return oil temperature' },
        { id: '5.8', text: 'Record pinion and bull gear profile temperatures (sections 1-3, left to right)' }
      ]
    },
    {
      title: 'Mill Feed End Bearing & Chute',
      items: [
        { id: '6.1', text: 'Check general condition and unusual noise' },
        { id: '6.2', text: 'Check seal water line, chute, and product leaks/flow' },
        { id: '6.3', text: 'Check hold-down bolts and cap bearing' },
        { id: '6.4', text: 'Check assembly seal for damage/oil leaks' },
        { id: '6.5', text: 'Check integrity of supply instruments and gauges' },
        { id: '6.6', text: 'Record oil flow rate, oil pressure (DE/NDE), and temperature' }
      ]
    },
    {
      title: 'Mill Discharge End Trunnion',
      items: [
        { id: '7.1', text: 'Check general condition and unusual noise' },
        { id: '7.2', text: 'Check hold-down bolts and cap bearing' },
        { id: '7.3', text: 'Check assembly seal for damage/oil leaks' },
        { id: '7.4', text: 'Check integrity of supply instruments and gauges' },
        { id: '7.5', text: 'Record oil pressure (DE/NDE) and temperature, including return oil line' }
      ]
    },
    {
      title: 'Bearing Oil Film Thickness',
      items: [
        { id: '8.1', text: 'Record feed-end position (DE/NDE)' },
        { id: '8.2', text: 'Record discharge-end position (DE/NDE)' }
      ]
    },
    {
      title: 'Lube Oil Cooling Systems (Motor & Gearbox)',
      items: [
        { id: '9.1', text: 'Check general condition and unusual noise across cooling units' },
        { id: '9.2', text: 'Check hold-down bolts and foundation base plate' },
        { id: '9.3', text: 'Check cores condition for leaks/product contamination' },
        { id: '9.4', text: 'Check cooling system and lube fitting integrity' },
        { id: '9.5', text: 'Record temperature (Max. 76°C) NDE/DE/Body, oil inlet, and oil outlet temperature' }
      ]
    },
    {
      title: 'Auxiliary Lube Pumps (HP / LP / Circulation, Trains A & B)',
      items: [
        { id: '10.1', text: 'Check pump motor general condition, unusual noise, hold-down bolts, and temperature' },
        { id: '10.2', text: 'Check pump general condition, noise, and flexible hoses' },
        { id: '10.3', text: 'Check suction, discharge, casing, and filter for leaks' },
        { id: '10.4', text: 'Check general condition of lube oil and reservoir level/breather' },
        { id: '10.5', text: 'Verify relief valve discharging correctly (Yes/No)' },
        { id: '10.6', text: 'Record discharge pressure and coupling temperature' },
        { id: '10.7', text: 'Record oil return line and reservoir oil temperature against target range' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motors M1/M2', 'Couplings', 'Gearboxes', 'Pinion & Bull Gear', 'Feed End Bearing', 'Discharge End Trunnion', 'Lube Oil Cooling', 'Auxiliary Lube Pumps']
  },
  signoff: ['Checked By', 'Reviewed By']
};
