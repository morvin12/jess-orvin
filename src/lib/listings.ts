export type Listing = {
  id: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  status: "Active" | "Pending" | "Sold";
  type: string;
  description: string;
  features: string[];
  agent: string;
  agentTitle: string;
  gradient: string;
  accentColor: string;
  tag?: string;
  listingType: "jess" | "team";
};

export const listings: Listing[] = [
  // ── Jess's Listings ──────────────────────────────────────────────────
  {
    id: "jl-001",
    price: 649000,
    address: "892 Redrock Canyon Dr",
    city: "St. George",
    state: "UT",
    zip: "84770",
    beds: 4,
    baths: 3,
    sqft: 2450,
    status: "Active",
    type: "Single Family",
    description:
      "Stunning modern home nestled against the iconic red canyon walls of St. George. Open-concept living, chef's kitchen with quartz countertops, and a resort-style backyard with pool and canyon views. Minutes from Entrada Golf and Snow Canyon State Park.",
    features: ["Canyon Views", "Pool & Spa", "3-Car Garage", "Chef's Kitchen", "Smart Home"],
    agent: "Jess Orvin",
    agentTitle: "Lead Agent",
    gradient: "from-[#0d0d0d] via-[#1a1a2e] to-[#16213e]",
    accentColor: "#c9a84c",
    tag: "Canyon Views",
    listingType: "jess",
  },
  {
    id: "jl-002",
    price: 1195000,
    address: "2341 Entrada Blvd",
    city: "Ivins",
    state: "UT",
    zip: "84738",
    beds: 4,
    baths: 4,
    sqft: 3850,
    status: "Active",
    type: "Luxury Estate",
    description:
      "Architectural masterpiece in the exclusive Entrada community. Sweeping views of Snow Canyon and Ivins Reservoir. Custom finishes throughout — limestone floors, vaulted ceilings, wine cellar, and a private casita. World-class golf community living.",
    features: ["Snow Canyon Views", "Private Casita", "Wine Cellar", "Golf Community", "Chef's Kitchen", "Home Theater"],
    agent: "Jess Orvin",
    agentTitle: "Lead Agent",
    gradient: "from-[#1a1a2e] via-[#0d0d0d] to-[#2c1654]",
    accentColor: "#c9a84c",
    tag: "Luxury Estate",
    listingType: "jess",
  },
  {
    id: "jl-003",
    price: 895000,
    address: "1105 Desert View Ct",
    city: "Washington",
    state: "UT",
    zip: "84780",
    beds: 4,
    baths: 3,
    sqft: 2900,
    status: "Pending",
    type: "Single Family",
    description:
      "Elevated on a premium lot with panoramic views of the Pine Valley Mountains and desert floor. Vaulted great room, primary suite with spa bath, and wraparound deck perfect for sunsets. Quiet cul-de-sac, minutes from Washington City parks and trails.",
    features: ["Mountain Views", "Wraparound Deck", "Cul-de-Sac", "RV Parking", "Upgraded Finishes"],
    agent: "Jess Orvin",
    agentTitle: "Lead Agent",
    gradient: "from-[#0d0d0d] via-[#1a2744] to-[#0d0d0d]",
    accentColor: "#c9a84c",
    tag: "Pending — Act Fast",
    listingType: "jess",
  },
  {
    id: "jl-004",
    price: 525000,
    address: "78 Cliffside Dr",
    city: "Santa Clara",
    state: "UT",
    zip: "84765",
    beds: 3,
    baths: 3,
    sqft: 2100,
    status: "Active",
    type: "Single Family",
    description:
      "Charming Santa Clara retreat with lush desert landscaping and a covered patio made for outdoor living. Updated kitchen, open floor plan, and a large backyard backing to open space. Walk to the Santa Clara River Trail and Kayenta Art Village.",
    features: ["Backs to Open Space", "Covered Patio", "Updated Kitchen", "Trail Access", "Desert Landscaping"],
    agent: "Jess Orvin",
    agentTitle: "Lead Agent",
    gradient: "from-[#1a1a1a] via-[#2d1b4e] to-[#0d0d0d]",
    accentColor: "#c9a84c",
    listingType: "jess",
  },
  {
    id: "jl-005",
    price: 387500,
    address: "445 Sage Canyon Ln",
    city: "Hurricane",
    state: "UT",
    zip: "84737",
    beds: 3,
    baths: 2,
    sqft: 1680,
    status: "Active",
    type: "Single Family",
    description:
      "Move-in ready Hurricane gem — freshly painted, new LVP flooring, and a beautifully landscaped yard. Close to Zion National Park gateway amenities, Sand Hollow State Park, and Quail Creek Reservoir. Perfect primary home or vacation rental investment.",
    features: ["New Flooring", "Near Zion Gateway", "Investment Potential", "Fenced Backyard", "2-Car Garage"],
    agent: "Jess Orvin",
    agentTitle: "Lead Agent",
    gradient: "from-[#0d0d0d] via-[#1a2744] to-[#111111]",
    accentColor: "#c9a84c",
    tag: "Great Value",
    listingType: "jess",
  },

  // ── Team Listings ─────────────────────────────────────────────────────
  {
    id: "tl-001",
    price: 349900,
    address: "3421 Sunstone Dr, Unit 12",
    city: "St. George",
    state: "UT",
    zip: "84770",
    beds: 2,
    baths: 2,
    sqft: 1250,
    status: "Active",
    type: "Townhome",
    description:
      "Immaculate townhome in one of St. George's most sought-after communities. Low-maintenance living with HOA-covered landscaping, community pool, and covered patio. Ideal for first-time buyers, snowbirds, or savvy investors seeking reliable rental income.",
    features: ["Community Pool", "HOA Landscaping", "Covered Patio", "Rental-Friendly HOA", "End Unit"],
    agent: "Taylor Rhodes",
    agentTitle: "Buyer's Specialist",
    gradient: "from-[#1a2744] via-[#0d0d0d] to-[#1a1a2e]",
    accentColor: "#c9a84c",
    tag: "Perfect Starter",
    listingType: "team",
  },
  {
    id: "tl-002",
    price: 775000,
    address: "567 Rimrock Rd",
    city: "Washington",
    state: "UT",
    zip: "84780",
    beds: 4,
    baths: 3,
    sqft: 2850,
    status: "Active",
    type: "Single Family",
    description:
      "Nestled among dramatic sandstone ridges, this Washington retreat offers the perfect blend of luxury and nature. Custom cabinetry, oversized windows framing the rimrock, and a backyard oasis with in-ground pool and built-in BBQ.",
    features: ["Rimrock Views", "In-Ground Pool", "Built-In BBQ", "Custom Cabinetry", "3-Car Garage"],
    agent: "Marcus Webb",
    agentTitle: "Listing Specialist",
    gradient: "from-[#0d0d0d] via-[#16213e] to-[#1a2744]",
    accentColor: "#c9a84c",
    listingType: "team",
  },
  {
    id: "tl-003",
    price: 459000,
    address: "112 Pioneer Canyon Ct",
    city: "Toquerville",
    state: "UT",
    zip: "84774",
    beds: 3,
    baths: 2,
    sqft: 1920,
    status: "Active",
    type: "Single Family",
    description:
      "Rare Toquerville find — an acre-plus property with a thoughtfully updated home and unobstructed views of Kolob Canyons. Oversized detached workshop/garage, fruit trees, and room for horses or an ADU. Off-the-beaten-path serenity minutes from I-15.",
    features: ["1+ Acre Lot", "Kolob Canyon Views", "Detached Workshop", "Horse Property", "Fruit Trees", "ADU Potential"],
    agent: "Sadie Callahan",
    agentTitle: "Rural Property Specialist",
    gradient: "from-[#111111] via-[#1a2744] to-[#0d0d0d]",
    accentColor: "#c9a84c",
    tag: "Acreage",
    listingType: "team",
  },
  {
    id: "tl-004",
    price: 595000,
    address: "2890 Mesa Verde Dr",
    city: "Hurricane",
    state: "UT",
    zip: "84737",
    beds: 4,
    baths: 3,
    sqft: 2380,
    status: "Pending",
    type: "Single Family",
    description:
      "Gorgeous Hurricane home with premium upgrades throughout. Gourmet kitchen with gas range and butler's pantry, primary suite with soaking tub, and a covered outdoor living space overlooking the mesa. Short-term rental permit eligible.",
    features: ["STR Permit Eligible", "Gourmet Kitchen", "Butler's Pantry", "Mesa Views", "Covered Outdoor Living"],
    agent: "Marcus Webb",
    agentTitle: "Listing Specialist",
    gradient: "from-[#1a1a2e] via-[#0d0d0d] to-[#1a2744]",
    accentColor: "#c9a84c",
    tag: "Pending",
    listingType: "team",
  },
];

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);

export const cities = ["St. George", "Hurricane", "Ivins", "Washington", "Santa Clara", "Toquerville"];

export const jessListings = listings.filter((l) => l.listingType === "jess");
export const teamListings = listings.filter((l) => l.listingType === "team");
