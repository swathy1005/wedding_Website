import { useEffect, useState, useRef } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setOpened(true);
    setVisible(true);

    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-top md:bg-center"
      style={{
        backgroundImage: "url('/invite.png')",
        minHeight: "100svh",
      }}
    >
      {/* Audio Element */}
      <audio ref={audioRef} src="/wedding-music.mp3" loop />

      {/* Music Control */}
      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          {playing ? (
            <Volume2 className="w-5 h-5 text-primary" />
          ) : (
            <VolumeX className="w-5 h-5 text-primary" />
          )}
        </button>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 backdrop-blur-[1px]" />

      {/* Invitation Cover */}
      {!opened && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-center px-6 max-w-2xl">

            <p className="font-serif text-sm tracking-[0.35em] uppercase text-primary mb-6">
              Together with their families
            </p>

            <p className="font-serif italic text-lg text-primary leading-relaxed mb-10">
              cordially invite you to join
              <br />
              the joyous celebration of their union
              <br />
              as they begin their journey of forever.
            </p>

            <h2 className="font-serif text-7xl md:text-8xl text-primary mb-4 tracking-[0.2em]">
              S & V
            </h2>

            <button
              onClick={handleOpen}
              className="px-12 py-3 bg-primary text-white rounded-full shadow-xl hover:scale-105 transition"
            >
              Open Invitation
            </button>
          </div>
        </div>
      )}

      {/* Revealed Content */}
      {opened && (
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-foreground">
            Siddharthan & Varsha
          </h1>

          <button
            onClick={() =>
              document
                .querySelector("#countdown")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 animate-bounce text-primary"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
