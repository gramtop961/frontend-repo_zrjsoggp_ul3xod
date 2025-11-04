import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.25),transparent_45%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            Purpose-built for incubators & accelerators
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Coaching management, streamlined from session scheduling to outcomes
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Startup Square centralizes coaching sessions, goal tracking, cohort progress, and payments in one modern workspace designed for founders and coaching teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500">
              Get started free <ArrowRight size={18} />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 font-medium shadow border border-slate-200 hover:bg-slate-50">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
