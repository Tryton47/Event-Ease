"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, QrCode, Ticket } from "lucide-react";

interface TicketData {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  ticketType: string;
  quantity: number;
  totalPrice: number;
  purchaseDate: string;
  status: string;
}

export default function MyTicketsPage() {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeQr, setActiveQr] = useState<string | null>(null);

  useEffect(() => {
    // Read from local storage
    const stored = localStorage.getItem("myTickets");
    if (stored) {
      try {
        setTickets(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse tickets", e);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
     return <div className="container py-20 text-center">Loading tiket...</div>;
  }

  if (tickets.length === 0) {
    return (
      <div className="container px-4 py-20 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
            <Ticket className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold">Belum Ada Tiket</h1>
        <p className="text-muted-foreground max-w-md">
          Kamu belum membeli tiket konser apapun. Yuk cari event seru sekarang!
        </p>
        <Button asChild size="lg">
          <Link href="/events">Cari Event</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tiket Saya</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="relative overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-purple-600"></div>
            <CardHeader className="pb-2">
               <Badge variant="outline" className="w-fit mb-2 border-primary/50 text-primary">
                 ID: {ticket.id}
               </Badge>
              <h3 className="text-xl font-bold line-clamp-1">{ticket.eventTitle}</h3>
              <p className="text-sm text-muted-foreground bg-secondary/50 p-1 px-2 rounded w-fit">
                {ticket.ticketType} x {ticket.quantity}
              </p>
            </CardHeader>
            <CardContent className="space-y-3 pb-2">
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{new Date(ticket.eventDate).toLocaleDateString("id-ID", {dateStyle: 'long'})}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{ticket.eventTime}</span>
              </div>
              <div className="flex items-center text-sm">
                 <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                 <span className="line-clamp-1">{ticket.eventLocation}</span>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-3 pt-4 border-t bg-muted/20">
               {activeQr === ticket.id ? (
                 <div className="flex flex-col items-center animate-in fade-in zoom-in">
                    <div className="bg-white p-2 rounded-lg mb-2">
                       <Image 
                         src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticket.id}-${ticket.status}`} 
                         width={150} 
                         height={150} 
                         alt="QR Ticket" 
                       />
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setActiveQr(null)}>
                      Tutup QR Code
                    </Button>
                 </div>
               ) : (
                 <Button className="w-full" variant="outline" onClick={() => setActiveQr(ticket.id)}>
                   <QrCode className="mr-2 h-4 w-4" />
                   Tampilkan QR Code
                 </Button>
               )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
