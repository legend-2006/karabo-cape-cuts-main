import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, MapPin, Phone, Mail, Clock, Star, Check } from "lucide-react";
import heroImg from "@/assets/hero-barber.jpg";
import toolsImg from "@/assets/tools.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const SHOP = {
  name: "Karabo Barber Shop",
  email: "faithmoeng8@gmil.com",
  phone: "0724282520",
  location: "Cape Town, South Africa",
};

const SERVICES = [
  { id: "fade", name: "Signature Fade", price: 180, duration: "45 min", desc: "Precision skin or taper fade with hot towel finish." },
  { id: "cut-beard", name: "Cut & Beard Sculpt", price: 250, duration: "60 min", desc: "Full haircut paired with a sharp beard line-up and oil." },
  { id: "shave", name: "Hot Towel Shave", price: 160, duration: "30 min", desc: "Traditional straight-razor shave, steamed and soothed." },
  { id: "kids", name: "Kids Cut (under 12)", price: 120, duration: "30 min", desc: "Gentle, patient cuts for the young gents." },
  { id: "lineup", name: "Line-Up & Edge", price: 90, duration: "20 min", desc: "Quick clean-up to keep your shape tight between cuts." },
  { id: "vip", name: "VIP Grooming Package", price: 450, duration: "90 min", desc: "Cut, beard, shave, scalp treatment & espresso." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karabo Barber Shop — Cape Town's Sharpest Cuts" },
      { name: "description", content: "Karabo Barber Shop in Cape Town. Book signature fades, beard sculpts and hot towel shaves. Prices from R90." },
      { property: "og:title", content: "Karabo Barber Shop — Cape Town" },
      { property: "og:description", content: "Premium barbering in Cape Town. Book your chair online." },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState(SERVICES[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <Hero />
      <Services selected={selected} onSelect={setSelected} />
      <About />
      <Booking selected={selected} />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display text-xl tracking-wider">KARABO</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#book" className="hover:text-foreground transition">Book</a>
        </nav>
        <a href="#book">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Book a Chair
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Barber giving a precise fade in Cape Town"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <MapPin className="h-3 w-3" /> Cape Town
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-6">
            Sharp cuts.<br />
            <span className="text-primary">Sharper men.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            Karabo Barber Shop is where Cape Town comes for precision fades, beard sculpts and the kind of hot-towel shave your grandfather would respect.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#book">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Book Your Cut
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-border">
                View Services
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              <span className="ml-2">4.9 • 320+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ selected, onSelect }: { selected: typeof SERVICES[0]; onSelect: (s: typeof SERVICES[0]) => void }) {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">The Menu</p>
          <h2 className="text-5xl md:text-6xl mb-4">Services & pricing</h2>
          <p className="text-muted-foreground">Tap a service to select it, then scroll down to book.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const active = selected.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelect(s);
                  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-left p-6 rounded-lg border transition-all ${
                  active
                    ? "border-primary bg-card shadow-[var(--shadow-glow)]"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl">{s.name}</h3>
                  {active && <Check className="h-5 w-5 text-primary" />}
                </div>
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{s.desc}</p>
                <div className="flex items-end justify-between">
                  <span className="font-display text-3xl text-primary">R{s.price}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {s.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 border-y border-border bg-card/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={toolsImg}
          alt="Barber tools"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-lg object-cover w-full h-[400px]"
        />
        <div>
          <p className="text-primary text-sm uppercase tracking-widest mb-3">The Craft</p>
          <h2 className="text-5xl mb-6">Old-school skill, new-school style.</h2>
          <p className="text-muted-foreground mb-4">
            Founded in the heart of Cape Town, Karabo Barber Shop blends traditional grooming with modern aesthetics. Every chair, every cut, every detail — designed for the man who notices.
          </p>
          <p className="text-muted-foreground mb-8">
            We take walk-ins when we can, but bookings get priority. Reserve your slot below.
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Open</p>
              <p className="font-semibold">Mon–Sat · 9am – 7pm</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Location</p>
              <p className="font-semibold">{SHOP.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking({ selected }: { selected: typeof SERVICES[0] }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error("Please fill in your name, email, date and time.");
      return;
    }
    const subject = encodeURIComponent(`Booking — ${selected.name} (R${selected.price})`);
    const body = encodeURIComponent(
      `New booking request for Karabo Barber Shop\n\n` +
      `Service: ${selected.name} (R${selected.price}, ${selected.duration})\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Date: ${form.date}\nTime: ${form.time}\n\nNotes: ${form.notes || "—"}`
    );
    window.location.href = `mailto:${SHOP.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email to confirm the booking…");
  };

  const handleCheckout = () => {
    toast.info("Stripe checkout coming online soon — your booking will be confirmed by email.");
  };

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-primary text-sm uppercase tracking-widest mb-3">Reserve</p>
          <h2 className="text-5xl md:text-6xl">Book your chair</h2>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-10">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Selected service</p>
              <p className="text-2xl font-display">{selected.name}</p>
              <p className="text-sm text-muted-foreground">{selected.duration}</p>
            </div>
            <p className="font-display text-4xl text-primary">R{selected.price}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <Field label="Full name" required>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Thabo Mokoena" />
            </Field>
            <Field label="Email" required>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
            </Field>
            <Field label="Phone">
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="082 000 0000" />
            </Field>
            <Field label="Date" required>
              <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </Field>
            <Field label="Time" required>
              <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Notes (optional)">
                <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Anything we should know?" rows={3} />
              </Field>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-3 pt-4">
              <Button type="submit" size="lg" variant="outline" className="border-border">
                <Mail className="h-4 w-4 mr-2" /> Book via Email
              </Button>
              <Button type="button" size="lg" onClick={handleCheckout} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Pay R{selected.price} & Confirm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="font-display text-xl tracking-wider">KARABO BARBER SHOP</span>
          </div>
          <p className="text-sm text-muted-foreground">Cape Town's home for precision grooming.</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</p>
          <a href={`mailto:${SHOP.email}`} className="flex items-center gap-2 hover:text-primary transition">
            <Mail className="h-4 w-4" /> {SHOP.email}
          </a>
          <a href={`tel:${SHOP.phone}`} className="flex items-center gap-2 hover:text-primary transition">
            <Phone className="h-4 w-4" /> {SHOP.phone}
          </a>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" /> {SHOP.location}
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Hours</p>
          <p>Monday – Saturday</p>
          <p className="text-muted-foreground">9:00 AM – 7:00 PM</p>
          <p className="mt-2">Sunday</p>
          <p className="text-muted-foreground">Closed</p>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} Karabo Barber Shop. All rights reserved.
      </p>
    </footer>
  );
}
