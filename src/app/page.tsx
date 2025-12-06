import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TourGuide } from "@/components/TourGuide";

export default function Home() {
  const featuredEvents = events.filter((e) => e.isFeatured);
  const upcomingEvents = events.filter((e) => !e.isFeatured); // Or just all events if preferred

  return (
    <div className="flex flex-col min-h-screen">
       <TourGuide />
       {/* Hero Section */}
       <section className="container px-4 pt-6 pb-12 mx-auto">
          <HeroCarousel events={featuredEvents} />
       </section>
      
      {/* Event List Section */}
      <section className="container px-4 py-8 mx-auto bg-gradient-to-b from-transparent to-background/50 rounded-3xl">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-3xl font-bold bg-gradient-to-l from-sky-400 to-purple-600 bg-clip-text text-transparent">
             Jadwal Konser Terbaru
           </h2>
           <Button variant="ghost" asChild className="group">
             <Link href="/events">
               Lihat Semua <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
             </Link>
           </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard 
                key={event.id} 
                event={event} 
                id={index === 0 ? "tour-event-card" : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
