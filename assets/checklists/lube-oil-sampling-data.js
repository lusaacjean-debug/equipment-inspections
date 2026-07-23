window.CHECKLIST_DATA = {
  storageKey: 'lube-oil-sampling',
  docTitle: 'Oil Sampling Checklist',
  docStandard: 'ASTM D4057 · ISO 4406 · ICML Standards - World-Class Condition Monitoring',
  docNo: 'CM-OIL-SAMP-001',
  revision: 'Rev 1',
  effectiveDate: 'Jul-26',
  infoFields: [
    { key: 'equipmentTag', label: 'Equipment Tag' },
    { key: 'equipmentName', label: 'Equipment Name' },
    { key: 'componentSampled', label: 'Component Sampled' },
    { key: 'lubricantType', label: 'Lubricant Type' },
    { key: 'samplingPointId', label: 'Sampling Point ID' },
    { key: 'samplingMethod', label: 'Sampling Method' },
    { key: 'technician', label: 'Technician Name' },
    { key: 'sampleId', label: 'Sample ID / Bottle No.' },
    { key: 'sampleDate', label: 'Sample Date' },
    { key: 'hourMeter', label: 'Hour Meter Reading' }
  ],
  sections: [
    {
      title: 'Pre-Sampling Safety & Preparation',
      items: [
        { id: '1.1', text: 'Review equipment sampling schedule and confirm sample is due' },
        { id: '1.2', text: 'Conduct Take 5 / SLAM risk assessment before approaching equipment' },
        { id: '1.3', text: 'Don appropriate PPE: safety glasses, nitrile gloves, steel-toe boots, hard hat' },
        { id: '1.4', text: 'Verify equipment is in a safe state for sampling (running at operating temp or LOTO)' },
        { id: '1.5', text: 'Confirm oil has been circulating at operating temperature for a minimum of 20 minutes' },
        { id: '1.6', text: 'Inspect sampling area for hazards: hot surfaces, moving parts, spill risks' },
        { id: '1.7', text: 'Position absorbent materials and a drip tray under the sampling point' },
        { id: '1.8', text: 'Verify sampling equipment is available and in good condition' }
      ]
    },
    {
      title: 'Sampling Equipment & Container Verification',
      items: [
        { id: '2.1', text: 'Verify sample bottle is new, clean, and factory-sealed (never reuse bottles)' },
        { id: '2.2', text: 'Confirm bottle is the correct type for tests required (clear for visual, opaque for certain tests)' },
        { id: '2.3', text: 'Check bottle seal is intact - reject any pre-opened or damaged bottles' },
        { id: '2.4', text: 'Inspect vacuum pump/sampling device for cleanliness and proper function' },
        { id: '2.5', text: 'Verify sampling tubing is new or dedicated to this lubricant type only' },
        { id: '2.6', text: 'Confirm tubing length is appropriate to reach the mid-stream sampling point' },
        { id: '2.7', text: 'Check that sample labels are legible and adhesive is intact' },
        { id: '2.8', text: 'Verify permanent marker is available for additional labelling if required' },
        { id: '2.9', text: 'Ensure sample submission forms and chain-of-custody documents are available' }
      ]
    },
    {
      title: 'Sampling Point Identification & Preparation',
      items: [
        { id: '3.1', text: 'Locate the designated primary sampling port (NOT drain plug or sight glass)' },
        { id: '3.2', text: 'Verify sampling point is clearly marked/labelled with equipment ID' },
        { id: '3.3', text: 'Confirm sampling point is in the live zone (turbulent flow area, not a dead leg)' },
        { id: '3.4', text: 'Inspect sampling valve/port for damage, contamination, or corrosion' },
        { id: '3.5', text: 'Clean external area around sampling port with a lint-free cloth' },
        { id: '3.6', text: 'Remove protective cap from sampling port and inspect for debris' },
        { id: '3.7', text: 'If using a minimess fitting, inspect o-ring condition on the sampling probe' },
        { id: '3.8', text: 'Verify no visible contamination at the sampling point entry' }
      ]
    },
    {
      title: 'Flushing Procedure (Critical for Sample Integrity)',
      items: [
        { id: '4.1', text: 'Connect sampling device to sampling port securely' },
        { id: '4.2', text: 'Open sampling valve slowly to prevent pressure surge' },
        { id: '4.3', text: 'Flush: draw a minimum of 10x tubing volume into a waste container before sampling' },
        { id: '4.4', text: 'Observe flush oil for obvious contamination (water, metal, discoloration)' },
        { id: '4.5', text: 'Record flush volume in notes (minimum 50-100ml typical)' },
        { id: '4.6', text: 'Dispose of flush oil properly - do not return it to the system' },
        { id: '4.7', text: 'Verify steady oil flow with no air bubbles before taking the sample' },
        { id: '4.8', text: 'If flow is intermittent or contains air, continue flushing until consistent' }
      ]
    },
    {
      title: 'Sample Collection Procedure',
      items: [
        { id: '5.1', text: 'Remove sample bottle cap carefully - do not touch the inside of the cap or bottle' },
        { id: '5.2', text: 'Hold the bottle cap with the open side facing down to prevent contamination' },
        { id: '5.3', text: 'Insert the sampling tube into the bottle - do not let the tube touch the bottle sides' },
        { id: '5.4', text: 'Fill bottle to the correct level (typically 80% full / 100ml minimum)' },
        { id: '5.5', text: 'Do not overfill - leave headspace for lab agitation' },
        { id: '5.6', text: 'Remove the sampling tube while maintaining positive oil flow (prevents air ingress)' },
        { id: '5.7', text: 'Immediately replace bottle cap - secure hand-tight' },
        { id: '5.8', text: 'Wipe exterior of bottle clean with a lint-free cloth' },
        { id: '5.9', text: 'Verify bottle is properly sealed with no leaks' },
        { id: '5.10', text: 'Close sampling valve and replace protective cap on sampling port' }
      ]
    },
    {
      title: 'Immediate Visual Inspection (Field Screening)',
      items: [
        { id: '6.1', text: 'Hold sample bottle against a light source - observe clarity/opacity' },
        { id: '6.2', text: 'Check for water contamination: milky/cloudy appearance, water droplets at bottom' },
        { id: '6.3', text: 'Look for particulate matter: visible metal flakes, dirt, fibers' },
        { id: '6.4', text: 'Observe oil colour: compare to new oil reference, if available' },
        { id: '6.5', text: 'Note any unusual odour: burnt smell indicates thermal degradation' },
        { id: '6.6', text: 'Check for foam or air entrainment in the sample' },
        { id: '6.7', text: 'If severe contamination is observed, notify supervisor immediately' },
        { id: '6.8', text: 'Document visual observations in notes section' }
      ]
    },
    {
      title: 'Sample Labelling & Identification (Critical for Traceability)',
      items: [
        { id: '7.1', text: 'Complete sample label with ALL required information (use permanent marker)' },
        { id: '7.2', text: 'Record equipment tag/ID exactly as it appears in the CMMS' },
        { id: '7.3', text: 'Record equipment name/description' },
        { id: '7.4', text: 'Record component sampled (engine, gearbox, hydraulic system, etc.)' },
        { id: '7.5', text: 'Record sample date in DD-MMM-YYYY format' },
        { id: '7.6', text: 'Record sample time in 24-hour format' },
        { id: '7.7', text: 'Record hour meter/odometer reading at time of sampling' },
        { id: '7.8', text: 'Record hours on oil since last oil change' },
        { id: '7.9', text: 'Record lubricant type and brand/grade' },
        { id: '7.10', text: 'Record oil top-up quantity since last sample, if any' },
        { id: '7.11', text: 'Record technician name and ID' },
        { id: '7.12', text: 'Affix label to bottle - ensure it adheres completely and is legible' },
        { id: '7.13', text: 'Cross-reference sample ID with equipment maintenance record' }
      ]
    },
    {
      title: 'Sample Handling, Storage & Chain of Custody',
      items: [
        { id: '8.1', text: 'Place sample in a protective bag/container to prevent damage during transport' },
        { id: '8.2', text: 'Store sample upright in a cool, dark location (avoid direct sunlight/heat)' },
        { id: '8.3', text: 'Do not freeze the sample unless specifically required by the lab' },
        { id: '8.4', text: 'Keep sample away from vibration sources that may separate particulates' },
        { id: '8.5', text: 'Complete chain-of-custody form with date, time, and handler signature' },
        { id: '8.6', text: 'Record sample ID in equipment maintenance log/CMMS' },
        { id: '8.7', text: 'Arrange for sample transport to lab within 24-48 hours of collection' },
        { id: '8.8', text: 'If shipping, use appropriate packaging to prevent breakage/leakage' },
        { id: '8.9', text: 'Retain a copy of submission form and chain of custody for records' }
      ]
    },
    {
      title: 'Post-Sampling Cleanup & Housekeeping',
      items: [
        { id: '9.1', text: 'Dispose of flush oil and waste in the designated waste oil container' },
        { id: '9.2', text: 'Clean sampling equipment and store properly for next use' },
        { id: '9.3', text: 'Dispose of used tubing if single-use type' },
        { id: '9.4', text: 'Clean any oil spills around the sampling area immediately' },
        { id: '9.5', text: 'Dispose of used gloves and absorbents in the appropriate waste container' },
        { id: '9.6', text: 'Verify sampling port protective cap is securely replaced' },
        { id: '9.7', text: 'Return all sampling equipment to designated storage location' },
        { id: '9.8', text: 'Remove all materials and tools from the equipment area' }
      ]
    },
    {
      title: 'Lab Submission & Documentation',
      items: [
        { id: '10.1', text: 'Complete lab sample submission form with all required information' },
        { id: '10.2', text: 'Specify tests required (wear metals, contamination, viscosity, TAN/TBN, etc.)' },
        { id: '10.3', text: 'Indicate sample priority: routine / urgent / emergency' },
        { id: '10.4', text: 'Provide alarm limits and target values, if applicable' },
        { id: '10.5', text: 'Include previous sample results for trending comparison, if available' },
        { id: '10.6', text: 'Verify correct email/contact for results delivery' },
        { id: '10.7', text: 'Retain a copy of all submission documents for the audit trail' },
        { id: '10.8', text: 'Update sampling schedule in CMMS for next sample due date' },
        { id: '10.9', text: 'Log sample submission details in the condition monitoring database' }
      ]
    }
  ],
  extraTables: [
    {
      title: 'Visual Inspection Record',
      columns: ['Parameter', 'Observation (Normal/Abnormal)', 'Action Required'],
      rows: ['Oil Colour', 'Clarity/Transparency', 'Water Presence (milky/cloudy)', 'Visible Particles/Debris', 'Foam/Air Entrainment', 'Odour (burnt/chemical)', 'Sludge/Sediment']
    },
    {
      title: 'Laboratory Tests Requested',
      columns: ['Test Name', 'Priority', 'Notes'],
      rows: ['Wear Metals - ICP Spectroscopy (Fe, Cu, Cr, Al, Pb, Sn)', 'Particle Count (ISO 4406)', 'Water Content (Karl Fischer)', 'Fuel Dilution (GC)', 'Soot Content (IR)', 'Viscosity @ 40°C / 100°C', 'Total Acid Number (TAN)', 'Total Base Number (TBN)', 'Oxidation (FTIR)', 'Nitration (FTIR)', 'Additive Elements (Zn, P, Ca, Mg)', 'Ferrography (Analytical)', 'PQ Index (Ferrous Debris)']
    }
  ],
  signoff: ['Sample Technician', 'Quality Verified By', 'Supervisor/CM Analyst']
};
