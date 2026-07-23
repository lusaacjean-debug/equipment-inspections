window.CHECKLIST_DATA = {
  storageKey: 'mix-tank-agitator',
  docTitle: 'Mix Tank Agitator Inspection Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-AGIT-MIX-001',
  revision: 'Rev 1',
  effectiveDate: '23-Jul',
  infoFields: [
    { key: 'equipmentTag', label: 'Equipment Tag #' },
    { key: 'checkedBy', label: 'Checked By' },
    { key: 'reviewedBy', label: 'Reviewed By' },
    { key: 'date', label: 'Date' },
    { key: 'workOrder', label: 'Work Order No.' },
    { key: 'monitoringType', label: 'Monitoring Type (Visual/Vibration)' }
  ],
  sections: [
    {
      title: 'Safety',
      items: [
        { id: '1.1', text: 'Verify equipment tags in place' },
        { id: '1.2', text: 'Check housekeeping/cleaning around equipment' },
        { id: '1.3', text: 'Inspect hand rail/grating condition' },
        { id: '1.4', text: 'Check motor terminal box condition' }
      ]
    },
    {
      title: 'Motor',
      items: [
        { id: '2.1', text: 'Check motor general condition and noise level' },
        { id: '2.2', text: 'Check motor hold-down bolts for looseness' },
        { id: '2.3', text: 'Check motor cooling fan system condition' },
        { id: '2.4', text: 'Record motor temperature - NDE, DE, Body (Max. 76°C)' }
      ]
    },
    {
      title: 'Motor to Gearbox Coupling (Jaw Type)',
      items: [
        { id: '3.1', text: 'Use strobe light to visually inspect coupling for abnormal noise' },
        { id: '3.2', text: 'Check general condition of coupling' },
        { id: '3.3', text: 'Check and record shaft speed' },
        { id: '3.4', text: 'Check and record coupling temperature (°C)' }
      ]
    },
    {
      title: 'Gearbox',
      items: [
        { id: '4.1', text: 'Listen for any abnormal noise coming from gearbox' },
        { id: '4.2', text: 'Check general condition of gearbox' },
        { id: '4.3', text: 'Check lube oil leak on gearbox' },
        { id: '4.4', text: 'Check lube oil condition' },
        { id: '4.5', text: 'Record NDE/DE temperature (Max. 76°C)' }
      ]
    },
    {
      title: 'Agitator Shaft',
      items: [
        { id: '5.1', text: 'Listen for any unusual sound from the agitator shaft assembly' },
        { id: '5.2', text: 'Visually inspect agitator shaft coupling flanges for loose or missing bolts' },
        { id: '5.3', text: 'Check for excessive agitator shaft deflection' },
        { id: '5.4', text: 'Listen for any unusual sound from the agitator steady bearing' },
        { id: '5.5', text: 'Check and record stuffing box temperature' },
        { id: '5.6', text: 'Check and record tank level' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Motor', 'Motor-Gearbox Coupling', 'Gearbox', 'Agitator Shaft']
  },
  signoff: ['Checked By', 'Reviewed By']
};
