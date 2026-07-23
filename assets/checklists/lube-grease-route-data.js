window.CHECKLIST_DATA = {
  storageKey: 'lube-grease-route',
  docTitle: 'Greasing Routine Checklist',
  docStandard: 'Condition Monitoring - Lubrication Management Program',
  docNo: 'LUB-GREASE-RT-001',
  revision: 'Rev 1',
  effectiveDate: '23-Jul',
  infoFields: [
    { key: 'routeId', label: 'Route / Area / Section' },
    { key: 'routeDate', label: 'Checklist Date' },
    { key: 'shift', label: 'Shift' },
    { key: 'technician', label: 'Technician Name' },
    { key: 'supervisor', label: 'Supervisor' },
    { key: 'pointCount', label: 'No. of Grease Points on Route' },
    { key: 'greaseType', label: 'Grease Type(s) Used' }
  ],
  sections: [
    {
      title: 'Pre-Route Preparation',
      items: [
        { id: '1.1', text: 'Review grease route list and point sequence' },
        { id: '1.2', text: 'Verify correct grease type/cartridge loaded for the route' },
        { id: '1.3', text: 'Follow LOTO procedures before greasing where required' },
        { id: '1.4', text: 'Wear appropriate PPE' },
        { id: '1.5', text: 'Check grease compatibility before applying to any point' },
        { id: '1.6', text: 'Inspect grease gun for leaks or damage' }
      ]
    },
    {
      title: 'Grease Point Access & Condition',
      items: [
        { id: '2.1', text: 'Confirm correct grease point per asset (avoid cross-lubrication)' },
        { id: '2.2', text: 'Wipe grease fitting clean before applying grease' },
        { id: '2.3', text: 'Check fitting for damage or blockage' },
        { id: '2.4', text: 'Verify relief/purge port is clear, if fitted' }
      ]
    },
    {
      title: 'Grease Application',
      items: [
        { id: '3.1', text: 'Apply grease per specified quantity (avoid over- or under-greasing)' },
        { id: '3.2', text: 'Observe relief port for old grease purge' },
        { id: '3.3', text: 'Wipe excess grease from fitting after application' },
        { id: '3.4', text: 'Record quantity dispensed per point' }
      ]
    },
    {
      title: 'Condition Checks While On Route',
      items: [
        { id: '4.1', text: 'Listen for abnormal bearing noise at each point' },
        { id: '4.2', text: 'Check for grease leakage at seals' },
        { id: '4.3', text: 'Check for excessive heat at the bearing housing (record temperature before/after, if required)' },
        { id: '4.4', text: 'Check vibration is within normal range at each point, where monitored' },
        { id: '4.5', text: 'Note any missing or damaged grease fittings' },
        { id: '4.6', text: 'Report any abnormalities immediately to maintenance/reliability' }
      ]
    },
    {
      title: 'Documentation',
      items: [
        { id: '5.1', text: 'Log each point completed with quantity and grease type' },
        { id: '5.2', text: 'Flag any points skipped and the reason' },
        { id: '5.3', text: 'Report any abnormal findings to maintenance/reliability' },
        { id: '5.4', text: 'Update route completion percentage' }
      ]
    },
    {
      title: 'Post-Route',
      items: [
        { id: '6.1', text: 'Clean and store grease gun and cartridges' },
        { id: '6.2', text: 'Dispose of used cartridges/rags per site waste procedure' },
        { id: '6.3', text: 'Verify all points on the route are completed or exceptions are logged' }
      ]
    }
  ],
  extraTables: [
    {
      title: 'Grease Point Log (Frequency: 1=Daily, 7=Weekly, 8H=Every 8hr, 15=Every 15 Days, 30=Monthly)',
      columns: ['Equipment Tag / Point', 'Greasing Point', 'Freq.', 'Qty', 'Condition (G/F/P/C)', 'Observations'],
      rows: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8']
    }
  ],
  signoff: ['Technician', 'Lube Team Lead', 'Reliability Engineer']
};
