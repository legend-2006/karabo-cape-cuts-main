import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo } from "react";
import { Scissors, MapPin, MessageCircle, Check, Clock, Phone, Mail, Users, Star } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Toaster as Toaster$1, toast } from "sonner";
const heroImg = "/karabo-cape-cuts-main/assets/hero-tshego-CKsLZ0yj.jpg";
const cut1Img = "/karabo-cape-cuts-main/assets/cut-1-BhLatn51.jpg";
const cut2Img = "/karabo-cape-cuts-main/assets/cut-2-DWCbAsn5.jpg";
const cut3Img = "/karabo-cape-cuts-main/assets/cut-3-DJL2zaHM.jpg";
const cut4Img = "/karabo-cape-cuts-main/assets/cut-4-1KSLbXot.jpg";
const cut5Img = "/karabo-cape-cuts-main/assets/cut-5-ikPy94z9.jpg";
const cut6Img = "/karabo-cape-cuts-main/assets/cut-6-BjeAq8dw.jpg";
const storyImg = "/karabo-cape-cuts-main/assets/cut-7-C0vf4wNR.jpg";
const cut8Img = "/karabo-cape-cuts-main/assets/cut-8-CaZYdoLA.jpg";
const cut9Img = "/karabo-cape-cuts-main/assets/cut-9-DczR7s2u.jpg";
const cut10Img = "/karabo-cape-cuts-main/assets/cut-10-ql-yEE-S.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const WHATSAPP_NUMBER = "27833637098";
const FACEBOOK_URL = "https://www.facebook.com/share/1GQeu9o3WC/";
const LOCATIONS = ["Cape Town", "Mpumalanga"];
const SERVICES = [{
  id: "lineup",
  name: "Line-Up & Edge",
  price: 50,
  duration: "20 min",
  desc: "Quick clean-up for hairline, neck and edges."
}, {
  id: "kids",
  name: "Kids Cut",
  price: 60,
  duration: "30 min",
  desc: "Fresh, simple cuts for young clients."
}, {
  id: "fade",
  name: "Basic Fade",
  price: 80,
  duration: "35 min",
  desc: "Clean fade with a neat finish."
}, {
  id: "classic",
  name: "Classic Cut",
  price: 100,
  duration: "40 min",
  desc: "Everyday haircut with clean edges."
}, {
  id: "cut-beard",
  name: "Cut & Beard",
  price: 150,
  duration: "55 min",
  desc: "Haircut, beard trim and sharp line-up."
}, {
  id: "full-grooming",
  name: "Full Grooming",
  price: 200,
  duration: "75 min",
  desc: "Haircut, beard, line-up and full clean finish."
}];
const GALLERY = [{
  src: cut1Img,
  title: "Clean fade"
}, {
  src: cut2Img,
  title: "Sharp side finish"
}, {
  src: cut3Img,
  title: "Blonde colour cut"
}, {
  src: cut4Img,
  title: "Fresh indoor fade"
}, {
  src: cut5Img,
  title: "Classic clean cut"
}, {
  src: cut6Img,
  title: "Red colour fade"
}, {
  src: storyImg,
  title: "Fresh short cut"
}, {
  src: cut8Img,
  title: "Outdoor profile fade"
}, {
  src: cut9Img,
  title: "Clean red shirt cut"
}, {
  src: cut10Img,
  title: "Side profile finish"
}];
function Index() {
  const [selected, setSelected] = useState(SERVICES[2]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "top-center" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, { selected }),
    /* @__PURE__ */ jsx(Story, {}),
    /* @__PURE__ */ jsx(Services, { selected, onSelect: setSelected }),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Locations, {}),
    /* @__PURE__ */ jsx(Booking, { selected }),
    /* @__PURE__ */ jsx(Reviews, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, { selected })
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Scissors, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "font-display text-xl tracking-wider", children: "TSHEGO'S BARBER" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "#story", className: "transition hover:text-foreground", children: "Story" }),
      /* @__PURE__ */ jsx("a", { href: "#services", className: "transition hover:text-foreground", children: "Services" }),
      /* @__PURE__ */ jsx("a", { href: "#gallery", className: "transition hover:text-foreground", children: "Cuts" }),
      /* @__PURE__ */ jsx("a", { href: "#locations", className: "transition hover:text-foreground", children: "Locations" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: FACEBOOK_URL, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", className: "border-border", children: "Facebook" }) }),
      /* @__PURE__ */ jsx("a", { href: "#book", children: /* @__PURE__ */ jsx(Button, { size: "sm", className: "bg-primary text-primary-foreground hover:bg-primary/90", children: "Book" }) })
    ] })
  ] }) });
}
function Hero({
  selected
}) {
  const whatsapp = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Tshego's Barber, I want to book ${selected.name} for R${selected.price}.`)}`;
  }, [selected]);
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden pt-16", children: [
    /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Tshego's Barber haircut", className: "absolute inset-0 h-full w-full object-cover opacity-55" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 text-primary" }),
          "Cape Town and Mpumalanga"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "max-w-3xl text-6xl leading-[0.88] md:text-8xl", children: [
          "Fresh cuts.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Township sharp." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-lg text-lg text-muted-foreground", children: "Clean fades, line-ups, beard trims and colour work. Choose your service, pick a location, and book straight on WhatsApp." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#book", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/90", children: "Book a chair" }) }),
          /* @__PURE__ */ jsx("a", { href: whatsapp, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-border", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
            " WhatsApp"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 rounded-lg border border-border bg-card/85 p-5 backdrop-blur", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Popular today" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: SERVICES.slice(2, 6).map((service) => /* @__PURE__ */ jsxs("a", { href: "#book", className: "flex items-center justify-between rounded-md border border-border bg-background/60 p-4 transition hover:border-primary", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: service.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: service.duration })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl text-primary", children: [
            "R",
            service.price
          ] })
        ] }, service.id)) })
      ] })
    ] })
  ] });
}
function Story() {
  return /* @__PURE__ */ jsx("section", { id: "story", className: "border-y border-border bg-card/35 px-5 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center", children: [
    /* @__PURE__ */ jsx("img", { src: storyImg, alt: "Barber tools", className: "h-[420px] w-full rounded-lg object-cover" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Born in the community" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-5 text-5xl leading-none md:text-6xl", children: "Built for clean, confident cuts." }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-muted-foreground", children: "Tshego's Barber keeps it simple: sharp work, fair prices, and bookings that go straight to WhatsApp. No long forms, no confusion, just your style and your time." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsx(Stat, { value: "2", label: "Locations" }),
        /* @__PURE__ */ jsx(Stat, { value: "R50+", label: "Starting price" }),
        /* @__PURE__ */ jsx(Stat, { value: "6", label: "Fresh services" })
      ] })
    ] })
  ] }) });
}
function Services({
  selected,
  onSelect
}) {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "px-5 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Services and styles" }),
        /* @__PURE__ */ jsx("h2", { className: "text-5xl leading-none md:text-6xl", children: "Let's get you fresh." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-md text-muted-foreground", children: "Prices are made for a small local business, from quick clean-ups to full grooming." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((service) => {
      const active = selected.id === service.id;
      return /* @__PURE__ */ jsxs("button", { onClick: () => {
        onSelect(service);
        document.getElementById("book")?.scrollIntoView({
          behavior: "smooth"
        });
      }, className: `rounded-lg border p-6 text-left transition ${active ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-card hover:border-primary/60"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl", children: service.name }),
          active && /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "min-h-12 text-sm text-muted-foreground", children: service.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-display text-4xl text-primary", children: [
            "R",
            service.price
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
            " ",
            service.duration
          ] })
        ] })
      ] }, service.id);
    }) })
  ] }) });
}
function Gallery() {
  return /* @__PURE__ */ jsx("section", { id: "gallery", className: "border-y border-border bg-card/35 px-5 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Fresh cuts" }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl leading-none md:text-6xl", children: "Recent work" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid auto-rows-[240px] gap-4 md:grid-cols-4", children: GALLERY.map((cut, index) => /* @__PURE__ */ jsx("article", { className: `group overflow-hidden rounded-lg border border-border bg-card ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`, children: /* @__PURE__ */ jsx("img", { src: cut.src, alt: cut.title, className: "h-full w-full object-cover transition duration-500 group-hover:scale-105", loading: "lazy" }) }, cut.title)) })
  ] }) });
}
function Locations() {
  return /* @__PURE__ */ jsx("section", { id: "locations", className: "px-5 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Find your spot" }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl leading-none md:text-6xl", children: "Two places to book." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: LOCATIONS.map((location) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsx(MapPin, { className: "mb-5 h-7 w-7 text-primary" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-3xl", children: location }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: "Choose this location when booking and Tshego will confirm the time on WhatsApp." }),
      /* @__PURE__ */ jsx("a", { href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Tshego's Barber, I want to book in ${location}.`)}`, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-primary/90", children: [
        "Book ",
        location
      ] }) })
    ] }, location)) })
  ] }) });
}
function Booking({
  selected
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: LOCATIONS[0],
    date: "",
    time: "",
    notes: ""
  });
  const submit = (event) => {
    event.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.date || !form.time) {
      toast.error("Add your name, phone, location, date and time.");
      return;
    }
    const text = encodeURIComponent(`Hi Tshego's Barber, I want to book.

Service: ${selected.name} - R${selected.price}
Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Date: ${form.date}
Time: ${form.time}
Notes: ${form.notes || "None"}`);
    toast.success("Opening WhatsApp booking.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsx("section", { id: "book", className: "border-y border-border bg-card/35 px-5 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "rounded-lg border border-border bg-background/65 p-7 md:p-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Book on WhatsApp" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-8 text-5xl leading-none md:text-6xl", children: "Reserve your chair." }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Full name", required: true, children: /* @__PURE__ */ jsx(Input, { value: form.name, onChange: (e) => setForm({
          ...form,
          name: e.target.value
        }), placeholder: "Your name" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Phone", required: true, children: /* @__PURE__ */ jsx(Input, { value: form.phone, onChange: (e) => setForm({
          ...form,
          phone: e.target.value
        }), placeholder: "083 000 0000" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Location", required: true, children: /* @__PURE__ */ jsx("select", { value: form.location, onChange: (e) => setForm({
          ...form,
          location: e.target.value
        }), className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm", children: LOCATIONS.map((location) => /* @__PURE__ */ jsx("option", { children: location }, location)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Date", required: true, children: /* @__PURE__ */ jsx(Input, { type: "date", value: form.date, onChange: (e) => setForm({
          ...form,
          date: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Time", required: true, children: /* @__PURE__ */ jsx(Input, { type: "time", value: form.time, onChange: (e) => setForm({
          ...form,
          time: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Style notes", children: /* @__PURE__ */ jsx(Textarea, { value: form.notes, onChange: (e) => setForm({
          ...form,
          notes: e.target.value
        }), placeholder: "Fade, colour, beard, line design...", rows: 4 }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "mt-7 w-full bg-primary text-primary-foreground hover:bg-primary/90", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
        " Send booking on WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("aside", { className: "h-fit rounded-lg border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-1 text-xs uppercase tracking-widest text-muted-foreground", children: "Selected cut" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-3xl", children: selected.name }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm text-muted-foreground", children: selected.desc }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 border-y border-border py-5 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Time" }),
          /* @__PURE__ */ jsx("span", { children: selected.duration })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Booking fee" }),
          /* @__PURE__ */ jsx("span", { children: "R0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Total" }),
        /* @__PURE__ */ jsxs("span", { className: "font-display text-5xl text-primary", children: [
          "R",
          selected.price
        ] })
      ] })
    ] })
  ] }) });
}
function Reviews() {
  return /* @__PURE__ */ jsx("section", { className: "px-5 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm uppercase tracking-widest text-primary", children: "Reviews" }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl leading-none md:text-6xl", children: "People leave fresh." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(Review, { name: "Local client", text: "Clean fade, sharp line and the booking was easy." }),
      /* @__PURE__ */ jsx(Review, { name: "Cape Town client", text: "Good prices and the cut came out exactly how I wanted." }),
      /* @__PURE__ */ jsx(Review, { name: "Mpumalanga client", text: "Simple WhatsApp booking and a fresh finish." })
    ] })
  ] }) });
}
function Review({
  name,
  text
}) {
  return /* @__PURE__ */ jsxs("article", { className: "rounded-lg border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex gap-1", children: [...Array(5)].map((_, index) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, index)) }),
    /* @__PURE__ */ jsx("p", { className: "mb-5 text-muted-foreground", children: text }),
    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: name })
  ] });
}
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-background/60 p-5", children: [
    /* @__PURE__ */ jsx("p", { className: "font-display text-5xl text-primary", children: value }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: label })
  ] });
}
function Field({
  label,
  required,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Label, { className: "mb-2 block text-xs uppercase tracking-widest text-muted-foreground", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-primary", children: "*" })
    ] }),
    children
  ] });
}
function WhatsAppButton({
  selected
}) {
  const message = encodeURIComponent(`Hi Tshego's Barber, I want to book ${selected.name} for R${selected.price}.`);
  return /* @__PURE__ */ jsx("a", { href: `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, target: "_blank", rel: "noreferrer", className: "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600", "aria-label": "Book on WhatsApp", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border px-5 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-8 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Scissors, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-xl tracking-wider", children: "TSHEGO'S BARBER" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Fresh cuts in Cape Town and Mpumalanga." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", rel: "noreferrer", className: "flex items-center gap-2 transition hover:text-primary", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
        " 083 363 7098"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: FACEBOOK_URL, target: "_blank", rel: "noreferrer", className: "flex items-center gap-2 transition hover:text-primary", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
        " Facebook: Tshego Boldwin"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
        " Cape Town and Mpumalanga"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs uppercase tracking-widest text-muted-foreground", children: "Open" }),
      /* @__PURE__ */ jsx("p", { children: "Monday - Saturday" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "9:00 AM - 7:00 PM" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
        " Walk-ins and bookings welcome"
      ] })
    ] })
  ] }) });
}
export {
  Index as component
};
