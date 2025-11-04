import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Startup Square. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}
