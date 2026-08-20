const projects = [
  {
    title: "AI Workflow Automation Platform",
    description:
      "Full-stack workflow automation platform with a visual React Flow builder, FastAPI execution engine, HTTP and AI nodes, persistent execution history, and node-level execution logs.",
    stack: "React . TypeScript . FastAPI . Python . SQLAlchemy . SQLite",
    github:
      "https://github.com/sanjanajaat23-commits/AI-Workflow-Automation-Platform",
    image: "/projects/workflow-dashboard.png",
    category: "Full-Stack . AI Engineering",
  },
  {
    title: "NovaRAG",
    description:
      "Enterprise multi-agent RAG platform with intelligent query routing, PDF question answering, session-isolated FAISS vector storage, persistent conversation memory, and local LLM inference.",
    stack:
      "Next.js . TypeScript . FastAPI . FAISS . Sentence Transformers . Ollama . Llama 3.2 . SQLite",
    github:
      "https://github.com/sanjanajaat23-commits/NovaRAG",
    image: "/projects/novarag.png",
    category: "AI Engineering . RAG",
  },
  {
    title: "NovaCRM AI",
    description:
      "AI-powered multi-tenant CRM for lead scoring, personalized sales outreach, pipeline intelligence, and a context-aware Revenue Copilot.",
    stack:
      "React . Vite . FastAPI . PostgreSQL . SQLAlchemy . Gemini . JWT",
    github:
      "https://github.com/sanjanajaat23-commits/novacrm-ai",
    image: "/projects/novacrm.png",
    category: "Full-Stack . SaaS . AI",
  },
];

const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "FastAPI",
  "REST APIs",
  "SQL",
  "SQLAlchemy",
  "SQLite",
  "AI / LLM Integration",
  "RAG",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            Sanjana<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Full-Stack Developer . AI Engineering
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Building practical software
            <span className="block text-slate-400">
              with modern web & AI technologies.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I build full-stack applications, backend systems, workflow
            automation tools, and AI-powered solutions with a focus on clean
            engineering and real-world usability.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="https://github.com/sanjanajaat23-commits"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sanjana-jaat-281224408/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Projects that demonstrate real engineering.
          </h2>

          <div className="mt-12 grid gap-8">
  {projects.map((project) => (
    <article
      key={project.title}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-400/40"
    >
      {/* Main screenshot */}
      <div className="border-b border-white/10 bg-slate-900 p-3">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full rounded-xl border border-white/10"
        />
      </div>

      <div className="p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Featured Project
            </p>

            <h3 className="text-2xl font-bold">{project.title}</h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <p className="mt-5 text-sm font-medium text-cyan-300">
              {project.stack}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
  {project.title === "AI Workflow Automation Platform" && (
    <>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Workflow Builder
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Execution Engine
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Execution Logs
      </span>
    </>
  )}

  {project.title === "NovaRAG" && (
    <>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Multi-Agent RAG
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        FAISS Vector Search
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        LLM Integration
      </span>
    </>
  )}

  {project.title === "NovaCRM AI" && (
    <>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        AI Lead Scoring
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Revenue Copilot
      </span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
        Multi-Tenant SaaS
      </span>
    </>
  )}
</div>
          </div>

          <div className="shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              View on GitHub â†’
            </a>
          </div>
        </div>

        {project.title === "AI Workflow Automation Platform" && (
  <div className="mt-8 grid gap-5 md:grid-cols-2">
    <div>
      <p className="mb-3 text-sm font-medium text-slate-400">
        Workflow Builder
      </p>

      <img
        src="/projects/workflow-builder.png"
        alt="AI Workflow Automation Platform workflow builder"
        className="w-full rounded-xl border border-white/10"
      />
    </div>

    <div>
      <p className="mb-3 text-sm font-medium text-slate-400">
        Execution Logs
      </p>

      <img
        src="/projects/execution-logs.png"
        alt="AI Workflow Automation Platform execution logs"
        className="w-full rounded-xl border border-white/10"
      />
    </div>
  </div>
)}
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">Tools I work with.</h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Developer focused on building useful software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              I enjoy turning ideas and problems into working software. My
              interests include full-stack development, backend engineering,
              AI integrations, workflow automation, and building practical
              products that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-5 max-w-xl text-slate-300">
            I&apos;m open to software engineering, full-stack, backend, and AI
            engineering opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:sanjanajaat@23gmail.com"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/sanjana-jaat-281224408/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
          <p>Â© 2026 Sanjana Jaat</p>
          <p>Built with Next.js & TypeScript</p>
        </div>
      </footer>
    </main>
  );
}
