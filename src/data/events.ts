export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  stock: number;
  imageUrl: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Neon Lights Festival 2024",
    description: "Experience the electrifying atmosphere of the biggest EDM festival of the year.",
    date: "2024-08-15",
    time: "18:00",
    location: "GBK Stadium, Jakarta",
    price: 1500000,
    stock: 100,
    imageUrl: "/posters/poster konser 1.jpg",
  },
  {
    id: "2",
    title: "Jazz Under the Stars",
    description: "A night of smooth jazz and relaxation under the open sky.",
    date: "2024-09-20",
    time: "19:30",
    location: "City Park, Bandung",
    price: 750000,
    stock: 50,
    imageUrl: "/posters/poster konser 2.jpg",
  },
  {
    id: "3",
    title: "Rock Legends Reunion",
    description: "The legendary rock bands return for one last epic performance.",
    date: "2024-10-05",
    time: "20:00",
    location: "JCC Plenary Hall, Jakarta",
    price: 2000000,
    stock: 0, // SOLD OUT
    imageUrl: "/posters/poster konser 3.jpg",
  },
  {
    id: "4",
    title: "Indie Vibes Showcase",
    description: "Discover the best up-and-coming indie artists in the country.",
    date: "2024-11-12",
    time: "16:00",
    location: "Live House, Yogyakarta",
    price: 300000,
    stock: 200,
    imageUrl: "/posters/poster konser 4.jpg",
  },
  {
    id: "5",
    title: "Classical Symphony Night",
    description: "A breathtaking performance by the National Symphony Orchestra.",
    date: "2024-12-01",
    time: "19:00",
    location: "Art Center, Bali",
    price: 1000000,
    stock: 10,
    imageUrl: "/posters/poster konser 5.jpg",
  },
];
