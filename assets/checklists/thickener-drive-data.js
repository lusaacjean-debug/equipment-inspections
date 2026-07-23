window.CHECKLIST_DATA = {
  storageKey: 'thickener-drive',
  docTitle: 'Thickener Mechanism Hydraulic Power Pack Checklist',
  docStandard: 'Condition Monitoring Rotating Equipment · Lotus Engineering Department',
  docNo: 'CM-THICK-DRIVE-001',
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
      title: 'General Rake Operating Condition',
      items: [
        { id: '2.1', text: 'Record drive hydraulic supply oil pressure (MPa)' },
        { id: '2.2', text: 'Record rake torque pressure (MPa)' },
        { id: '2.3', text: 'Record rake lift pressure at constant elevation (MPa)' }
      ]
    },
    {
      title: 'Reservoir',
      items: [
        { id: '3.1', text: 'Check hydraulic oil reservoir for oil leaks' },
        { id: '3.2', text: 'Check hydraulic oil reservoir for condensate build-up' },
        { id: '3.3', text: 'Check hydraulic oil for contamination (dirty/milky)' },
        { id: '3.4', text: 'Check instruments and fittings on panel for oil leaks' },
        { id: '3.5', text: 'Check reservoir breather condition' }
      ]
    },
    {
      title: 'Hydraulic Drive Unit & Supply Pump',
      items: [
        { id: '4.1', text: 'Check hydraulic drive unit general condition and noise' },
        { id: '4.2', text: 'Check hold-down bolts and foundation base plate' },
        { id: '4.3', text: 'Check cooling system and lube fitting integrity' },
        { id: '4.4', text: 'Check supply pump general condition and noise' },
        { id: '4.5', text: 'Check pedestal hold-down bolts and foundation base plate' },
        { id: '4.6', text: 'Check pump casing and suction/discharge line fittings' },
        { id: '4.7', text: 'Check flexible hose supply lines for chafe and cracks' },
        { id: '4.8', text: 'Record pump temperature (°C)' }
      ]
    },
    {
      title: 'Rake Lift Supply',
      items: [
        { id: '5.1', text: 'Check general condition and noise' },
        { id: '5.2', text: 'Check hold-down bolts and foundation base plate' },
        { id: '5.3', text: 'Check cooling system and lube fitting integrity' }
      ]
    },
    {
      title: 'Motor',
      items: [
        { id: '6.1', text: 'Listen for grinding, humming, knocking, or high-pitched whining/vibration noise' },
        { id: '6.2', text: 'Observe for excessive/irregular vibration and loose mounting bolts or base movement' },
        { id: '6.3', text: 'Check for discoloration, burnt smell, or paint blistering (use IR thermometer if available)' },
        { id: '6.4', text: 'Ensure fan rotates freely and air vents are clean and unobstructed' },
        { id: '6.5', text: 'Check for loose/frayed wires or signs of arcing/burning; verify terminal cover is secure' },
        { id: '6.6', text: 'Inspect for cracks, dents, oil stains, rust, or corrosion' },
        { id: '6.7', text: 'Check bearings and seals for oil/grease leaks and accumulated dirt near lubrication points' }
      ]
    },
    {
      title: 'Rotary Hydraulic Drive Motor & Pump',
      items: [
        { id: '7.1', text: 'Listen for any unusual sound from the motor' },
        { id: '7.2', text: 'Check motor adaptor base for loose hold-down bolts' },
        { id: '7.3', text: 'Check for excessive pulsation of the casing drain hose' },
        { id: '7.4', text: 'Check motor casing for seal leaks' },
        { id: '7.5', text: 'Check hydraulic supply line fittings for leaks' },
        { id: '7.6', text: 'Check all flexible hose lines for chafe and cracks, and sufficient length' }
      ]
    },
    {
      title: 'Planetary Gear Reducer (Primary & Secondary)',
      items: [
        { id: '8.1', text: 'Check general condition and noise' },
        { id: '8.2', text: 'Check hold-down bolts and foundation base plate' },
        { id: '8.3', text: 'Check cooling system' },
        { id: '8.4', text: 'Check input/output shaft-casing for oil seal leaks' },
        { id: '8.5', text: 'Check gearbox lube condition and oil level' },
        { id: '8.6', text: 'Record gearbox max temperature (target range 30-35°C)' }
      ]
    },
    {
      title: 'Hydraulic Cylinder',
      items: [
        { id: '9.1', text: 'Check for hydraulic fluid leaks around cylinder seals' },
        { id: '9.2', text: 'Inspect piston rod for scratches, dents, corrosion, bending, or misalignment; verify smooth movement' },
        { id: '9.3', text: 'Ensure all bolts, pins, and brackets are secure, crack-free, and not vibrating excessively' },
        { id: '9.4', text: 'Inspect hoses and fittings for abrasions, bulges, loose/corroded fittings, or poor routing' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Reservoir', 'Hydraulic Drive Unit', 'Rake Lift Supply', 'Motor', 'Rotary Hydraulic Drive', 'Planetary Gear Reducer', 'Hydraulic Cylinder']
  },
  signoff: ['Checked By', 'Reviewed By']
};
