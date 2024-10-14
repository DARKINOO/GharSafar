const indiaListings = [
  {
    title: "Royal Heritage Haveli",
    description: "Live like royalty in this restored heritage haveli, complete with traditional décor and luxury amenities.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697730376263-90da9f2a1238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF2ZWxpfGVufDB8fDB8fHww"
    },
    price: 2500,
    location: "Jaipur",
    country: "India",
    reviews: []
  },
    {
      title: "Luxury Houseboat Stay",
      description: "Experience the charm of Kerala’s backwaters on this luxurious houseboat. Perfect for a romantic getaway.",
      image: {
        url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG91c2Vib2F0JTIwSW5kaWF8ZW58MHx8MHx8fDA%3D"
      },
      price: 1500,
      location: "Alleppey",
      country: "India",
      reviews: []
    },
    {
      title: "Mountain Chalet with Himalayas View",
      description: "Stay in this cozy chalet with breathtaking views of the Himalayas. A perfect retreat for nature lovers.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1697730116434-3105bb303de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1vdW50YWluJTIwaG91c2UlMjB3aXRoJTIwSGltYWxheWFzJTIwVmlld3xlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1800,
      location: "Manali",
      country: "India",
      reviews: []
    },
    {
      title: "Beachfront Villa in Goa",
      description: "Stay in this stunning beachfront villa with private access to one of Goa's serene beaches. Perfect for a tropical escape.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hmcm9udCUyMHZpbGxhJTIwaW4lMjBnb2F8ZW58MHx8MHx8fDA%3D"
      },
      price: 2000,
      location: "Goa",
      country: "India",
      reviews: []
    },
    {
      title: "Coastal Resort Stay",
      description: "Relax in a luxurious coastal resort with beach access and sea views, ideal for a relaxing break by the ocean.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29hc3RhbCUyMFJlc29ydCUyMGluZGlhfGVufDB8fDB8fHww"
      },
      price: 2200,
      location: "Kovalam",
      country: "India",
      reviews: []
    },
    {
      title: "Himalayan Eco Lodge",
      description: "Immerse yourself in nature at this eco-friendly lodge surrounded by the majestic Himalayan mountains.",
      image: {
        url: "https://images.unsplash.com/photo-1470043201067-764120126eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGltYWxheWFuJTIwJTIwTG9kZ2V8ZW58MHx8MHx8fDA%3D"
      },
      price: 1000,
      location: "Rishikesh",
      country: "India",
      reviews: []
    },
    {
      title: "Lakefront Palace Stay",
      description: "Stay at this grand lakefront palace, known for its stunning architecture and views of the lake.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1697729612944-b5b73ea1bf2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFrZWZyb250JTIwUGFsYWNlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 3000,
      location: "Udaipur",
      country: "India",
      reviews: []
    },
    {
      title: "Desert Camp Experience",
      description: "Experience desert life with this luxury camp stay in the heart of the Thar Desert, complete with cultural performances.",
      image: {
        url: "https://images.unsplash.com/photo-1527419105721-af1f23c86dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzZXJ0JTIwQ2FtcHxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1700,
      location: "Jaisalmer",
      country: "India",
      reviews: []
    },
    {
      title: "Treehouse Stay in Kerala",
      description: "Live among the trees with this unique treehouse stay in Kerala’s lush forests, offering a tranquil escape.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1685305676839-26406ddbe4de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJlZWhvdXNlJTIwU3RheSUyMGluJTIwS2VyYWxhfGVufDB8fDB8fHww"
      },
      price: 1200,
      location: "Wayanad",
      country: "India",
      reviews: []
    },
    {
      title: "Tea Estate Bungalow",
      description: "Stay at this colonial-era bungalow set within a picturesque tea estate, offering breathtaking views of the plantations.",
      image: {
        url: "https://images.unsplash.com/photo-1653131136383-d7ccfd71cb9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRlYSUyMCUyMCUyMG11bm5hcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1400,
      location: "Munnar",
      country: "India",
      reviews: []
    },
    {
      title: "Himalayan Camping",
      description: "Camp under the stars in the Himalayas with this adventure-filled stay, perfect for trekking and nature enthusiasts.",
      image: {
        url: "https://images.unsplash.com/photo-1583912489026-898cdc54cbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BpdGklMjBWYWxsZXl8ZW58MHx8MHx8fDA%3D"
      },
      price: 900,
      location: "Spiti Valley",
      country: "India",
      reviews: []
    },
    {
      title: "Boutique Stay with Beach View",
      description: "Enjoy the ocean breeze at this charming boutique stay with stunning views of the Arabian Sea.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9kZ2UlMjB3aXRoJTIwQmVhY2glMjBWaWV3fGVufDB8fDB8fHww"
      },
      price: 1800,
      location: "Varkala",
      country: "India",
      reviews: []
    },
    {
      title: "Jungle Resort Stay",
      description: "Immerse yourself in the lush greenery of India’s dense forests with this luxury jungle resort stay.",
      image: {
        url: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnVuZ2xlJTIwUmVzb3J0JTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 2100,
      location: "Bandipur",
      country: "India",
      reviews: []
    },
    {
      title: "Spice Plantation Stay",
      description: "Enjoy a stay in a spice plantation where you can discover the secrets of Indian spices and explore the lush surroundings.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1697730133511-31d978a0e8a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BpY2UlMjBQbGFudGF0aW9uJTIwaG91c2UlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1600,
      location: "Thekkady",
      country: "India",
      reviews: []
    },
    {
      title: "Luxury Villa on the Ganges",
      description: "Stay in a serene villa located on the banks of the holy Ganges river. Enjoy spiritual retreats and breathtaking views.",
      image: {
        url: "https://media.istockphoto.com/id/680199954/photo/rishikesh-india-view-to-ganga-river-lakshman-jhula-bridge-and-colored-houses.webp?a=1&b=1&s=612x612&w=0&k=20&c=BISWrYlCn4RZhqt74tqu9eqyYcZytw_Vf8_3uatpqk8="
      },
      price: 2300,
      location: "Rishikesh",
      country: "India",
      reviews: []
    },
    {
      title: "Colonial Mansion Stay",
      description: "Step back in time and experience colonial-era luxury in this beautifully restored mansion in the heart of Shimla.",
      image: {
        url: "https://images.unsplash.com/photo-1664966965041-c9451b1dc196?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuc2lvbiUyMHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1800,
      location: "Shimla",
      country: "India",
      reviews: []
    },
    {
      title: "Eco Beach Resort",
      description: "Stay at this eco-friendly beach resort where sustainability meets luxury. Ideal for an eco-conscious traveler.",
      image: {
        url: "https://images.unsplash.com/photo-1694150655074-e7b02d5e7b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fEJlYWNoJTIwUmVzb3J0fGVufDB8fDB8fHww"
      },
      price: 2500,
      location: "Andaman and Nicobar Islands",
      country: "India",
      reviews: []
    },
    {
      title: "Chikmagalur Coffee Estate Retreat",
      description: "A cozy retreat set within the famous coffee estates of Chikmagalur. Ideal for a peaceful and aromatic getaway.",
      image: {
        url: "https://media.istockphoto.com/id/506921458/photo/western-ghats-mountains.jpg?s=612x612&w=0&k=20&c=Kalt0aRM5vG83bFKN4IlYJFt6ZiQSbkynOKwO0trnVw="
      },
      price: 1500,
      location: "Chikmagalur",
      country: "India",
      reviews: []
    },
    {
      title: "Heritage Fort Stay",
      description: "Live the royal life in this historical fort turned into a luxury hotel. Experience India's regal history firsthand.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1697730392744-f02b027471b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVyaXRhZ2UlMjBGb3J0JTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 3200,
      location: "Jodhpur",
      country: "India",
      reviews: []
    },
    {
      title: "Luxury Safari Lodge",
      description: "Get up close with India's wildlife with this luxurious safari lodge, offering guided tours into the wild.",
      image: {
        url: "https://images.unsplash.com/photo-1719033176839-7336e7b6638f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmFudGhhbWJvcmUlMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 3000,
      location: "Ranthambore",
      country: "India",
      reviews: []
    },
    {
      title: "Boutique Riverside Cottage",
      description: "This charming cottage is nestled beside a quiet river, perfect for those looking for a peaceful, nature-filled escape.",
      image: {
        url: "https://plus.unsplash.com/premium_photo-1663945778955-d7f9716e38b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJpdmVyc2lkZSUyMENvdHRhZ2UlMjBjb29yZ3xlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1800,
      location: "Coorg",
      country: "India",
      reviews: []
    },
    {
      title: "Desert Fortress Stay",
      description: "Experience life inside an ancient desert fortress with modern comforts, offering panoramic views of the golden sands.",
      image: {
        url: "https://media.istockphoto.com/id/1929884010/photo/the-ramparts-of-jaisalmer-fort-in-asia-india-rajasthan-jaisalmer-in-summer-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=sKjejQA_aBXPIJ-w59RNxb1A_YQevsIcv-LE-Vcax1U="
      },
      price: 2800,
      location: "Bikaner",
      country: "India",
      reviews: []
    },
    {
      title: "Luxury House in the Hills",
      description: "A modern, luxurious house situated in the green hills of Ooty, offering cool weather and breathtaking views.",
      image: {
        url: "https://images.unsplash.com/photo-1609063328316-02170fa72c4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T290eSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
      },
      price: 1900,
      location: "Ooty",
      country: "India",
      reviews: []
    },
    {
      title: "Modern Hillside Villa",
      description: "Relax in a modern villa set on the hills, providing scenic views and luxurious amenities.",
      image: {
        url: "https://images.unsplash.com/photo-1688714834814-ac4ab6370215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29kYWlrYW5hbCUyMGhpbGwlMjBzdGF0aW9ufGVufDB8fDB8fHww"
      },
      price: 2500,
      location: "Kodaikanal",
      country: "India",
      reviews: []
    },
    {
      title: "Beachfront Cottage",
      description: "Stay at this beautiful beachfront cottage for an unforgettable tropical getaway, steps away from the ocean.",
      image: {
        url: "https://media.istockphoto.com/id/1272097065/photo/man-at-camping-tent-inside-view-of-amazing-landscape-seashore.jpg?s=612x612&w=0&k=20&c=x_djoOfb_hNrpc_9QMLdbLhb1h14zxRj9bQJMgyB-0o="
      },
      price: 1600,
      location: "Gokarna",
      country: "India",
      reviews: []
    },
    {
      title: "Tea Garden Estate Stay",
      description: "Stay at this picturesque estate surrounded by lush tea gardens, perfect for those looking for tranquility.",
      image: {
        url: "https://media.istockphoto.com/id/626779638/photo/tea-plantations-in-munnar-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=VhsGOz2GL6Hecin04QwUry9fm4xvBhfGNURYWA3QlCA="
      },
      price: 1300,
      location: "Darjeeling",
      country: "India",
      reviews: []
    },
  ];

  module.exports = { data: indiaListings };