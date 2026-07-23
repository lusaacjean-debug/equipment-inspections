window.CHECKLIST_DATA = {
  storageKey: 'vbelt-drive-pump',
  docTitle: 'V-Belt Drive Pump Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Engineering Department',
  docNo: 'CM-PUMP-VBELT-001',
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
      title: 'V-Belt Drive',
      items: [
        { id: '3.1', text: 'Check general condition and noise' },
        { id: '3.2', text: 'Inspect drive belt condition (wear, crack, mismatch, looseness)' },
        { id: '3.3', text: 'Check sheaves and grooves condition' },
        { id: '3.4', text: 'Record motor sheave and pump sheave temperature (°C)' }
      ]
    },
    {
      title: 'Pump (Centrifugal)',
      items: [
        { id: '4.1', text: 'Check general condition and noise' },
        { id: '4.2', text: 'Inspect pedestal hold-down bolts and foundation base plate' },
        { id: '4.3', text: 'Check suction and discharge line flange and bellows' },
        { id: '4.4', text: 'Check seal water piping and instrument integrity' },
        { id: '4.5', text: 'Check casing, inboard, and outboard shaft seal condition' },
        { id: '4.6', text: 'Check lube oil condition and oil level' },
        { id: '4.7', text: 'Record temperature (Max 76°C) DE/NDE and stuffing box/mechanical seal temperature' },
        { id: '4.8', text: 'Record seal water pressure, temperature, and flow rate' },
        { id: '4.9', text: 'Record seal water drip rate per minute' },
        { id: '4.10', text: 'Record pump discharge pressure and discharge flow' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'V-Belt Drive', 'Pump']
  },
  signoff: ['Checked By', 'Reviewed By']
};
