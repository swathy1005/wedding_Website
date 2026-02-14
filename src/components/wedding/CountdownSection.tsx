import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (target: Date): TimeLeft => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const RECEPTION = new Date("2026-02-21T18:30:00+05:30");
const WEDDING = new Date("2026-02-22T07:30:00+05:30");

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card rounded-xl shadow-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-border">
      <span className="font-serif text-2xl md:text-3xl font-bold text-foreground">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const CountdownTimer = ({ target, title, emoji }: { target: Date; title: string; emoji: string }) => {
  const [time, setTime] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50">
      {/* <span className="text-3xl mb-2 block">{emoji}</span> */}
      {/* <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{title}</h3> */}
      <div className="flex justify-center gap-3 md:gap-5">
        <TimeUnit value={time.days} label="Days" />
        <TimeUnit value={time.hours} label="Hours" />
        <TimeUnit value={time.minutes} label="Mins" />
        <TimeUnit value={time.seconds} label="Secs" />
      </div>
    </div>
  );
};

const CountdownSection = () => (
  <section id="countdown" className="pb-4 pt-8 px-4 bg-background">
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
        Counting Down to Forever
      </h2>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-12 bg-primary/40" />
        <span className="text-primary">✦</span>
        <div className="h-px w-12 bg-primary/40" />
      </div>
      <div>
        {/* <CountdownTimer target={RECEPTION} title="Reception" emoji="🎉" /> */}
        <CountdownTimer target={WEDDING} title="Wedding" emoji="💒" />
      </div>
    </div>
  </section>
);

export default CountdownSection;
