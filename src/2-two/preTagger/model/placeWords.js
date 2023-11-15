export default [
  // geology
  'atoll',
  'basin',
  'bay',
  'beach',
  'bluff',
  'bog',
  'camp',
  'canyon',
  'canyons',
  'cape',
  'cave',
  'caves',
  // 'cliff',
  'cliffs',
  'coast',
  'cove',
  'coves',
  'crater',
  'creek',
  'desert',
  'dune',
  'dunes',
  'escarpment',
  'estuary',
  'falls',
  'fjord',
  'fjords',
  'forest',
  'forests',
  'glacier',
  'gorge',
  'gorges',
  'gulf',
  'gully',
  'highland',
  'hill',
  'hills',
  'inlet',
  'island',
  'islands',
  'isthmus',
  'knoll',
  'lagoon',
  'lake',
  'marsh',
  'marshes',
  'mount',
  'mountain',
  'mountains',
  'narrows',
  'peninsula',
  'plains',
  'plateau',
  'pond',
  'rapids',
  'ravine',
  'reef',
  'reefs',
  'ridge',
  // 'river delta',
  'river',
  'rivers',
  'sandhill',
  'shoal',
  'shore',
  'shoreline',
  'shores',
  'strait',
  'straits',
  'stream',
  'swamp',
  'tombolo',
  'trail',
  'trails',
  'trench',
  'valley',
  'vallies',
  'volcano',
  'waterfall',
  'watershed',
  'wetland',
  'woods',

  // districts
  'burough',
  'county',
  'district',
  'municipality',
  'prefecture',
  'province',
  'region',
  'reservation',
  'state',
  'territory',
  'borough',
  'metropolis',
  'downtown',
  'uptown',
  'midtown',
  'city',
  'town',
  'township',
  'hamlet',
  'country',
  'kingdom',
  'enclave',
  'neighbourhood',
  'neighborhood',
  'kingdom',
  'ward',
  'zone',
  'range',

  //building/ complex
  'airport',
  'amphitheater',
  'arch',
  'arena',
  'auditorium',
  'bar',
  'barn',
  'basilica',
  'battlefield',
  'bridge',
  'building',
  'castle',
  'centre',
  'coliseum',
  'complex',
  'dam',
  'farm',
  'field',
  'fort',
  'garden',
  'gardens',
  'grandstand',
  'grounds',
  'gymnasium',
  'hall',
  'house',
  'levee',
  'library',
  'memorial',
  'monument',
  'museum',
  'palace',
  'pillar',
  'pit',
  'pits',
  'place',
  'plantation',
  'playhouse',
  'point',
  'quarry',
  'room',
  'ruins',
  'sportsfield',
  'sportsplex',
  'stadium',
  // 'statue',
  'terrace',
  'terraces',
  'theater',
  'tower',
  'park',
  'parks',

  // 'sports centre',
  // 'sports field',
  // 'soccer complex',
  // 'soccer centre',
  // 'sports complex',
  // 'civic centre',

  // roads
  'st',
  'street',
  'rd',
  'road',
  'crescent',
  'cr',
  'way',
  'tr',
  'terrace',
  'avenue',
  'ave',

  // misc
  'site',
  // '',
].reduce((h, str) => {
  h[str] = true
  return h
}, {})
