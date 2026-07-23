window.CHECKLIST_DATA = {
  storageKey: 'tank-internal',
  docTitle: 'Tank Internal Inspection Checklist',
  docStandard: 'API 653 \u00b7 API 575 \u00b7 EEMUA 159 \u00b7 AS 1940 \u2014 Confined Space Standards',
  docNo: 'CM-TANK-INT-001',
  revision: 'Rev 1',
  effectiveDate: '26-Jul',
  infoFields: [
    { key: 'tankId', label: 'Tank ID / Tag' },
    { key: 'inspectionId', label: 'Inspection ID' },
    { key: 'inspectionDate', label: 'Inspection Date' },
    { key: 'service', label: 'Service (Contents)' },
    { key: 'dateEmptied', label: 'Date Tank Emptied' },
    { key: 'dateCleaned', label: 'Date Tank Cleaned' },
    { key: 'gasFreeCert', label: 'Gas Free Certificate No.' },
    { key: 'entryPermit', label: 'Entry Permit No.' },
    { key: 'inspector', label: 'Inspector Name' },
    { key: 'inspectorId', label: 'Inspector ID (API 653)' },
    { key: 'shellMaterial', label: 'Shell Material' },
    { key: 'bottomMaterial', label: 'Bottom Material' }
  ],
  sections: [
    {
      title: 'Pre-Entry Safety Requirements (Critical)',
      items: [
        { id: '1.1', text: 'Verify tank is completely emptied and isolated from all sources' },
        { id: '1.2', text: 'Confirm all valves locked out and tagged (LOTO complete)' },
        { id: '1.3', text: 'Verify tank has been cleaned to remove hazardous residues' },
        { id: '1.4', text: 'Confirm atmospheric testing completed - O2, LEL, H2S, CO' },
        { id: '1.5', text: 'Verify gas-free certificate issued and valid' },
        { id: '1.6', text: 'Confirm confined space entry permit signed and posted' },
        { id: '1.7', text: 'Verify rescue plan in place with trained rescue team on standby' },
        { id: '1.8', text: 'Confirm continuous atmospheric monitoring during entry' },
        { id: '1.9', text: 'Verify forced ventilation adequate and continuous' },
        { id: '1.10', text: 'Confirm communication system between entrant and attendant' },
        { id: '1.11', text: 'Verify intrinsically safe equipment only' },
        { id: '1.12', text: 'Confirm fall protection for roof inspections' }
      ]
    },
    {
      title: 'Bottom Plate Inspection',
      items: [
        { id: '2.1', text: 'Visually inspect entire bottom for corrosion pitting' },
        { id: '2.2', text: 'Check for underside corrosion' },
        { id: '2.3', text: 'Inspect bottom-to-shell weld from inside' },
        { id: '2.4', text: 'Check annular plate for corrosion and thickness loss' },
        { id: '2.5', text: 'Perform floor scan/UT thickness mapping' },
        { id: '2.6', text: 'Identify areas below minimum thickness' },
        { id: '2.7', text: 'Check for buckling or distortion of bottom plates' },
        { id: '2.8', text: 'Inspect lap welds for cracks or corrosion' },
        { id: '2.9', text: 'Check sump area condition' },
        { id: '2.10', text: 'Document all pitting depths and locations' }
      ]
    },
    {
      title: 'Shell Inspection (Internal)',
      items: [
        { id: '3.1', text: 'Inspect Course 1 (bottom) - highest corrosion risk' },
        { id: '3.2', text: 'Check liquid/vapor interface zone' },
        { id: '3.3', text: 'Inspect all horizontal shell welds from inside' },
        { id: '3.4', text: 'Check vertical shell welds' },
        { id: '3.5', text: 'Perform UT thickness measurements at grid points' },
        { id: '3.6', text: 'Inspect for hydrogen blistering (if sour service)' },
        { id: '3.7', text: 'Check for stress corrosion cracking indicators' },
        { id: '3.8', text: 'Inspect internal coating/lining condition' },
        { id: '3.9', text: 'Document all shell thickness readings' }
      ]
    },
    {
      title: 'Internal Structures',
      items: [
        { id: '4.1', text: 'Inspect internal support columns' },
        { id: '4.2', text: 'Check roof support structure (fixed roof tanks)' },
        { id: '4.3', text: 'Inspect internal piping and supports' },
        { id: '4.4', text: 'Check heating coils (if installed) - integrity and supports' },
        { id: '4.5', text: 'Inspect mixers/agitators and mounting' },
        { id: '4.6', text: 'Check swing lines and guides' },
        { id: '4.7', text: 'Inspect floating roof legs and guides (internal)' },
        { id: '4.8', text: 'Verify all internal welds' }
      ]
    },
    {
      title: 'Roof Inspection (Internal)',
      items: [
        { id: '5.1', text: 'Inspect underside of roof plates for corrosion' },
        { id: '5.2', text: 'Check roof support rafters/trusses' },
        { id: '5.3', text: 'Inspect roof-to-shell connection from inside' },
        { id: '5.4', text: 'Check center column (if cone roof)' },
        { id: '5.5', text: 'Inspect roof plate welds' },
        { id: '5.6', text: 'Verify roof nozzle connections' },
        { id: '5.7', text: 'Check pontoon compartments (floating roof)' },
        { id: '5.8', text: 'Inspect deck plates (floating roof)' }
      ]
    },
    {
      title: 'Nozzles & Appurtenances (Internal)',
      items: [
        { id: '6.1', text: 'Inspect all nozzle welds from inside' },
        { id: '6.2', text: 'Check nozzle necks for corrosion/erosion' },
        { id: '6.3', text: 'Inspect reinforcing pad welds' },
        { id: '6.4', text: 'Check manway frames and seating surfaces' },
        { id: '6.5', text: 'Inspect shell nozzle projection alignment' },
        { id: '6.6', text: 'Verify nozzle flange faces condition' },
        { id: '6.7', text: 'Check instrument nozzles and thermowells' }
      ]
    },
    {
      title: 'Coatings & Linings',
      items: [
        { id: '7.1', text: 'Assess overall coating/lining condition' },
        { id: '7.2', text: 'Check for holidays, blistering, or disbondment' },
        { id: '7.3', text: 'Measure coating thickness at representative points' },
        { id: '7.4', text: 'Document areas requiring coating repair' },
        { id: '7.5', text: 'Check cathodic protection anodes (if installed)' },
        { id: '7.6', text: 'Inspect lining at welds and transitions' }
      ]
    },
    {
      title: 'NDT Examination',
      items: [
        { id: '8.1', text: 'Perform UT thickness grid mapping - bottom' },
        { id: '8.2', text: 'Perform UT thickness grid mapping - shell' },
        { id: '8.3', text: 'MPI/DPI critical welds as required' },
        { id: '8.4', text: 'TOFD/Phased Array on suspect welds' },
        { id: '8.5', text: 'Vacuum box testing of bottom welds' },
        { id: '8.6', text: 'Document all NDT results' }
      ]
    },
    {
      title: 'Post-Inspection',
      items: [
        { id: '9.1', text: 'Account for all personnel exiting tank' },
        { id: '9.2', text: 'Secure manways properly' },
        { id: '9.3', text: 'Complete all documentation and photographs' },
        { id: '9.4', text: 'Issue inspection report with findings' },
        { id: '9.5', text: 'Calculate remaining service life' },
        { id: '9.6', text: 'Schedule repairs as required' }
      ]
    }
  ],
  extraTables: [
    {
      title: 'Thickness Measurement Summary',
      columns: ['Location', 'Original (mm)', 'Measured (mm)', 'Min Allow (mm)', 'Status'],
      rows: ['Bottom - Center', 'Bottom - 3m ring', 'Bottom - 6m ring', 'Annular Plate', 'Shell Course 1', 'Shell Course 2', 'Shell Course 3', 'Roof Plates']
    }
  ],
  summaryTable: {
    columns: ['Component', 'Condition', 'Priority', 'Action Required', 'Target Date'],
    rows: ['Tank Bottom', 'Annular Ring', 'Shell (Lower)', 'Shell (Upper)', 'Roof Structure', 'Internal Structures', 'Coatings/Linings', 'Appurtenances']
  },
  signoff: ['Inspector (API 653)', 'Tank Engineer', 'Operations Manager']
};
