import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Frontera Care Platform",
    year: "2023 — 2026",
    description:
      "A HIPAA-compliant healthcare platform. Built a centralized library of 30+ reusable React + TypeScript components adopted across a 15+ engineer team, cutting feature delivery time by ~30%.",
    stack: ["React", "TypeScript", "GraphQL", "Tailwind"],
  },
  {
    title: "CogniAble Therapy App",
    year: "2021 — 2023",
    description:
      "AI-driven behavioral therapy app across iOS & Android. Modernized legacy components, integrated REST/GraphQL APIs for real-time sync and analytics, rolled out Jest-based testing.",
    stack: ["React Native", "GraphQL", "Jest", "Tailwind"],
  },
  {
    title: "Component System & Perf",
    year: "Ongoing",
    description:
      "Reduced initial load ~40% via code-splitting, lazy loading and deferred fetching. Automated onboarding, scheduling and reporting flows with Cypress, cutting regression bugs ~50%.",
    stack: ["Cypress", "RTL", "CodeGen", "WCAG"],
  },
];

const experience = [
  {
    role: "Front-end Developer",
    company: "Frontera, Denver USA",
    period: "Nov 2023 — Apr 2026",
    description:
      "Built 30+ reusable React + TypeScript components for a 15-engineer team. Optimized GraphQL with CodeGen and pagination. Supported Django & Temporal back-end workflows in a HIPAA-compliant setup.",
    active: true,
  },
  {
    role: "Front-end Developer",
    company: "CogniAble, Gurgaon",
    period: "May 2021 — Oct 2023",
    description:
      "Shipped cross-platform iOS & Android apps with React Native. Built responsive, WCAG-compliant UI from Figma. Introduced Jest unit testing and analytics tracking.",
    active: false,
  },
  {
    role: "Web Design Intern",
    company: "On-site",
    period: "Nov 2020 — Feb 2021",
    description:
      "Built responsive user-friendly interfaces with HTML, CSS, JS and jQuery. Developed adaptive layouts following modern front-end best practices.",
    active: false,
  },
];

function Index() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground flex flex-col items-center">
      <div className="w-full max-w-2xl px-5 sm:px-6 py-16 sm:py-24 space-y-24 sm:space-y-32">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <footer className="pt-12 pb-8 text-center text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground font-display">
          © 2026 Rinkal Satani — Built with Indigo
        </footer>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="space-y-7 sm:space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-xs font-medium tracking-wider uppercase border border-border rounded-full text-accent bg-surface font-display">
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for remote roles
      </div>
      <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[0.95]">
        Rinkal <br /> Satani.
      </h1>
      <p className="text-lg sm:text-xl text-muted-ink leading-relaxed max-w-lg">
        Front-end developer with 5 years crafting scalable, accessible web and mobile experiences in React, TypeScript and GraphQL — most recently in healthcare and AI.
      </p>
      <div className="flex flex-wrap gap-6 sm:gap-10 pt-2 text-sm">
        <a href="mailto:rinkalkhatrani123@gmail.com" className="text-white hover:text-accent transition-colors underline-offset-4 hover:underline break-all">
          rinkalkhatrani123@gmail.com
        </a>
        <a href="tel:+917284848463" className="text-muted-ink hover:text-accent transition-colors">
          +91 72848 48463
        </a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="space-y-10 sm:space-y-12">
      <h2 className="text-xs font-bold tracking-widest uppercase text-accent font-display">
        Selected Projects
      </h2>
      <div className="space-y-5 sm:space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group p-6 sm:p-7 rounded-2xl bg-surface border border-border hover:border-accent hover:glow-soft transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-accent transition-colors font-display">
                {p.title}
              </h3>
              <span className="shrink-0 text-xs text-muted-ink px-2 py-1 rounded bg-background border border-border font-display">
                {p.year}
              </span>
            </div>
            <p className="text-muted-ink mb-6 text-sm sm:text-base leading-relaxed">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 border border-border rounded text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="space-y-10 sm:space-y-12">
      <h2 className="text-xs font-bold tracking-widest uppercase text-accent font-display">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((e) => (
          <div key={e.company} className="relative pl-8 border-l border-border">
            <div
              className={`absolute w-2.5 h-2.5 rounded-full -left-[5.5px] top-2 ${
                e.active ? "bg-accent glow-soft" : "bg-deep"
              }`}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
              <h4 className="font-bold text-white font-display text-base sm:text-lg">
                {e.role}
              </h4>
              <span className="text-xs text-muted-foreground font-display">
                {e.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-accent mb-2 font-display">{e.company}</p>
            <p className="text-sm text-muted-ink leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:rinkalkhatrani123@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:glow-indigo transition-all placeholder:text-muted-foreground text-foreground";

  return (
    <section className="space-y-10 sm:space-y-12">
      <h2 className="text-xs font-bold tracking-widest uppercase text-accent font-display">
        Contact
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            required
            maxLength={80}
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
          />
          <input
            type="email"
            required
            maxLength={200}
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
          />
          <textarea
            rows={4}
            required
            maxLength={1000}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputCls + " resize-none"}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent hover:bg-[#4338ca] text-white font-bold py-4 rounded-xl transition-all glow-indigo active:scale-[0.98] font-display"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
