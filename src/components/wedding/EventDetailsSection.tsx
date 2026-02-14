import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Reception",
    emoji: "🎉",
    date: "Saturday, February 21, 2026",
    time: "6:30 PM onwards",
    venue: "Roz Mahal, VGP Golden Beach Resort",
    dress: "Formal / Traditional",
  },
  {
    title: "Wedding Ceremony",
    emoji: "💒",
    date: "Sunday, February 22, 2026",
    time: "7:30 AM onwards",
    venue: "Roz Mahal, VGP Golden Beach Resort",
    dress: "Traditional",
  },
];

const EventDetailsSection = () => (
  <section id="events" className="pt-4 pb-12 px-4 bg-background">
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
        Event Details
      </h2>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-12 bg-primary/40" />
        <span className="text-primary">✦</span>
        <div className="h-px w-12 bg-primary/40" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((e, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 text-center hover:shadow-xl transition-shadow"
          >
            {/* <span className="text-4xl mb-4 block">{e.emoji}</span> */}
            <h3 className="font-serif text-2xl text-foreground mb-6">{e.title}</h3>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{e.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{e.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{e.venue}</span>
              </div>
            </div>

            {/* <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Dress Code: <span className="text-foreground font-medium">{e.dress}</span>
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventDetailsSection;
