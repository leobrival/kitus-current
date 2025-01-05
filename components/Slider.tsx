"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideData {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const SLIDE_DURATION = 6000;
const PROGRESS_INTERVAL = SLIDE_DURATION / 100;

const slides: SlideData[] = [
  {
    image: "/sea.jpg",
    title: "Innovate with intention",
    description:
      "Our dedication to pioneering new pathways in mobility is matched only by our commitment to aesthetic excellence.",
    buttonText: "Learn more",
  },
  {
    image: "/beach-potato.jpeg",
    title: "Design and performance",
    description:
      "Moonwalkers are a symphony of form and function. Each element is meticulously designed not just to perform but to inspire.",
    buttonText: "Discover",
  },
  {
    image: "/cursed-fig-tree.jpeg",
    title: "Precision engineering",
    description:
      "We dive deep into the mechanics of motion. Every seam, sensor, and sole is a testament to our obsession with quality and innovation.",
    buttonText: "Order",
  },
];

const SlideContent = ({ slide }: { slide: SlideData }) => (
  <div className="relative h-full w-full">
    <div className="absolute z-20 top-0 left-0 right-0 bottom-0 inset-0 bg-black/10" />
    <Image
      src={slide.image}
      alt={slide.title}
      fill
      className="object-cover"
      priority={slides.indexOf(slide) === 0}
    />
    <div className="p-6 py-12 md:px-12 z-30 absolute items-end md:items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 top-0 left-0 right-0 bottom-0">
      <div className="py-12 text-white flex flex-col items-start max-w-xl">
        <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
        <p className="text-lg mb-6">{slide.description}</p>
        <Button
          size={"lg"}
          className="bg-white text-black px-6 py-2 rounded-full h-16 text-xl hover:bg-gray-200 transition-colors"
        >
          {slide.buttonText}
        </Button>
      </div>
    </div>
  </div>
);

const SlideIndicator = ({
  isActive,
  progress,
  onClick,
}: {
  isActive: boolean;
  progress: number;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative w-full py-2 cursor-pointer group"
  >
    <div className="relative h-0.5 group-hover:h-1 transition-all duration-300">
      <div className="absolute inset-0 bg-white/25 rounded-full h-full origin-center">
        <div
          className="absolute inset-0 bg-white rounded-full h-full origin-center transition-[width] duration-75 ease-linear"
          style={{
            width: isActive ? `${progress}%` : "0%",
          }}
        />
      </div>
    </div>
  </button>
);

/**
 * Slider Component
 *
 * Main features:
 * - Automatic sliding every 6 seconds
 * - Auto-pause on grab or user interaction
 * - Animated progress bar for each slide
 * - Navigation indicators with extended hitbox
 * - Constant overlay on images with z-index hierarchy
 * - Responsive design with adaptive grid
 */
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Automatic sliding management
  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      if (!isPaused) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            const nextIndex = (currentSlide + 1) % slides.length;
            api.scrollTo(nextIndex);
            return 0;
          }
          return oldProgress + 1;
        });
      }
    }, PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [api, isPaused, currentSlide]);

  // Carousel events management
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      setProgress(0);
      setCurrentSlide(currentIndex);
    };

    const pauseSlider = () => setIsPaused(true);
    const resumeSlider = () => setIsPaused(false);

    const attachEvents = () => {
      if (!api) return;

      const events: Record<EmblaEventType, (event: EmblaCarouselType) => void> =
        {
          init: () => {},
          select: onSelect,
          pointerDown: pauseSlider, // Pause on click
          pointerUp: resumeSlider, // Resume on release
          slidesChanged: () => {},
          slidesInView: () => {},
          scroll: () => {},
          settle: () => {},
          destroy: () => {},
          reInit: () => {},
          slideFocusStart: () => {},
          slideFocus: () => {},
          resize: () => {}, // Add the missing resize handler
        } as const;

      (Object.keys(events) as EmblaEventType[]).forEach((event) => {
        const callback = events[event];
        api.on(event, callback);
      });

      return () => {
        (Object.keys(events) as EmblaEventType[]).forEach((event) => {
          const callback = events[event];
          api.off(event, callback);
        });
      };
    };

    onSelect();

    // Interaction events management
    const cleanup = attachEvents();

    return cleanup;
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="min-h-[90svh]">
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <SlideContent slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute z-30 bottom-0 left-0 right-0 w-full h-12 flex min-h-1 items-center justify-center gap-4 lg:px-12 px-6">
        {slides.map((_, index) => (
          <SlideIndicator
            key={index}
            isActive={currentSlide === index}
            progress={progress}
            onClick={() => {
              api?.scrollTo(index);
              setProgress(0);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
