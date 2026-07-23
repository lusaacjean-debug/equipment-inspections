window.CHECKLIST_DATA = {
  storageKey: 'tank-external',
  docTitle: 'Tank External Inspection Checklist',
  docStandard: 'API 653 \u00b7 API 575 \u00b7 EEMUA 159 \u2014 Mining Operations',
  docNo: 'CM-TANK-EXT-001',
  revision: 'Rev 1',
  effectiveDate: '26-Jul',
  infoFields: [
    { key: 'tankId', label: 'Tank ID / Tag' },
    { key: 'tankType', label: 'Tank Type (Fixed/Floating)' },
    { key: 'service', label: 'Service (Contents)' },
    { key: 'capacity', label: 'Nominal Capacity' },
    { key: 'yearBuilt', label: 'Year Built' },
    { key: 'lastInspection', label: 'Last Internal Inspection' },
    { key: 'inspector', label: 'Inspector Name' },
    { key: 'date', label: 'Inspection Date' }
  ],
  sections: [
    {
      title: 'Pre-Inspection Safety',
      items: [
        { id: '1.1', text: 'Complete JSA/Take 5 risk assessment' },
        { id: '1.2', text: 'Don PPE: Hard hat, safety glasses, steel-toe boots, FRC (if required)' },
        { id: '1.3', text: 'Verify atmospheric monitoring for hazardous vapors' },
        { id: '1.4', text: 'Confirm hot work permits in place if any welding nearby' },
        { id: '1.5', text: 'Check wind conditions - suspend inspection if unsafe' },
        { id: '1.6', text: 'Verify emergency response equipment accessible' }
      ]
    },
    {
      title: 'Foundation Inspection',
      items: [
        { id: '2.1', text: 'Inspect ringwall/concrete foundation for cracks or spalling' },
        { id: '2.2', text: 'Check for settlement - uneven or differential settlement' },
        { id: '2.3', text: 'Verify proper drainage slope away from tank' },
        { id: '2.4', text: 'Inspect foundation anchor bolts and chairs' },
        { id: '2.5', text: 'Check for vegetation growth near foundation' },
        { id: '2.6', text: 'Verify cathodic protection test stations (if installed)' },
        { id: '2.7', text: 'Inspect grounding connections and continuity' }
      ]
    },
    {
      title: 'Tank Bottom & Annular Plate',
      items: [
        { id: '3.1', text: 'Inspect visible bottom edge for corrosion' },
        { id: '3.2', text: 'Check bottom-to-shell weld (sketch weld) for cracks' },
        { id: '3.3', text: 'Look for product staining indicating leaks' },
        { id: '3.4', text: 'Verify bottom plate projection beyond shell' },
        { id: '3.5', text: 'Check for bulging or distortion of bottom' },
        { id: '3.6', text: 'Inspect leak detection system (if installed)' }
      ]
    },
    {
      title: 'Shell Inspection',
      items: [
        { id: '4.1', text: 'Inspect shell plates for corrosion - all courses' },
        { id: '4.2', text: 'Check vertical shell welds for cracks or defects' },
        { id: '4.3', text: 'Inspect horizontal shell welds' },
        { id: '4.4', text: 'Look for bulges, dents, or out-of-roundness' },
        { id: '4.5', text: 'Check shell for hot spots (insulated tanks)' },
        { id: '4.6', text: 'Verify shell plumbness (vertical alignment)' },
        { id: '4.7', text: 'Inspect for shell settlement or tilt' },
        { id: '4.8', text: 'Check coating/paint condition on shell' },
        { id: '4.9', text: 'Document any previous repair areas' }
      ]
    },
    {
      title: 'Shell Appurtenances',
      items: [
        { id: '5.1', text: 'Inspect all shell nozzles and reinforcing pads' },
        { id: '5.2', text: 'Check nozzle welds for cracks or corrosion' },
        { id: '5.3', text: 'Verify tell-tale holes in reinforcing pads are open' },
        { id: '5.4', text: 'Inspect manways - condition and gasket seating' },
        { id: '5.5', text: 'Check cleanout doors/fittings' },
        { id: '5.6', text: 'Inspect shell-mounted instruments and connections' },
        { id: '5.7', text: 'Verify valve condition and operability' },
        { id: '5.8', text: 'Check pipe supports attached to shell' }
      ]
    },
    {
      title: 'Roof Inspection (Fixed Roof)',
      items: [
        { id: '6.1', text: 'Inspect roof plates for corrosion or holes' },
        { id: '6.2', text: 'Check roof-to-shell junction for cracks' },
        { id: '6.3', text: 'Verify roof slope - no ponding areas' },
        { id: '6.4', text: 'Inspect roof vents for blockage or damage' },
        { id: '6.5', text: 'Check pressure/vacuum relief valves' },
        { id: '6.6', text: 'Inspect roof drain system' },
        { id: '6.7', text: 'Check roof nozzles and fittings' },
        { id: '6.8', text: 'Verify emergency venting (weak roof-to-shell)' }
      ]
    },
    {
      title: 'Floating Roof (If Applicable)',
      items: [
        { id: '7.1', text: 'Check roof position and level' },
        { id: '7.2', text: 'Inspect primary seal condition' },
        { id: '7.3', text: 'Check secondary seal (if installed)' },
        { id: '7.4', text: 'Verify roof drain system functional' },
        { id: '7.5', text: 'Inspect pontoons/floats for integrity' },
        { id: '7.6', text: 'Check rolling ladder/stairway condition' },
        { id: '7.7', text: 'Inspect roof legs and guide poles' },
        { id: '7.8', text: 'Verify anti-rotation devices functional' }
      ]
    },
    {
      title: 'Accessories & Safety Systems',
      items: [
        { id: '8.1', text: 'Inspect spiral stairway - structural integrity' },
        { id: '8.2', text: 'Check stairway handrails and toe boards' },
        { id: '8.3', text: 'Verify gauging platform condition' },
        { id: '8.4', text: 'Inspect foam chambers/fire suppression system' },
        { id: '8.5', text: 'Check earthing/grounding straps' },
        { id: '8.6', text: 'Verify tank identification signage visible' },
        { id: '8.7', text: 'Inspect overflow line and containment' },
        { id: '8.8', text: 'Check level gauging instruments' }
      ]
    },
    {
      title: 'Containment & Environment',
      items: [
        { id: '9.1', text: 'Inspect bund wall/dike integrity' },
        { id: '9.2', text: 'Verify containment capacity adequate' },
        { id: '9.3', text: 'Check bund drainage valve - closed position' },
        { id: '9.4', text: 'Inspect for product staining in bund area' },
        { id: '9.5', text: 'Verify no unauthorized penetrations through bund' },
        { id: '9.6', text: 'Check fire access roads clear' },
        { id: '9.7', text: 'Inspect deluge/foam system piping' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action', 'Date'],
    rows: ['Foundation', 'Bottom/Annular', 'Shell Plates', 'Shell Welds', 'Roof', 'Appurtenances', 'Coatings', 'Safety Systems']
  },
  signoff: ['Inspector', 'Tank Engineer', 'Operations Supervisor']
};
