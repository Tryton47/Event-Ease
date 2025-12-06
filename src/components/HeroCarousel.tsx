"use client";

import Image from "next/image";
import Link from "next/link";
import { Event } from "@/data/events";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface HeroCarouselProps {
  events: Event[];
}

export function HeroCarousel({ events }: HeroCarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      id="tour-hero"
      plugins={[plugin.current]}
      className="w-full max-w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {events.map((event) => (
          <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-2/3 xl:basis-3/4 pl-4 md:pl-8">
            <Link href={`/events/${event.id}`}>
                <div className="relative aspect-[21/9] md:aspect-[21/8] w-full overflow-hidden rounded-2xl group cursor-pointer shadow-2xl">
                    <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                            <Badge className="mb-3 bg-primary text-primary-foreground border-none text-md px-3 py-1">Featured Event</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h2>
                            <p className="text-lg text-gray-200 line-clamp-2 max-w-2xl">{event.description}</p>
                            <Button className="mt-4 bg-white text-black hover:bg-white/90 font-bold">
                                Beli Tiket
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </div>
    </Carousel>
  );
}
