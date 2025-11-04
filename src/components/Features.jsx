import { Calendar, Target, CreditCard, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Session scheduling",
    description:
      "Coordinate 1:1s and group sessions with timezone-aware availability and automated reminders.",
    icon: Calendar,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Goal tracking",
    description:
      "Set OKRs for each startup, assign owners, and visualize progress over time.",
    icon: Target,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Payments & invoices",
    description:
      "Collect fees, track scholarships, and reconcile payouts with transparent reporting.",
    icon: CreditCard,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Cohort analytics",
    description:
      "Monitor attendance, mentor NPS, and outcomes across cohorts with real-time dashboards.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Everything you need to run world-class coaching</h2>
          <p className="mt-3 text-slate-600">Built for program managers, mentors, and founders working together.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${f.color} text-white shadow` }>
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
