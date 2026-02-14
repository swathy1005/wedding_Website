import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => setVisible(true), 300);
    }
  }, [opened]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(340 50% 97%) 0%, hsl(345 60% 88%) 50%, hsl(340 50% 94%) 100%)",
      }}
    >
      {/* 💌 Invitation Cover */}
      {!opened && (
        <div className="absolute inset-0 bg-rose-100 flex flex-col items-center justify-center z-50 transition-all duration-1000">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              S & V
            </h2>

            <p className="uppercase tracking-[0.4em] text-sm text-muted-foreground mb-8">
              You’re Invited
            </p>

            <button
              onClick={() => setOpened(true)}
              className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              Open Invitation
            </button>
          </div>
        </div>
      )}

      {/* 💍 Actual Hero Content */}
      {opened && (
        <>
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
            <div className="mx-auto mb-8 mt-8 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <img
                src="/couple-photo.jpeg"
                alt="Siddharthan & Varsha"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-3 leading-tight">
              Siddharthan <span className="text-primary">&</span> Varsha
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl font-light mb-2">
              February 21 & 22, 2026 • Chennai
            </p>

            <button
              onClick={() =>
                document
                  .querySelector("#countdown")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-12 animate-bounce text-primary/60 hover:text-primary transition-colors"
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
