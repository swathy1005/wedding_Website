import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Reception",
    date: "Saturday, February 21, 2026",
    time: "6:30 PM onwards",
  },
  {
    title: "Wedding Ceremony",
    date: "Sunday, February 22, 2026",
    time: "7:30 AM onwards",
  },
];

const EventDetailsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl text-center">

        <h2 className="font-serif text-4xl text-foreground mb-6">
          The Celebrations
        </h2>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-primary/40" />
          <span className="text-primary text-xl">♥</span>
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <div className="space-y-6">
          {events.map((event, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
              >
                {/* Clickable Header */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full py-6 text-center font-serif text-2xl text-foreground hover:text-primary transition"
                >
                  {event.title}
                </button>

                {/* Reveal Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">{event.date}</span>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
