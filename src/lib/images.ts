// Curated Unsplash photo IDs per vertical. Loaded as direct CDN URLs.
// Format: https://images.unsplash.com/photo-{ID}?w=W&auto=format&fit=crop&q=75
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=75`;

export const IMG = {
  plumber: {
    hero: u("1607472586893-edb57bdc0e39"),
    services: [
      u("1585704032915-c3400ca199e7", 800),  // pipes
      u("1620626011761-996317b8d101", 800),  // geyser/water heater
      u("1581094794329-c8112a89af12", 800),  // drain
      u("1556909114-f6e7ad7d3136", 800),     // bathroom
    ],
    gallery: u("1601000938259-9e92002320b2"),
  },
  salon: {
    hero: u("1560066984-138dadb4c035"),
    portrait: u("1522337360788-8b13dee7a37e", 1200),
    interior: u("1521590832167-7bcbfaa6381f", 1600),
    gallery: [
      u("1487412947147-5cebf100ffc2", 800),  // hair
      u("1457972729786-0411a3b2b626", 800),  // makeup
      u("1582095133179-bfd08e2fc6b3", 800),  // nails
      u("1532926381893-7542290edf1d", 800),  // spa
    ],
  },
  mechanic: {
    hero: u("1486754735734-325b5831c3ad"),
    services: [
      u("1632823469850-2f77dd9c7f93", 800),  // engine
      u("1487754180451-c456f719a1fc", 800),  // brake
      u("1620712943543-bcc4688e7485", 800),  // battery
      u("1517994112540-009c47ea476b", 800),  // tools
      u("1486262715619-67b85e0b08d3", 800),  // workshop
      u("1492144534655-ae79c964c9d7", 800),  // car
    ],
  },
  restaurant: {
    hero: u("1555396273-367ea4eb4db5"),
    food: [
      u("1565299624946-b28f40a0ae38", 800),  // pizza/grill
      u("1551782450-a2132b4ba21d", 800),     // burger
      u("1546069901-ba9599a7e63c", 800),     // bowl
      u("1608039755401-742074f0548d", 800),  // wings
      u("1567620905732-2d1ec7ab7445", 800),  // bread
      u("1565895405138-6c3a1555da6a", 800),  // smashburger
      u("1606755962773-d324e0a13086", 800),  // hot dog
      u("1573080496219-bb080dd4f877", 800),  // fries
      u("1567620832903-9fc6debc209f", 800),  // bhajia
    ],
  },
  professional: {
    hero: u("1505664194779-8beaceb93744"),
    interior: u("1450101499163-c8848c66ca85", 1200),
    team: [
      u("1560250097-0b93528c311a", 600),
      u("1573497019940-1c28c88b4f3e", 600),
      u("1507003211169-0a1dd7228f2d", 600),
    ],
  },
  shop: {
    hero: u("1539109136881-3be0616acf4b"),
    products: [
      u("1490481651871-ab68de25d43d", 800),  // kaftan
      u("1591047139829-d91aecb6caea", 800),  // abaya
      u("1611916656173-875e4277bea6", 800),  // hijab
      u("1535632787350-4e68ef0ac584", 800),  // earrings
      u("1601762603339-fd61e28b698a", 800),  // scarf
      u("1620799140408-edc6dcb6d633", 800),  // modest set
      u("1605100804763-247f67b3557e", 800),  // cuff
      u("1600003263720-95b45a4035d5", 800),  // tasbih beads
    ],
    collections: [
      u("1483985988355-763728e1935b", 1000),
      u("1610375461246-83df859d849d", 1000),
      u("1542528180-a1208c5169a5", 1000),
    ],
  },
  guesthouse: {
    hero: u("1566073771259-6a8506099945"),
    rooms: [
      u("1631049307264-da0ec9d70304", 1000),  // garden suite
      u("1582719508461-905c673771fd", 1000),  // loft
      u("1582719478250-c89cae4dc85b", 1000),  // family
    ],
    landscape: u("1469474968028-56623f02e42e", 1600),
    interior: u("1540541338287-41700207dee6", 1200),
  },
  // for landing page demo cards
  cards: {
    plumber:      u("1607472586893-edb57bdc0e39", 800),
    salon:        u("1560066984-138dadb4c035", 800),
    mechanic:     u("1486754735734-325b5831c3ad", 800),
    restaurant:   u("1555396273-367ea4eb4db5", 800),
    professional: u("1505664194779-8beaceb93744", 800),
    shop:         u("1539109136881-3be0616acf4b", 800),
    guesthouse:   u("1566073771259-6a8506099945", 800),
  },
};
