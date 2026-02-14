import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => setVisible(true), 400);
    }
  }, [opened]);

  return (
   <section
  id="home"
  className="relative flex items-center justify-center overflow-hidden bg-cover bg-top md:bg-center"
  style={{
    backgroundImage: "url('/invite.png')",
    minHeight: "100svh",
  }}
>

      {/* Soft royal overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 backdrop-blur-[1px]" />

      {/* 💌 ROYAL INVITATION COVER */}
      {!opened && (
        <div className="absolute inset-0 flex items-center justify-center z-50 transition-all duration-1000">
         <div className="text-center px-6 max-w-2xl">

{/* Top Line */}
<p className="font-serif text-[11px] md:text-sm tracking-[0.35em] uppercase text-primary mb-6">
  Together with their families
</p>

{/* Main Invitation Text */}
<p className="font-serif italic text-base md:text-lg text-primary leading-relaxed mb-10">
  cordially invite you to join
  <br />
  the joyous celebration of their union
  <br />
  as they begin their journey of forever.
</p>

{/* Royal Initials */}
<h2 className="font-serif text-7xl md:text-8xl text-primary mb-4 tracking-[0.2em]">
  S & V
</h2>


  <div className="flex items-center justify-center gap-4 mb-10">
    <div className="h-px w-20 bg-primary/40" />
    <span className="text-primary text-xl">✦</span>
    <div className="h-px w-20 bg-primary/40" />
  </div>

  <button
    onClick={() => setOpened(true)}
    className="px-12 py-3 bg-primary text-white rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 tracking-wide"
  >
    Open Invitation
  </button>
</div>

        </div>
      )}

      {/* 💍 REVEALED HERO CONTENT */}
      {opened && (
        <>
          {/* Top Left Monogram */}
          <p className="absolute top-6 left-6 font-serif text-xl text-primary font-semibold tracking-wide z-20">
            S & V
          </p>

          <div
            className={`relative z-10 text-center px-4 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Couple Image */}
            <div className="mx-auto mb-8 mt-8 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/couple-photo.jpeg"
                alt="Siddharthan & Varsha"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Names */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-3 leading-tight drop-shadow-md">
              Siddharthan <span className="text-primary">&</span> Varsha
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px w-16 bg-primary/40" />
              <span className="text-primary text-2xl">♥</span>
              <div className="h-px w-16 bg-primary/40" />
            </div>

            {/* Scroll */}
            <button
              onClick={() =>
                document
                  .querySelector("#countdown")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 animate-bounce text-primary hover:text-primary/70 transition-colors"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
