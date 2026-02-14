import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const RSVPSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "both",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you! 💕",
      description: `We've received your RSVP, ${form.name}. See you at the celebration!`,
    });
    setForm({ name: "", email: "", guests: "1", attending: "both", message: "" });
  };

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <section
      id="rsvp"
      className="py-20 px-4"
      style={{ background: "linear-gradient(180deg, hsl(340 50% 94%) 0%, hsl(340 50% 97%) 100%)" }}
    >
      <div className="container mx-auto max-w-lg">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          RSVP
        </h2>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary/40" />
          <span className="text-primary">💌</span>
          <div className="h-px w-12 bg-primary/40" />
        </div>
        <p className="text-center text-muted-foreground mb-10">
          We'd love to have you celebrate with us!
        </p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
            <Input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="bg-secondary/30 border-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <Input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="your@email.com"
              className="bg-secondary/30 border-border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Guests</label>
              <Input
                type="number"
                min="1"
                max="10"
                required
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className="bg-secondary/30 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Attending</label>
              <select
                value={form.attending}
                onChange={(e) => update("attending", e.target.value)}
                className="flex h-10 w-full rounded-md border border-border bg-secondary/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="both">Both Events</option>
                <option value="reception">Reception Only</option>
                <option value="wedding">Wedding Only</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message (Optional)</label>
            <Textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Share your wishes..."
              className="bg-secondary/30 border-border"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full rounded-full" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Send RSVP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
