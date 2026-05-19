import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/rinkal-khatrani/";
const GITHUB = "https://github.com/Rinkal-Khatrani";
const EMAIL = "rinkalkhatrani123@gmail.com";
const PHONE = "+91 72848 48463";

const projects = [
  {
    title: "Frontera Care Platform",
    year: "2023 — 2026",
    description:
      "HIPAA-compliant healthcare platform. Built a centralized library of 30+ reusable React + TypeScript components adopted across a 15+ engineer team, cutting feature delivery time by ~30%.",
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
    company: "Frontera, Denver USA (Remote)",
    period: "Nov 2023 — Apr 2026",
    points: [
      "Built a centralized library of 30+ reusable React + TypeScript components, standardizing UI and accelerating feature delivery by ~30% across a 15+ engineer team.",
      "Optimized GraphQL integrations using CodeGen, query tuning and pagination, improving data efficiency and front-end responsiveness.",
      "Boosted performance with code-splitting, lazy loading and deferred fetching, reducing initial load time by ~40% and improving user engagement.",
      "Ensured high code quality with 85%+ test coverage using Jest and React Testing Library, strengthening reliability of critical modules.",
      "Automated key user flows (onboarding, scheduling, reporting) with Cypress E2E testing, reducing regression bugs by ~50%.",
      "Delivered responsive, WCAG-compliant UI from Figma using Tailwind CSS, enhancing accessibility and user experience.",
      "Supported back-end workflow using Django & Temporal in a HIPAA-compliant setup, while driving CI/CD, code reviews and cross-team collaboration.",
    ],
    active: true,
  },
  {
    role: "Front-end Developer",
    company: "CogniAble, Gurgaon (Remote)",
    period: "May 2021 — Oct 2023",
    points: [
      "Built and enhanced cross-platform iOS & Android applications using React Native, delivering seamless, accessible (WCAG-compliant) user experiences for an AI-driven behavioral therapy platform.",
      "Developed responsive, reusable UI components from Figma using Tailwind CSS, while modernizing legacy components to improve performance and maintainability.",
      "Integrated REST/GraphQL and third-party APIs, enabling real-time data sync, analytics and expanded platform functionality.",
      "Strengthened code quality by introducing Jest-based unit testing, implemented analytics tracking, and collaborated in remote Agile teams to drive efficient delivery.",
    ],
    active: false,
  },
  {
    role: "Web Design Intern",
    company: "Fynzo (Remote)",
    period: "Nov 2020 — Feb 2021",
    points: [
      "Completed a 3-month internship focused on responsive web design, building user-friendly interfaces with HTML, CSS, JavaScript and jQuery.",
      "Developed adaptive layouts and enhanced front-end functionality while following modern web design best practices.",
    ],
    active: false,
  },
];

const education = [
  {
    degree: "B.Tech / B.E. — Computer Science & Engineering",
    school: "Shree Swami Atmanand Institute of Technology, Gujarat",
    period: "2019",
    detail: "Grade 9.21 / 10",
  },
  {
    degree: "12th — Science",
    school: "Ashadeep Science Bhavan, Gujarat",
    period: "2015",
    detail: "75 – 79.9%",
  },
  {
    degree: "10th",
    school: "Surat Diamond Association Girls High School, Gujarat",
    period: "2013",
    detail: "80 – 84.9%",
  },
];

const skills = [
  "React.js", "TypeScript", "GraphQL", "React Native", "Redux",
  "Tailwind CSS", "Material UI", "Jest", "React Testing Library",
  "Cypress", "Django", "Temporal", "Node / Express", "MongoDB", "MySQL",
];

function Index() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground flex flex-col items-center">
      <Nav />
      <div className="w-full max-w-3xl px-5 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-28">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <SkillsSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-base tracking-tight text-foreground">
          Rinkal Satani<span className="text-accent">.</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-ink font-medium">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-foreground text-primary-foreground hover:bg-accent transition-colors"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="space-y-7 sm:space-y-8 pt-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-border rounded-full text-accent bg-surface font-display shadow-card">
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Open to remote roles
      </div>
      <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
        Rinkal <br /> Satani.
      </h1>
      <p className="text-lg sm:text-xl text-muted-ink leading-relaxed max-w-xl">
        Front-end developer with <span className="text-foreground font-semibold">5 years of experience</span> crafting scalable, accessible web and mobile experiences in React, TypeScript and GraphQL — most recently in healthcare and AI.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors"
        >
          <LinkedInIcon /> LinkedIn
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-border text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          <GitHubIcon /> GitHub
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-border text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          <MailIcon /> Email
        </a>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "5", label: "Years experience" },
    { value: "30+", label: "Components shipped" },
    { value: "15+", label: "Engineers supported" },
    { value: "85%", label: "Test coverage" },
  ];
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl bg-surface border border-border p-4 sm:p-5 shadow-card"
        >
          <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">{s.value}</div>
          <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="space-y-8 sm:space-y-10">
      <SectionHeader eyebrow="Selected Projects" title="Things I've built." />
      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-card hover:shadow-card-hover hover:border-accent transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors font-display">
                {p.title}
              </h3>
              <span className="shrink-0 text-[11px] text-muted-ink px-2.5 py-1 rounded-full bg-secondary border border-border font-display font-semibold">
                {p.year}
              </span>
            </div>
            <p className="text-muted-ink mb-5 text-sm sm:text-base leading-relaxed">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border border-border rounded-md text-muted-foreground bg-background"
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
    <section id="experience" className="space-y-8 sm:space-y-10">
      <SectionHeader eyebrow="Experience" title="Where I've worked." />
      <div className="space-y-8">
        {experience.map((e) => (
          <div key={e.company + e.period} className="relative pl-7 border-l-2 border-border">
            <div
              className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${
                e.active ? "bg-accent glow-navy" : "bg-border"
              }`}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
              <h4 className="font-bold text-foreground font-display text-base sm:text-lg">
                {e.role}
              </h4>
              <span className="text-xs text-muted-foreground font-display font-semibold">
                {e.period}
              </span>
            </div>
            <p className="text-sm text-accent mb-2 font-display font-semibold">{e.company}</p>
            <ul className="mt-3 space-y-2">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm text-muted-ink leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0">▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="space-y-8 sm:space-y-10">
      <SectionHeader eyebrow="Education" title="Academic background." />
      <div className="grid gap-4">
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="p-5 sm:p-6 rounded-2xl bg-surface border border-border shadow-card hover:border-accent transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
              <h4 className="font-bold text-foreground font-display text-base sm:text-lg">
                {ed.degree}
              </h4>
              <span className="text-xs text-muted-foreground font-display font-semibold">
                {ed.period}
              </span>
            </div>
            <p className="text-sm text-muted-ink">{ed.school}</p>
            <p className="text-xs text-accent mt-1 font-display font-semibold uppercase tracking-wider">
              {ed.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="space-y-6">
      <SectionHeader eyebrow="Toolbox" title="Technical skills." />
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-surface border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            {s}
          </span>
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
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:glow-navy transition-all placeholder:text-muted-foreground text-foreground";

  return (
    <section id="contact" className="space-y-8 sm:space-y-10">
      <SectionHeader eyebrow="Contact" title="Let's work together." />
      <div className="grid sm:grid-cols-5 gap-6 items-start">
        <div className="sm:col-span-2 space-y-3 text-sm">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-foreground hover:text-accent transition-colors break-all">
            <MailIcon /> {EMAIL}
          </a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 text-muted-ink hover:text-accent transition-colors">
            <PhoneIcon /> {PHONE}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-ink hover:text-accent transition-colors">
            <LinkedInIcon /> linkedin.com/in/rinkal-khatrani
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-ink hover:text-accent transition-colors">
            <GitHubIcon /> github.com/Rinkal-Khatrani
          </a>
          <p className="text-muted-foreground pt-1">Surat, 395006 · India</p>
        </div>
        <form onSubmit={onSubmit} className="sm:col-span-3 space-y-3">
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
          <button
            type="submit"
            className="w-full bg-foreground hover:bg-accent text-primary-foreground font-bold py-4 rounded-xl transition-all active:scale-[0.98] font-display"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent font-display">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="pt-12 pb-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p className="font-display font-semibold tracking-wider uppercase">© 2026 Rinkal Satani</p>
      <div className="flex items-center gap-4">
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><LinkedInIcon /></a>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><GitHubIcon /></a>
        <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors"><MailIcon /></a>
      </div>
    </footer>
  );
}

/* ---- icons ---- */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.22 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
