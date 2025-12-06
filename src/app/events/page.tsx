import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

interface EventsPageProps {
  searchParams: Promise<{
    city?: string;
    search?: string;
  }>;
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const { city, search } = await searchParams;

  const filteredEvents = events.filter((event) => {
    const matchCity = !city || city === "all" || event.city === city;
    const matchSearch = !search || 
      event.title.toLowerCase().includes(search.toLowerCase()) || 
      event.description.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
         <h1 className="text-3xl font-bold">
            {search ? `Hasil Pencarian: "${search}"` : city ? `Event di ${city}` : "Semua Jadwal Konser & Event"}
         </h1>
         <span className="text-muted-foreground">{filteredEvents.length} event ditemukan</span>
      </div>
      
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-xl">
           <p className="text-xl text-muted-foreground">Tidak ada event yang ditemukan.</p>
        </div>
      )}
    </div>
  );
}
