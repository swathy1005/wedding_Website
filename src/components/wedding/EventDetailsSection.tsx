import { useState } from "react";

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
    <section
      id="events"
      className="relative py-20 px-4"
    >
      {/* 🎉 Celebration Sticker (Right Side - Decorative Only) */}
      <img
        src="/couple celebration.png"
        alt="Celebration Sticker"
        className="absolute right-4 md:right-16 top-32 md:top-20 w-24 md:w-40 pointer-events-none select-none z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">

        {/* Section Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          The Celebrations
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-primary/40" />
          <span className="text-primary">♥</span>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="bg-card rounded-2xl p-6 shadow-md border border-border cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="font-serif text-xl md:text-2xl text-foreground">
                {event.title}
              </h3>

              {activeIndex === index && (
                <div className="mt-4 text-muted-foreground space-y-2">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
