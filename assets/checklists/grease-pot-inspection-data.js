window.CHECKLIST_DATA = {
  storageKey: 'grease-pot-inspection',
  docTitle: 'Automatic Grease Lubricator (Grease Pot) Inspection Checklist',
  docStandard: 'Condition Monitoring - Lubrication Maintenance Program',
  docNo: 'LUB-CHK-001',
  revision: 'Rev 1.0',
  effectiveDate: 'Jul-2026',
  infoFields: [
    { key: 'areaLocation', label: 'Area / Location' },
    { key: 'equipmentTag', label: 'Equipment Tag' },
    { key: 'lubricatorId', label: 'Lubricator ID' },
    { key: 'greaseType', label: 'Grease Type' },
    { key: 'capacity', label: 'Capacity (g/mL)' },
    { key: 'dischargeSetting', label: 'Discharge Setting' },
    { key: 'nextDue', label: 'Next Inspection Due' },
    { key: 'inspector', label: 'Inspector Name' },
    { key: 'inspectionDate', label: 'Inspection Date' }
  ],
  sections: [
    {
      title: 'Inspection Criteria',
      items: [
        { id: '1', text: 'Reservoir grease level - grease level greater than 25% of capacity' },
        { id: '2', text: 'Piston movement - piston moves freely without obstruction' },
        { id: '3', text: 'Grease leakage - no visible leaks at body, fittings, or connections' },
        { id: '4', text: 'Body/housing condition - transparent body intact, no cracks or damage' },
        { id: '5', text: 'Spring condition - not damaged, deformed, or corroded' },
        { id: '6', text: 'Outlet fitting - clean and unobstructed' },
        { id: '7', text: 'Feed line condition - not blocked, kinked, or damaged' },
        { id: '8', text: 'Grease grade verification - correct grease type installed per specification' },
        { id: '9', text: 'Mounting security - dispenser securely mounted to bracket/equipment' },
        { id: '10', text: 'Discharge rate - dispensing rate matches equipment requirement' },
        { id: '11', text: 'Grease delivery confirmation - grease visible at the lubrication point' },
        { id: '12', text: 'Grease contamination check - no contamination (water, dirt, debris) visible' },
        { id: '13', text: 'Air bubbles - no air bubbles in grease body affecting discharge' },
        { id: '14', text: 'Replacement assessment - unit does not require replacement (not empty/expired)' }
      ]
    }
  ],
  signoff: ['Inspector', 'Supervisor', 'Maintenance Planner']
};
