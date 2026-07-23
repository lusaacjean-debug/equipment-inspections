window.CHECKLIST_DATA = {
  storageKey: 'structural',
  docTitle: 'Structural Inspection Checklist',
  docStandard: 'OSHA 1926 \u00b7 AS/NZS 4100 \u00b7 ISO 9001 \u2014 Mining Operations',
  docNo: 'CM-STRUCT-INSP-001',
  revision: 'Rev 1',
  effectiveDate: '26-Jul',
  infoFields: [
    { key: 'assetTag', label: 'Structure / Asset Tag' },
    { key: 'inspectionId', label: 'Inspection ID' },
    { key: 'structureType', label: 'Structure Type' },
    { key: 'inspectionDate', label: 'Inspection Date' },
    { key: 'location', label: 'Location / Area' },
    { key: 'yearBuilt', label: 'Year Built / Installed' },
    { key: 'loadCapacity', label: 'Design Load Capacity' },
    { key: 'loadStatus', label: 'Current Load Status' },
    { key: 'inspector', label: 'Inspector Name' },
    { key: 'weather', label: 'Weather Conditions' }
  ],
  sections: [
    {
      title: 'Pre-Inspection Safety & Access',
      items: [
        { id: '1.1', text: 'Conduct Job Safety Analysis (JSA) / Take 5 risk assessment' },
        { id: '1.2', text: 'Don appropriate PPE: Hard hat, safety glasses, steel-toe boots, high-vis vest' },
        { id: '1.3', text: 'Verify LOTO procedures completed if required for access' },
        { id: '1.4', text: 'Confirm safe access routes and emergency egress points identified' },
        { id: '1.5', text: 'Inspect scaffolding/elevated work platforms for compliance (if used)' },
        { id: '1.6', text: 'Verify fall protection equipment is in place for heights >1.8m' },
        { id: '1.7', text: 'Check atmospheric conditions in confined spaces (if applicable)' },
        { id: '1.8', text: 'Notify operations/control room of inspection activity' },
        { id: '1.9', text: 'Establish exclusion zone below elevated inspection areas' }
      ]
    },
    {
      title: 'Foundation & Base Plate Inspection',
      items: [
        { id: '2.1', text: 'Inspect concrete foundations for cracks, spalling, or deterioration' },
        { id: '2.2', text: 'Check for settlement, heaving, or differential movement' },
        { id: '2.3', text: 'Verify base plates are level and properly seated' },
        { id: '2.4', text: 'Inspect anchor bolts for corrosion, looseness, or damage' },
        { id: '2.5', text: 'Measure anchor bolt projection and thread condition' },
        { id: '2.6', text: 'Check grout condition under base plates' },
        { id: '2.7', text: 'Verify drainage around foundation (no water pooling)' },
        { id: '2.8', text: 'Inspect expansion joints for proper function' },
        { id: '2.9', text: 'Document any foundation repairs or modifications' }
      ]
    },
    {
      title: 'Steel Structural Members',
      items: [
        { id: '3.1', text: 'Inspect columns for plumbness (vertical alignment)' },
        { id: '3.2', text: 'Check beams for deflection, sagging, or lateral buckling' },
        { id: '3.3', text: 'Examine bracing members for tension/compression damage' },
        { id: '3.4', text: 'Inspect gusset plates for cracks, corrosion, or distortion' },
        { id: '3.5', text: 'Check for signs of overloading: bent members, local buckling' },
        { id: '3.6', text: 'Verify fire protection coatings are intact (if applicable)' },
        { id: '3.7', text: 'Inspect for impact damage from mobile equipment' },
        { id: '3.8', text: 'Check all members for section loss due to corrosion' },
        { id: '3.9', text: 'Verify structural modifications have engineering approval' }
      ]
    },
    {
      title: 'Connections & Fasteners',
      items: [
        { id: '4.1', text: 'Inspect bolted connections for looseness - torque check random sample' },
        { id: '4.2', text: 'Check high-strength bolts for proper tensioning indicators' },
        { id: '4.3', text: 'Examine bolt holes for elongation or damage' },
        { id: '4.4', text: 'Verify correct bolt grades are installed (marked heads)' },
        { id: '4.5', text: 'Inspect welded connections for cracks, undercut, or porosity' },
        { id: '4.6', text: 'Check fillet welds for proper size and profile' },
        { id: '4.7', text: 'Look for lamellar tearing in thick plate connections' },
        { id: '4.8', text: 'Verify lock nuts/washers are in place where required' },
        { id: '4.9', text: 'Check for galvanic corrosion at dissimilar metal contacts' }
      ]
    },
    {
      title: 'Corrosion & Protective Coatings',
      items: [
        { id: '5.1', text: 'Assess overall corrosion level using standard rating scale' },
        { id: '5.2', text: 'Identify areas of active corrosion requiring immediate attention' },
        { id: '5.3', text: 'Measure coating thickness at representative locations (DFT)' },
        { id: '5.4', text: 'Check for coating failures: blistering, peeling, chalking' },
        { id: '5.5', text: 'Inspect areas prone to moisture accumulation' },
        { id: '5.6', text: 'Check crevices and overlapping surfaces for hidden corrosion' },
        { id: '5.7', text: 'Verify galvanizing is intact on galvanized members' },
        { id: '5.8', text: 'Document areas requiring touch-up or full recoating' },
        { id: '5.9', text: 'Assess cathodic protection system function (if installed)' }
      ]
    },
    {
      title: 'Platforms, Walkways & Handrails',
      items: [
        { id: '6.1', text: 'Inspect platform structural supports for integrity' },
        { id: '6.2', text: 'Check grating for secure attachment and proper clips' },
        { id: '6.3', text: 'Verify grating is not bent, damaged, or missing sections' },
        { id: '6.4', text: 'Inspect handrails: 1050mm height, 450mm mid-rail, toe boards' },
        { id: '6.5', text: 'Check handrail posts for secure base attachment' },
        { id: '6.6', text: 'Verify ladder cages are intact and properly attached' },
        { id: '6.7', text: 'Inspect stairways for structural integrity and anti-slip treads' },
        { id: '6.8', text: 'Check platform drainage - no water accumulation' },
        { id: '6.9', text: 'Verify load rating signage is posted and visible' }
      ]
    },
    {
      title: 'Special Structures (Conveyors, Bins, Chutes)',
      items: [
        { id: '7.1', text: 'Inspect conveyor support structures for alignment' },
        { id: '7.2', text: 'Check transfer chute liners for wear and attachment' },
        { id: '7.3', text: 'Examine bin/hopper structural supports' },
        { id: '7.4', text: 'Inspect for wear from material flow/abrasion' },
        { id: '7.5', text: 'Check vibrating equipment mounting and isolation' },
        { id: '7.6', text: 'Verify emergency stop pull cords are accessible' },
        { id: '7.7', text: 'Inspect dust collection system supports' },
        { id: '7.8', text: 'Check structural steel around heat sources' }
      ]
    },
    {
      title: 'Measurement & Documentation',
      items: [
        { id: '8.1', text: 'Record thickness measurements at predetermined monitoring points' },
        { id: '8.2', text: 'Document all defects with photographs (include reference scale)' },
        { id: '8.3', text: 'Update structural inspection database/CMMS' },
        { id: '8.4', text: 'Compare current findings to previous inspection records' },
        { id: '8.5', text: 'Calculate remaining service life where applicable' },
        { id: '8.6', text: 'Identify any load restriction requirements' },
        { id: '8.7', text: 'Complete inspection report with recommendations' }
      ]
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition (1-Good \u2192 5-Unsafe)', 'Priority', 'Action Required', 'Target Date'],
    rows: ['Foundations', 'Columns/Main Frame', 'Beams/Girders', 'Bracing', 'Connections', 'Coatings/Corrosion', 'Platforms/Walkways', 'Handrails/Guards']
  },
  signoff: ['Inspector', 'Reviewed By (Engineer)', 'Area Supervisor']
};
