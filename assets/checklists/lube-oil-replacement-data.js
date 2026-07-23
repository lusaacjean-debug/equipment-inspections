window.CHECKLIST_DATA = {
  storageKey: 'lube-oil-replacement',
  docTitle: 'Oil Replacement Checklist',
  docStandard: 'ISO 55000 Asset Management · ICML 55 Lubrication Standards',
  docNo: 'ORC-CM-001',
  revision: 'Rev 1',
  effectiveDate: '4-Jul-26',
  infoFields: [
    { key: 'equipmentTag', label: 'Equipment Tag' },
    { key: 'pmNumber', label: 'PM Number' },
    { key: 'equipmentName', label: 'Equipment Name' },
    { key: 'date', label: 'Date' },
    { key: 'lubricantType', label: 'Lubricant Type' },
    { key: 'technician', label: 'Technician Name' },
    { key: 'lubricantQty', label: 'Lubricant Quantity' },
    { key: 'technicianId', label: 'Technician ID' },
    { key: 'replacementFreq', label: 'Replacement Frequency' },
    { key: 'supervisor', label: 'Supervisor' }
  ],
  sections: [
    {
      title: 'Pre-Work Safety & Preparation',
      items: [
        { id: '1.1', text: 'Review Job Safety Analysis (JSA) / Safe Work Procedure for oil replacement' },
        { id: '1.2', text: 'Conduct Take 5 / SLAM risk assessment before starting work' },
        { id: '1.3', text: 'Verify equipment is locked out and tagged out (LOTO) per site procedure' },
        { id: '1.4', text: 'Confirm zero energy state - equipment isolated from all energy sources' },
        { id: '1.5', text: 'Don appropriate PPE: safety glasses, gloves, steel-toe boots, hard hat, FR clothing' },
        { id: '1.6', text: 'Position spill containment kit and absorbent materials at work area' },
        { id: '1.7', text: 'Ensure fire extinguisher is accessible within 10 meters of work area' },
        { id: '1.8', text: 'Verify adequate ventilation in enclosed areas' },
        { id: '1.9', text: 'Check weather conditions - suspend work if lightning or extreme conditions' },
        { id: '1.10', text: 'Communicate with control room/supervisor that work is commencing' }
      ]
    },
    {
      title: 'Equipment Inspection & Preparation',
      items: [
        { id: '2.1', text: 'Record equipment hour meter / odometer reading before service' },
        { id: '2.2', text: 'Allow equipment to cool to safe handling temperature (below 50°C)' },
        { id: '2.3', text: 'Visually inspect equipment for external oil leaks - document findings' },
        { id: '2.4', text: 'Inspect oil reservoir/sump for physical damage, cracks, or corrosion' },
        { id: '2.5', text: 'Check breather cap/desiccant breather condition - replace if saturated' },
        { id: '2.6', text: 'Verify drain plug condition and accessibility' },
        { id: '2.7', text: 'Inspect sight glass/dipstick for oil level and visible contamination' },
        { id: '2.8', text: 'Clean area around drain plug and filler cap to prevent contamination' },
        { id: '2.9', text: 'Position drain pan of adequate capacity under drain point' }
      ]
    },
    {
      title: 'Oil Drain Procedure',
      items: [
        { id: '3.1', text: 'Remove drain plug carefully - oil may still be warm' },
        { id: '3.2', text: 'Allow oil to drain completely - minimum 15 minutes for full drainage' },
        { id: '3.3', text: 'Inspect drain plug for metal particles or debris (indicator of wear)' },
        { id: '3.4', text: 'Inspect drain plug magnetic element, if equipped - record findings' },
        { id: '3.5', text: 'Clean drain plug threads thoroughly' },
        { id: '3.6', text: 'Replace drain plug washer/gasket with new OEM-specified component' },
        { id: '3.7', text: 'Inspect drained oil for abnormalities: metal flakes, milky appearance, burnt smell' },
        { id: '3.8', text: 'Measure and record drained oil quantity for comparison with fill specification' },
        { id: '3.9', text: 'Transfer used oil to approved waste oil container - no environmental spills' }
      ]
    },
    {
      title: 'Filter Inspection & Replacement',
      items: [
        { id: '4.1', text: 'Identify correct replacement filter part number per OEM specification' },
        { id: '4.2', text: 'Remove old filter element using proper filter wrench' },
        { id: '4.3', text: 'Cut open old filter and inspect media for metal particles or contamination' },
        { id: '4.4', text: 'Document filter condition - photograph if abnormal debris present' },
        { id: '4.5', text: 'Inspect filter housing/canister for damage, debris, or seal damage' },
        { id: '4.6', text: 'Clean filter housing thoroughly before installing new filter' },
        { id: '4.7', text: 'Verify new filter is correct specification and undamaged' },
        { id: '4.8', text: 'Pre-fill new filter with oil (spin-on types only - as per OEM guidance)' },
        { id: '4.9', text: 'Apply thin film of clean oil to new filter gasket' },
        { id: '4.10', text: 'Install new filter hand-tight plus specified turns (per OEM spec)' },
        { id: '4.11', text: 'Dispose of old filter in designated hazardous waste container' }
      ]
    },
    {
      title: 'Oil Refill Procedure',
      items: [
        { id: '5.1', text: 'Verify correct lubricant type matches equipment specification exactly' },
        { id: '5.2', text: 'Check lubricant container seal is intact - reject if tampered' },
        { id: '5.3', text: 'Verify lubricant batch number and expiry date is valid' },
        { id: '5.4', text: 'Reinstall drain plug to specified torque using calibrated torque wrench' },
        { id: '5.5', text: 'Clean filler port and surrounding area before removing filler cap' },
        { id: '5.6', text: 'Use dedicated transfer equipment (pump/funnel) - colour-coded per lubricant type' },
        { id: '5.7', text: 'Add oil through filtered transfer equipment (10-micron filter minimum)' },
        { id: '5.8', text: 'Fill to specified quantity - do not overfill' },
        { id: '5.9', text: 'Allow oil to settle for 5 minutes before checking level' },
        { id: '5.10', text: 'Verify oil level is within operating range using sight glass/dipstick' },
        { id: '5.11', text: 'Reinstall filler cap securely' },
        { id: '5.12', text: 'Record lubricant batch number in equipment maintenance record' }
      ]
    },
    {
      title: 'Post-Service Verification & Startup',
      items: [
        { id: '6.1', text: 'Conduct visual inspection - no leaks at drain plug, filter, or filler cap' },
        { id: '6.2', text: 'Remove all tools and materials from equipment and surrounding area' },
        { id: '6.3', text: 'Remove LOTO - follow site de-isolation procedure' },
        { id: '6.4', text: 'Notify control room/supervisor of impending startup' },
        { id: '6.5', text: 'Start equipment and run at idle for 5 minutes (or per OEM spec)' },
        { id: '6.6', text: 'Monitor oil pressure gauge - verify within normal operating range' },
        { id: '6.7', text: 'Check for leaks during initial operation - around all seals and connections' },
        { id: '6.8', text: 'Verify oil temperature reaches normal operating range' },
        { id: '6.9', text: 'Listen for abnormal noises: knocking, whining, or cavitation sounds' },
        { id: '6.10', text: 'Re-check oil level after 5-10 minutes of operation - top up if necessary' },
        { id: '6.11', text: 'Verify all warning lights and alarms are functioning correctly' }
      ]
    },
    {
      title: 'Environmental Compliance & Housekeeping',
      items: [
        { id: '7.1', text: 'Clean any oil spills immediately using approved absorbent materials' },
        { id: '7.2', text: 'Transfer used oil to designated waste oil storage area' },
        { id: '7.3', text: 'Dispose of used filters in hazardous waste container' },
        { id: '7.4', text: 'Dispose of contaminated rags and absorbents per site waste procedure' },
        { id: '7.5', text: 'Return unused lubricant to lubricant storage area with container sealed' },
        { id: '7.6', text: 'Clean and return all tools to designated storage location' },
        { id: '7.7', text: 'Remove spill containment equipment and inspect for reusability' },
        { id: '7.8', text: 'Verify work area is clean and free of trip/slip hazards' }
      ]
    },
    {
      title: 'Documentation & Record Keeping',
      items: [
        { id: '8.1', text: 'Update equipment service log with date, hours, and lubricant details' },
        { id: '8.2', text: 'Record lubricant type, quantity used, and batch number in CMMS' },
        { id: '8.3', text: 'Record filter part numbers replaced in maintenance system' },
        { id: '8.4', text: 'Document any abnormal findings (contamination, metal particles, leaks)' },
        { id: '8.5', text: 'Attach photos of any abnormal conditions to work order' },
        { id: '8.6', text: 'Update lubrication schedule/next service date in CMMS' },
        { id: '8.7', text: 'Complete and submit oil sample tracking form to lab' },
        { id: '8.8', text: 'Close out work order in maintenance management system' },
        { id: '8.9', text: 'Obtain supervisor sign-off for work completion' }
      ]
    }
  ],
  extraTables: [
    {
      title: 'Service Record Summary',
      columns: ['Item', 'Value / Details'],
      rows: ['Hour Meter Reading (Start)', 'Hour Meter Reading (End)', 'Oil Drained Quantity (L/Gal)', 'Oil Added Quantity (L/Gal)', 'Lubricant Batch Number', 'Filter Part Number(s)', 'Oil Sample ID', 'Next Service Due (Hours)', 'Next Service Due (Date)', 'Total Job Duration (Minutes)']
    },
    {
      title: 'Abnormal Findings / Defects Noted',
      columns: ['Finding #', 'Description', 'Severity (Low/Med/High)', 'Action Required', 'Follow-Up WO#'],
      rows: ['Finding 1', 'Finding 2', 'Finding 3', 'Finding 4', 'Finding 5']
    }
  ],
  signoff: ['Technician', 'Verifier (2nd Person)', 'Supervisor']
};
