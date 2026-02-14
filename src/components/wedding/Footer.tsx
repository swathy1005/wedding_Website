const Footer = () => (
  <footer className="relative py-16 bg-secondary/50 border-t border-border">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Bigger Image Only */}
      <img
        src="/footer.png"
        alt="Siddharthan & Varsha"
        className="w-48 md:w-64 lg:w-72 drop-shadow-2xl"
      />

      <div className="text-center md:text-right">
        <p className="font-serif text-2xl text-primary mb-2">S & V</p>

        <p className="text-muted-foreground text-sm">
          Made with ♥ for Siddharthan & Varsha's Wedding
        </p>

        <p className="text-muted-foreground/60 text-xs mt-2">
          February 21 & 22, 2026 • Chennai
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
