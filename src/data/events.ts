export interface TicketType {
  name: string;
  price: number;
  amount: number; // Available quota for this specific type
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  price: number; // Display price (starting from)
  stock: number; // Total available stock (sum of ticket types)
  ticketTypes: TicketType[];
  imageUrl: string;
  isFeatured: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Neon Lights Festival 2026",
    description: "Experience the electrifying atmosphere of the biggest EDM festival of the year. Featuring top international DJs and a stunning light show that will leave you breathless.",
    date: "2026-08-15",
    time: "18:00",
    location: "GBK Stadium, Jakarta",
    city: "Jakarta",
    price: 1500000,
    stock: 100,
    ticketTypes: [
      { name: "General Admission", price: 1500000, amount: 80 },
      { name: "VIP", price: 2500000, amount: 20 }
    ],
    imageUrl: "/posters/poster konser 1.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Jazz Under the Stars",
    description: "A night of smooth jazz and relaxation under the open sky. Bring your loved ones for a romantic evening accompanied by the best jazz musicians.",
    date: "2026-09-20",
    time: "19:30",
    location: "City Park, Bandung",
    city: "Bandung",
    price: 750000,
    stock: 50,
    ticketTypes: [
      { name: "Regular", price: 750000, amount: 40 },
      { name: "Seated", price: 950000, amount: 10 }
    ],
    imageUrl: "/posters/poster konser 2.jpg",
    isFeatured: false,
  },
  {
    id: "3",
    title: "Rock Legends Reunion",
    description: "The legendary rock bands return for one last epic performance. Get ready to headbang to the classics that defined a generation.",
    date: "2026-10-05",
    time: "20:00",
    location: "JCC Plenary Hall, Jakarta",
    city: "Jakarta",
    price: 2000000,
    stock: 0, // SOLD OUT
    ticketTypes: [
      { name: "Festival", price: 2000000, amount: 0 },
      { name: "VIP Backstage", price: 5000000, amount: 0 }
    ],
    imageUrl: "/posters/poster konser 3.jpg",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Indie Vibes Showcase",
    description: "Discover the best up-and-coming indie artists in the country. A chill setup perfect for hanging out with friends and discovering new music.",
    date: "2026-11-12",
    time: "16:00",
    location: "Live House, Yogyakarta",
    city: "Yogyakarta",
    price: 300000,
    stock: 200,
    ticketTypes: [
      { name: "Early Bird", price: 300000, amount: 50 },
      { name: "Presale 1", price: 450000, amount: 150 }
    ],
    imageUrl: "/posters/poster konser 4.jpg",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Classical Symphony Night",
    description: "A breathtaking performance by the National Symphony Orchestra. An elegant evening of Mozart, Beethoven, and Bach.",
    date: "2026-12-01",
    time: "19:00",
    location: "Art Center, Bali",
    city: "Bali",
    price: 1000000,
    stock: 10,
    ticketTypes: [
      { name: "Balcony", price: 1000000, amount: 5 },
      { name: "Orchestra", price: 2000000, amount: 5 }
    ],
    imageUrl: "/posters/poster konser 5.jpg",
    isFeatured: true,
  },
  {
    id: "6",
    title: "K-Pop Super Wave",
    description: "The biggest K-Pop stars descend on Jakarta for a night of unforgettable hits and synchronized dance moves.",
    date: "2026-08-25",
    time: "19:00",
    location: "ICE BSD, Tangerang",
    city: "Jakarta",
    price: 2500000,
    stock: 500,
    ticketTypes: [
      { name: "Purple Zone", price: 2500000, amount: 300 },
      { name: "Pink VIP", price: 4500000, amount: 200 }
    ],
    imageUrl: "/posters/poster konser 6.jpg",
    isFeatured: true,
  },
  {
    id: "7",
    title: "Sunset Folk Festival",
    description: "Relaxing acoustic tunes by the beach as the sun sets. Perfect for a chill weekend getaway.",
    date: "2026-09-10",
    time: "16:30",
    location: "Pantai Kuta, Bali",
    city: "Bali",
    price: 150000,
    stock: 150,
    ticketTypes: [
      { name: "General Entry", price: 150000, amount: 150 }
    ],
    imageUrl: "/posters/poster konser 7.jpg",
    isFeatured: false,
  },
  {
    id: "8",
    title: "Surabaya Metal Fest",
    description: "Loud, fast, and heavy. The ultimate gathering for metalheads in East Java featuring local and international acts.",
    date: "2026-11-05",
    time: "14:00",
    location: "Jatim Expo, Surabaya",
    city: "Surabaya",
    price: 250000,
    stock: 300,
    ticketTypes: [
      { name: "Mosh Pit", price: 250000, amount: 300 }
    ],
    imageUrl: "/posters/poster konser 8.jpg",
    isFeatured: false,
  },
  {
    id: "9",
    title: "Teater Wayang Modern",
    description: "A contemporary retelling of the Mahabharata using modern lighting and projection mapping.",
    date: "2026-10-20",
    time: "19:30",
    location: "Taman Budaya, Yogyakarta",
    city: "Yogyakarta",
    price: 50000,
    stock: 80,
    ticketTypes: [
      { name: "Student", price: 50000, amount: 30 },
      { name: "General", price: 100000, amount: 50 }
    ],
    imageUrl: "/posters/poster konser 9.jpg",
    isFeatured: false,
  },
  {
    id: "10",
    title: "Medan Culinary & Jazz",
    description: "Enjoy the legendary food of Medan accompanied by smooth jazz performances from Sumatra's best.",
    date: "2026-12-15",
    time: "17:00",
    location: "Lapangan Benteng, Medan",
    city: "Medan",
    price: 0,
    stock: 0, // SOLD OUT (Free Entry but ticketed)
    ticketTypes: [
      { name: "Free Pass", price: 0, amount: 0 }
    ],
    imageUrl: "/posters/poster konser 10.jpg",
    isFeatured: true,
  },
  {
    id: "11",
    title: "Pop Punk Revival Night",
    description: "Relive your teenage angst with the best pop punk anthems from the 2000s covered by top tribute bands.",
    date: "2026-09-30",
    time: "20:00",
    location: "Hard Rock Cafe, Bali",
    city: "Bali",
    price: 200000,
    stock: 40,
    ticketTypes: [
      { name: "Entry + Drink", price: 200000, amount: 40 }
    ],
    imageUrl: "/posters/poster konser 11.jpg",
    isFeatured: false,
  },
  {
    id: "12",
    title: "Semarang Sketch Comedy",
    description: "Laugh out loud with the funniest stand-up comedians and sketch groups from Semarang.",
    date: "2026-10-10",
    time: "19:00",
    location: "Gedung Juang 45, Semarang",
    city: "Semarang",
    price: 75000,
    stock: 90,
    ticketTypes: [
      { name: "Regular", price: 75000, amount: 90 }
    ],
    imageUrl: "/posters/poster konser 12.jpg",
    isFeatured: false,
  },
  {
    id: "13",
    title: "Techno Warehouse Party",
    description: "Underground techno beats in an abandoned warehouse setting. Strictly defined vibes only.",
    date: "2026-11-20",
    time: "23:00",
    location: "Secret Location, Jakarta",
    city: "Jakarta",
    price: 350000,
    stock: 120,
    ticketTypes: [
      { name: "Entry", price: 350000, amount: 120 }
    ],
    imageUrl: "/posters/poster konser 13.jpg",
    isFeatured: false,
  },
  {
    id: "14",
    title: "Orchestra in the Park",
    description: "A free open-air classical concert in the heart of Bandung. A perfect weekend date.",
    date: "2026-08-28",
    time: "15:00",
    location: "Taman Hutan Raya, Bandung",
    city: "Bandung",
    price: 50000,
    stock: 300,
    ticketTypes: [
      { name: "Donation Seat", price: 50000, amount: 300 }
    ],
    imageUrl: "/posters/poster konser 14.jpg",
    isFeatured: true,
  },
  {
    id: "15",
    title: "Traditional Dance Gala",
    description: "A showcase of traditional dances from across the archipelago.",
    date: "2026-09-05",
    time: "19:30",
    location: "GWK Cultural Park, Bali",
    city: "Bali",
    price: 150000,
    stock: 200,
    ticketTypes: [
      { name: "Amphitheater", price: 150000, amount: 200 }
    ],
    imageUrl: "/posters/poster konser 15.jpg",
    isFeatured: false,
  },
  {
    id: "16",
    title: "Future Bass Experience",
    description: "Immersive visuals and heavy drops. The future of bass music is here.",
    date: "2026-10-31",
    time: "21:00",
    location: "The Pallas, Jakarta",
    city: "Jakarta",
    price: 500000,
    stock: 60,
    ticketTypes: [
      { name: "GA", price: 500000, amount: 60 }
    ],
    imageUrl: "/posters/poster konser 16.jpg",
    isFeatured: false,
  },
  {
    id: "17",
    title: "Acoustic Coffee Sessions",
    description: "Intimate acoustic performances in the cozy atmosphere of Filosopi Kopi.",
    date: "2026-11-15",
    time: "18:00",
    location: "Filosopi Kopi, Yogyakarta",
    city: "Yogyakarta",
    price: 100000,
    stock: 30,
    ticketTypes: [
      { name: "Table for 2", price: 100000, amount: 30 }
    ],
    imageUrl: "/posters/poster konser 17.jpg",
    isFeatured: false,
  },
  {
    id: "18",
    title: "Rock N Roll High School",
    description: "High energy rock covers and originals for the youth.",
    date: "2026-12-10",
    time: "16:00",
    location: "Saparua Park, Bandung",
    city: "Bandung",
    price: 50000,
    stock: 1000,
    ticketTypes: [
      { name: "Presale", price: 50000, amount: 1000 }
    ],
    imageUrl: "/posters/poster konser 18.jpg",
    isFeatured: false,
  },
  {
    id: "19",
    title: "Lombok Reggae Fest",
    description: "Good vibes and easy skanking on the beaches of Lombok.",
    date: "2026-09-15",
    time: "15:00",
    location: "Senggigi Beach, Lombok",
    city: "Bali", // Grouping nearby for simplicity or add Lombok to filter if requested
    price: 100000,
    stock: 400,
    ticketTypes: [
      { name: "Beach Access", price: 100000, amount: 400 }
    ],
    imageUrl: "/posters/poster konser 19.jpg",
    isFeatured: true,
  },
  {
    id: "20",
    title: "New Year's Eve Spectacular",
    description: "Count down to 2026 with the biggest fireworks display and music festival in the city.",
    date: "2026-12-31",
    time: "20:00",
    location: "Monas, Jakarta",
    city: "Jakarta",
    price: 300000,
    stock: 5000,
    ticketTypes: [
      { name: "Fest A", price: 300000, amount: 3000 },
      { name: "Fest B", price: 250000, amount: 2000 }
    ],
    imageUrl: "/posters/poster konser 20.jpg",
    isFeatured: true,
  },
];
