import { CalendarDays, CheckCircle2, CreditCard, Users } from "lucide-react";

function StatCard({ icon: Icon, label, value, color = "indigo" }) {
  const colorClasses = {
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600" },
  };
  const c = colorClasses[color] || colorClasses.indigo;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${c.bg} ${c.text}`}>
          <Icon size={20} />
        </span>
      </div>
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
      <div className="h-full bg-indigo-600" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">A modern workspace for your program</h2>
            <p className="mt-3 text-slate-600">A snapshot of how program managers, mentors, and founders collaborate day-to-day.</p>
          </div>
          <a href="#get-started" className="hidden sm:inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">Start free</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Mini calendar & upcoming */}
          <div id="scheduler" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-indigo-600" size={20} />
                <h3 className="font-semibold text-slate-900">This week</h3>
              </div>
              <div className="text-sm text-slate-500">All times local</div>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="rounded-md border border-slate-200 py-2 font-medium text-slate-700">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { t: "09:00", title: "1:1 Coaching — FinOps", who: "Acme Robotics" },
                { t: "11:30", title: "Mentor AMA — Fundraising", who: "Cohort Alpha" },
                { t: "15:00", title: "Growth Standup", who: "Beta Labs" },
              ].map((s, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-900">{s.title}</p>
                      <span className="text-xs text-slate-500">{s.t}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">{s.who}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: KPIs */}
          <div className="space-y-4">
            <StatCard icon={Users} label="Active startups" value="32" color="indigo" />
            <StatCard icon={CheckCircle2} label="Goals completed (30d)" value="124" color="emerald" />
            <StatCard icon={CreditCard} label="Payments processed (30d)" value="$48,920" color="amber" />
          </div>
        </div>

        {/* Goals & Payments sections for anchors */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div id="goals" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-600" size={20} />
              <h3 className="font-semibold text-slate-900">Cohort goals</h3>
            </div>
            <div className="mt-4 space-y-4">
              {[
                { label: "MVP shipped", value: 85 },
                { label: "First 10 customers", value: 60 },
                { label: "Fundraising readiness", value: 40 },
              ].map((g) => (
                <div key={g.label}>
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{g.label}</span>
                    <span>{g.value}%</span>
                  </div>
                  <div className="mt-2"><ProgressBar value={g.value} /></div>
                </div>
              ))}
            </div>
          </div>

          <div id="payments" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="text-amber-600" size={20} />
              <h3 className="font-semibold text-slate-900">Recent payments</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { who: "Acme Robotics", amt: "$2,000", note: "Program fee — May" },
                { who: "Beta Labs", amt: "$1,500", note: "Mentor package" },
                { who: "Nimbus AI", amt: "$750", note: "Workshop credits" },
              ].map((p) => (
                <li key={p.who} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{p.who}</p>
                    <p className="text-xs text-slate-600">{p.note}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{p.amt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
