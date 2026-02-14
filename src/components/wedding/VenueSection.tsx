import { MapPin, Navigation, Phone } from "lucide-react";

const VenueSection = () => (
  <section
    id="venue"
    className="py-8 px-4"
    style={{ background: "linear-gradient(180deg, hsl(340 50% 94%) 0%, hsl(340 50% 97%) 100%)" }}
  >
    <div className="container mx-auto max-w-4xl">
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
        Venue
      </h2>
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px w-12 bg-primary/40" />
        <span className="text-primary">✦</span>
        <div className="h-px w-12 bg-primary/40" />
      </div>

      <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border/50">
        {/* Map */}
        <div className="w-full h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8269977521304!2d80.2511586!3d12.918838299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d980644a625%3A0x2c46952ca5da0727!2sRoz%20Mahal!5e0!3m2!1sen!2sin!4v1771079761952!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VGP Golden Beach Resort Location"
          />
        </div>

        {/* Details */}
        <div className="p-8 text-center">
          <h3 className="font-serif text-2xl text-foreground mb-2">Roz Mahal</h3>
          <p className="text-primary font-medium mb-4">VGP Golden Beach Resort</p>

          <div className="flex flex-col items-center gap-3 text-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Injambakkam, East Coast Road, Chennai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-primary" />
              <span>~25 km from Chennai Central</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Roz+Mahal/@12.9188383,80.2511586,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525d980644a625:0x2c46952ca5da0727!8m2!3d12.9188383!4d80.2511586!16s%2Fg%2F11vchkbd24!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default VenueSection;
