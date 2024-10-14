const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    reviews: []
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: []
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: []
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: { url: "https://images.unsplash.com/photo-1719299224546-be36a6c71832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3RvcmljJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: []
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    reviews: []
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    reviews: []
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: { url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: []
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: []
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: []
  },
  {
    title: "Charming Parisian Apartment",
    description: "Experience the romance of Paris in this stylish apartment with views of the Eiffel Tower.",
    image: { url: "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Paris",
    country: "France",
    reviews: []
  },
  {
    title: "Tropical Bali Villa",
    description: "Relax in your own private paradise with this luxurious villa featuring a infinity pool and lush gardens.",
    image: { url: "https://media.istockphoto.com/id/1013999792/photo/tropical-villa-among-palm-trees-at-swimming-pool-with-turquoise-water.webp?b=1&s=612x612&w=0&k=20&c=f1REdnKGbMF39GOORrzt_O2tEBD6BfPO_wk2qdPQ4d0=",
    },
    price: 2500,
    location: "Ubud",
    country: "Indonesia",
    reviews: []
  },
  {
    title: "Scottish Highland Cottage",
    description: "Escape to the rugged beauty of the Scottish Highlands in this cozy stone cottage with fireplace.",
    image: { url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NvdHRpc2glMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Inverness",
    country: "United Kingdom",
    reviews: []
  },
  {
    title: "Modern Tokyo Apartment",
    description: "Experience the vibrant energy of Tokyo in this sleek, modern apartment in the heart of Shibuya.",
    image: { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Tokyo",
    country: "Japan",
    reviews: []
  },
  {
    title: "Beachfront Condo in Maui",
    description: "Wake up to stunning ocean views in this luxurious beachfront condo on the beautiful island of Maui.",
    image: { url: "https://images.unsplash.com/photo-1562191326-0da0767cfffe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hmcm9udCUyMG1hdWl8ZW58MHx8MHx8fDA%3D",
    },
    price: 3000,
    location: "Maui",
    country: "United States",
    reviews: []
  },
  {
    title: "Rustic Cabin in the Canadian Rockies",
    description: "Surround yourself with breathtaking mountain views in this cozy cabin near Banff National Park.",
    image: { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRpYW4lMjByb2NraWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Banff",
    country: "Canada",
    reviews: []
  },
  {
    title: "Santorini Cave House",
    description: "Experience the unique charm of Santorini in this traditional cave house with stunning caldera views.",
    image: { url: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
    reviews: []
  },
  {
    title: "Luxury Safari Tent in Kenya",
    description: "Experience the African wilderness in comfort with this luxurious safari tent in the Maasai Mara.",
    image: { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Maasai Mara",
    country: "Kenya",
    reviews: []
  },
  {
    title: "Historic Amsterdam Canal House",
    description: "Stay in a piece of history in this beautifully restored 17th-century canal house in Amsterdam's city center.",
    image: { url: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1zdGVyZGFtJTIwY2FuYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: []
  },
  {
    title: "Eco-Lodge in Costa Rica",
    description: "Immerse yourself in nature at this sustainable eco-lodge surrounded by lush rainforest and exotic wildlife.",
    image: { url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zdGElMjByaWNhJTIwcmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Monteverde",
    country: "Costa Rica",
    reviews: []
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Experience paradise in this luxurious overwater bungalow with direct access to crystal-clear lagoon waters.",
    image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Bora Bora",
    country: "French Polynesia",
    reviews: []
  },
  {
    title: "Tuscan Vineyard Villa",
    description: "Indulge in the Italian countryside at this stunning villa surrounded by rolling hills and vineyards.",
    image: { url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVzY2FueXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Siena",
    country: "Italy",
    reviews: []
  },
  {
    title: "Treehouse Retreat in the Amazon",
    description: "Immerse yourself in the Amazon rainforest with this unique treehouse experience, surrounded by exotic wildlife.",
    image: { url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwcmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Manaus",
    country: "Brazil",
    reviews: []
  },
  {
    title: "Ice Hotel in Lapland",
    description: "Experience a night in a room made entirely of ice and snow, with the chance to see the Northern Lights.",
    image: { url: "https://images.unsplash.com/photo-1583527571525-e741039f5102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SWNlJTIwSG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    price: 1500,
    location: "Jukkasjärvi",
    country: "Sweden",
    reviews: []
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description: "Experience authentic Japanese culture in this traditional ryokan with tatami rooms and onsen baths.",
    image: { url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnlva2FufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Kyoto",
    country: "Japan",
    reviews: []
  },
  {
    title: "Luxury Desert Camp in Morocco",
    description: "Sleep under the stars in the Sahara Desert in this luxury camp with traditional Berber-style tents.",
    image: { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FoYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Merzouga",
    country: "Morocco",
    reviews: []
  },
  {
    title: "Lighthouse Keeper's Cottage",
    description: "Stay in a historic lighthouse keeper's cottage on a remote Scottish island with stunning sea views.",
    image: { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHRob3VzZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Isle of Skye",
    country: "United Kingdom",
    reviews: []
  },
  {
    title: "Floating Cabin on a Lake",
    description: "Unwind in this unique floating cabin on a serene lake, perfect for fishing and kayaking enthusiasts.",
    image: { url: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Ontario",
    country: "Canada",
    reviews: []
  },
  {
    title: "Historic Chateau in Loire Valley",
    description: "Live like royalty in this beautifully restored chateau surrounded by vineyards and gardens.",
    image: { url: "https://images.unsplash.com/photo-1602795969916-bfe693173620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlzdG9yaWMlMjBjaGF0ZWF1fGVufDB8fDB8fHww",
    },
    price: 4000,
    location: "Loire Valley",
    country: "France",
    reviews: []
  },
  {
    title: "Lakeside Cabin",
    description: "Cozy up by the fireplace in this quaint lakeside cabin. Perfect for fishing, hiking, and a peaceful retreat.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1663091687045-d108c7fb83e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGFrZXNpZGUlMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
    reviews: []
  },
  {
    title: "Luxury Penthouse",
    description: "Indulge in high-end living with this luxury penthouse offering panoramic city views and exclusive amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Los Angeles",
    country: "United States",
    reviews: []
  },
  {
    title: "Desert Hideaway",
    description: "Find tranquility in this secluded desert retreat. A perfect blend of modern comforts and nature’s serenity.",
    image: {
      url: "https://images.unsplash.com/photo-1682879654264-5f2a52e1ea0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzZXJ0JTIwSG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    price: 1100,
    location: "Sedona",
    country: "United States",
    reviews: []
  },
  {
    title: "Rustic Barn Conversion",
    description: "Stay in a rustic barn conversion with modern touches. Ideal for countryside getaways with family and friends.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1694475703960-c12c592b0f49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UnVzdGljJTIwQmFybiUyMENvbnZlcnNpb258ZW58MHx8MHx8fDA%3D"
    },
    price: 1300,
    location: "Nashville",
    country: "United States",
    reviews: []
  },
  {
    title: "Tropical Island Villa",
    description: "Experience island living in this stunning villa with private pool and beach access, perfect for tropical getaways.",
    image: {
      url: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRyb3BpY2FsJTIwSXNsYW5kJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D"
    },
    price: 2800,
    location: "Maui",
    country: "United States",
    reviews: []
  },
  {
    title: "Chic Downtown Apartment",
    description: "Stay in a chic downtown apartment, steps away from the city’s top attractions and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1594872661628-602b96d31367?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoaWMlMjBEb3dudG93biUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 1500,
    location: "Chicago",
    country: "United States",
    reviews: []
  },
  {
    title: "Secluded Forest Cabin",
    description: "Escape to the woods in this secluded cabin surrounded by tall trees. Perfect for nature lovers and adventurers.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VjbHVkZWQlMjBGb3Jlc3QlMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 1050,
    location: "Portland",
    country: "United States",
    reviews: []
  },
  {
    title: "Charming Cottage",
    description: "Relax in this charming cottage with a beautiful garden. A cozy and welcoming spot for a peaceful vacation.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1682285210821-5d1b5a406b97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENoYXJtaW5nJTIwQ290dGFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 800,
    location: "Napa Valley",
    country: "United States",
    reviews: []
  },
  {
    title: "Beachfront Villa",
    description: "Enjoy a luxurious stay at this beachfront villa, complete with a private pool and direct beach access.",
    image: {
      url: "https://images.unsplash.com/photo-1663380600919-3abbba2aed2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYWNoZnJvbnQlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 3200,
    location: "Miami",
    country: "United States",
    reviews: []
  },
  {
    title: "Countryside Manor",
    description: "Stay in this grand countryside manor, perfect for large gatherings and family reunions in a serene environment.",
    image: {
      url: "https://images.unsplash.com/photo-1668375485664-8e529ea89581?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvdW50cnlzaWRlJTIwTWFub3J8ZW58MHx8MHx8fDA%3D"
    },
    price: 2500,
    location: "Charleston",
    country: "United States",
    reviews: []
  },
  {
    title: "Hilltop Vineyard Retreat",
    description: "Relax at this luxurious hilltop retreat with a vineyard view. Perfect for wine lovers and couples.",
    image: {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGlsbHRvcCUyMFZpbmV5YXJkJTIwcm9vbSUyMGhvdGVsfGVufDB8fDB8fHww"
    },
    price: 2700,
    location: "Sonoma",
    country: "United States",
    reviews: []
  },
  {
    title: "Ski Chalet",
    description: "Hit the slopes with this cozy ski chalet. Enjoy easy access to ski resorts and a warm fireplace after a day on the mountain.",
    image: {
      url: "https://images.unsplash.com/photo-1546593064-053d21199be1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNraSUyMENoYWxldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 1600,
    location: "Breckenridge",
    country: "United States",
    reviews: []
  }
];



module.exports = { data: sampleListings };