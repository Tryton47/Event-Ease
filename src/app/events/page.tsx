import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export default function EventsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Jadwal Konser & Event</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
