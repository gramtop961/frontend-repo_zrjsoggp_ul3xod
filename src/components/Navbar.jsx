import { Rocket, Calendar, Target, CreditCard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white"><Rocket size={18} /></span>
            <span className="text-lg">Startup Square</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#scheduler" className="hover:text-slate-900 transition flex items-center gap-1"><Calendar size={16}/>Schedule</a>
            <a href="#goals" className="hover:text-slate-900 transition flex items-center gap-1"><Target size={16}/>Goals</a>
            <a href="#payments" className="hover:text-slate-900 transition flex items-center gap-1"><CreditCard size={16}/>Payments</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Live demo</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
