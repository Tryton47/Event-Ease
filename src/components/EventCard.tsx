import Link from "next/link";
import Image from "next/image";
import { Event } from "@/data/events";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const isSoldOut = event.stock === 0;

  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isSoldOut ? "grayscale" : ""
          }`}
        />
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="text-3xl font-bold text-white border-4 border-white px-4 py-2 -rotate-12">
              SOLD OUT
            </span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant={isSoldOut ? "destructive" : "secondary"} className="text-xs font-bold">
            {isSoldOut ? "Habis" : `Sisa: ${event.stock}`}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="text-xl font-bold line-clamp-1">{event.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {event.description}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{new Date(event.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
        <div className="text-lg font-bold text-primary">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(event.price)}
        </div>
        <Button disabled={isSoldOut} className="w-1/3">
          {isSoldOut ? "Habis" : "Beli"}
        </Button>
      </CardFooter>
    </Card>
  );
}
