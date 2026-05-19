import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Frontera Care Platform",
    role: "Front-end Developer",
    year: "2023 — 2026",
    description:
      "A HIPAA-compliant healthcare platform. Built a centralized library of 30+ reusable React + TypeScript components adopted across a 15+ engineer team, cutting feature delivery time by ~30%.",
    stack: ["React", "TypeScript", "GraphQL", "Tailwind", "Django"],
  },
  {
    title: "CogniAble Therapy App",
    role: "Front-end Developer",
    year: "2021 — 2023",
    description:
      "AI-driven behavioral therapy platform across iOS & Android. Modernized legacy components, integrated REST/GraphQL APIs for real-time data sync and analytics, and rolled out Jest-based testing.",
    stack: ["React Native", "GraphQL", "Tailwind", "Jest"],
  },
  {
    title: "Component System & Performance",
    role: "Initiative Lead",
    year: "Ongoing",
    description:
      "Reduced initial load by ~40% via code-splitting, lazy loading and deferred fetching. Automated onboarding, scheduling and reporting flows with Cypress, lowering regression bugs ~50%.",
    stack: ["Cypress", "RTL", "CodeGen", "WCAG"],
  },
];

const experience = [
  {
    company: "Frontera",
    location: "Denver, USA · Remote",
    role: "Front-end Developer",
    period: "Nov 2023 — Apr 2026",
    points: [
      "Built 30+ reusable React + TypeScript components used by a 15+ engineer team.",
      "Optimized GraphQL with CodeGen, query tuning and pagination.",
      "85%+ test coverage with Jest and React Testing Library.",
      "Supported Django & Temporal back-end workflows in a HIPAA-compliant setup.",
    ],
  },
  {
    company: "CogniAble",
    location: "Gurgaon · Remote",
    role: "Front-end Developer",
    period: "May 2021 — Oct 2023",
    points: [
      "Shipped cross-platform iOS & Android apps with React Native.",
      "Built responsive, WCAG-compliant UI from Figma using Tailwind CSS.",
      "Integrated REST/GraphQL and third-party APIs for real-time sync.",
      "Introduced Jest-based unit testing and analytics tracking.",
    ],
  },
  {
    company: "Web Design Internship",
    location: "On-site",
    role: "Web Design Intern",
    period: "Nov 2020 — Feb 2021",
    points: [
      "Built responsive, user-friendly interfaces with HTML, CSS, JS, jQuery.",
      "Developed adaptive layouts following modern front-end best practices.",
    ],
  },
];

const skills = [
  "React.js", "TypeScript", "GraphQL", "React Native", "Redux",
  "Tailwind CSS", "Material UI", "Jest", "React Testing Library",
  "Cypress", "Django", "Temporal", "Node / Express", "MongoDB", "MySQL",
];

function Index() {
  return (
    <main className="min-h-screen grain">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <SkillsSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">Rinkal<span className="text-accent">.</span></a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors">
          Say hello
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Surat, India · Available for remote roles
        </p>
        <h1 className="font-serif text-[15vw] md:text-[10rem] leading-[0.9] tracking-tighter">
          Rinkal
          <br />
          <span className="italic text-accent">Satani.</span>
        </h1>
        <div className="mt-12 grid md:grid-cols-3 gap-8 items-end">
          <div className="md:col-span-2 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
            Front-end developer with five years of experience crafting{" "}
            <span className="italic font-serif text-foreground">scalable, accessible</span> web and mobile experiences in React, TypeScript and GraphQL — most recently in healthcare and AI.
          </div>
          <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground md:text-right">
            <span>05 years</span>
            <span>30+ components shipped</span>
            <span>15+ engineers supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">01 — About</p>
          <h2 className="mt-4 text-4xl md:text-5xl">A short bio.</h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I design and build front-end systems that make complex products feel effortless. My focus is reusable component architecture, performance, and accessibility — the unglamorous work that compounds.
          </p>
          <p>
            At <span className="font-serif italic text-foreground">Frontera</span>, I shipped a TypeScript component library used across a 15-engineer team, optimized GraphQL pipelines, and reduced initial load times by ~40%. At <span className="font-serif italic text-foreground">CogniAble</span>, I built cross-platform React Native apps for an AI-driven behavioral therapy platform.
          </p>
          <p>
            I care about WCAG compliance, 85%+ test coverage, and quiet collaboration in distributed Agile teams.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">02 — Selected work</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Things I've built.</h2>
          </div>
        </div>
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-accent transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                  0{i + 1}
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                    {p.role} · {p.year}
                  </p>
                  <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end md:content-start">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">03 — Experience</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Where I've worked.</h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          {experience.map((e) => (
            <article key={e.company} className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl md:text-3xl">
                  {e.role} <span className="italic text-accent">@ {e.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              <ul className="mt-5 space-y-2 text-foreground/80">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="text-accent mt-2 shrink-0">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Toolbox</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-serif text-2xl md:text-3xl text-foreground/70">
          {skills.map((s, i) => (
            <span key={s}>
              {s}
              {i < skills.length - 1 && <span className="text-accent ml-6">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:rinkalkhatrani3366@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">04 — Contact</p>
          <h2 className="mt-4 text-5xl md:text-6xl leading-[0.95]">
            Let's build
            <br />
            <span className="italic">something good.</span>
          </h2>
          <div className="mt-10 space-y-3 font-mono text-sm">
            <a href="mailto:rinkalkhatrani3366@gmail.com" className="block hover:text-accent transition-colors">
              rinkalkhatrani3366@gmail.com
            </a>
            <a href="tel:+917284848463" className="block hover:text-accent transition-colors">
              +91 72848 48463
            </a>
            <p className="text-muted-foreground">Surat, 395006 · India</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
          <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={80} />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={200} />
          <Field label="Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} maxLength={1000} />
          <button
            type="submit"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background hover:bg-accent transition-colors font-medium"
          >
            {status === "sent" ? "Opening mail…" : "Send message"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", textarea, maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  maxLength?: number;
}) {
  const base = "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg transition-colors placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          required
          rows={4}
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base + " resize-none"}
        />
      ) : (
        <input
          required
          type={type}
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono text-xs uppercase tracking-widest">© 2026 · Rinkal Satani</p>
        <p className="font-serif italic">Designed & coded with care.</p>
      </div>
    </footer>
  );
}
