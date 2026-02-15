import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (target: Date): TimeLeft => {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

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

const CountdownTimer = ({ target }: { target: Date }) => {
  const [time, setTime] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="relative z-10 bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50">
      <div className="flex justify-center gap-3 md:gap-5">
        <TimeUnit value={time.days} label="Days" />
        <TimeUnit value={time.hours} label="Hours" />
        <TimeUnit value={time.minutes} label="Mins" />
        <TimeUnit value={time.seconds} label="Secs" />
      </div>
    </div>
  );
};

const CountdownSection = () => {
  return (
    <section
      id="countdown"
      className="relative pb-16 pt-14 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl text-center relative">

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Counting Down to Forever
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-primary/40" />
          <span className="text-primary">✦</span>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        {/* 💕 Sticker in FRONT */}
        <img
          src="/couple_waiting.png"
          alt="Couple Sticker"
          className="absolute left-[-30px] md:left-[-50px] top-[65%] -translate-y-1/2 w-32 md:w-48 pointer-events-none select-none z-30 drop-shadow-xl"
        />

        {/* Timer */}
        <CountdownTimer target={WEDDING} />

      </div>
    </section>
  );
};

export default CountdownSection;
