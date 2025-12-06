"use client";

import { events } from "@/data/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckoutModal } from "@/components/CheckoutModal";
import { use } from "react";

// Client Component with Async Params handling for Next.js 15+
export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Beranda</Link> / 
        <Link href="/events" className="hover:text-primary"> Event</Link> / 
        <span className="text-foreground"> {event.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col gap-6">
          <div>
            {event.stock === 0 && (
              <Badge variant="destructive" className="mb-4 text-md px-3 py-1">SOLDOUT</Badge>
            )}
             {event.isFeatured && (
              <Badge variant="secondary" className="mb-4 text-md px-3 py-1 bg-yellow-500/20 text-yellow-500 border-yellow-500/50">Featured Event</Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 bg-gradient-to-l from-sky-400 to-purple-600 bg-clip-text text-transparent">
              {event.title}
            </h1>
            <p className="text-xl text-muted-foreground">{event.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-secondary/20 p-6 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tanggal</p>
                <p className="font-semibold">{new Date(event.date).toLocaleDateString("id-ID", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Waktu</p>
                <p className="font-semibold">{event.time} WIB</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:col-span-2">
               <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Lokasi</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Ticket Types Selection (Placeholder for Checkout) */}
           <div className="bg-background border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" />
              Pilihan Tiket
            </h3>
            <div className="space-y-3">
              {event.ticketTypes.map((ticket, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/50">
                  <div>
                    <p className="font-medium">{ticket.name}</p>
                    <p className="text-sm text-muted-foreground">Sisa: {ticket.amount} tiket</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      Rp {ticket.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              {event.stock > 0 ? (
                <CheckoutModal event={event} />
              ) : (
                <Button disabled size="lg" className="w-full text-lg">
                  Tiket Habis
                </Button>
              )}
            </div>
          </div>
          
           {/* Mock Map */}
          <div className="w-full h-48 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-800 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
            <MapPin className="w-10 h-10 text-muted-foreground relative z-10" />
            <span className="ml-2 text-muted-foreground relative z-10 font-medium">Peta Lokasi (Simulasi)</span>
          </div>

        </div>
      </div>
    </div>
  );
}
