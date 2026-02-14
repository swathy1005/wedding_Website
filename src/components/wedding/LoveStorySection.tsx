import { Heart, Star, Sparkles, Calendar } from "lucide-react";

const milestones = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "How We Met",
    date: "The Beginning",
    description: "Two souls crossed paths in the most beautiful way, and life was never the same again.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "First Date",
    date: "A Special Day",
    description: "Butterflies, laughter, and the start of an incredible journey together.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "The Proposal",
    date: "A Magical Moment",
    description: "A question that changed everything — 'Will you be mine forever?'",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "The Wedding",
    date: "February 22, 2026",
    description: "The day we say 'I do' and begin our happily ever after.",
  },
];

const LoveStorySection = () => (
  <section id="story" className="py-20 px-4" style={{ background: "linear-gradient(180deg, hsl(340 50% 94%) 0%, hsl(340 50% 97%) 100%)" }}>
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
        Our Love Story
      </h2>
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px w-12 bg-primary/40" />
        <span className="text-primary">♥</span>
        <div className="h-px w-12 bg-primary/40" />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30 md:hidden" />

        <div className="space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Mobile icon */}
              <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-10">
                {m.icon}
              </div>

              {/* Content */}
              <div className={`flex-1 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
                  <p className="text-accent text-sm font-medium mb-1">{m.date}</p>
                  <h3 className="font-serif text-xl text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>

              {/* Desktop center icon */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg z-10">
                {m.icon}
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LoveStorySection;
