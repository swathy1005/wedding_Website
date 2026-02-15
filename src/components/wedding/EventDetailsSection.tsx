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
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl text-center relative">

        {/* 💕 Top Right Celebration Sticker */}
        <img
          src="/couple celebration.png"
          alt="Celebration Sticker"
          className="absolute right-[-20px] md:right-[-40px] top-[-10px] md:top-[-20px] w-28 md:w-44 pointer-events-none select-none z-20"
        />

        {/* Heading */}
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
          {events.map((e, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-md border border-border cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            >
              <h3 className="font-serif text-xl text-foreground">
                {e.title}
              </h3>

              {activeIndex === i && (
                <div className="mt-4 text-muted-foreground">
                  <p>{e.date}</p>
                  <p>{e.time}</p>
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
