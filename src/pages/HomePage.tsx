import { Link } from "react-router-dom";
import providers from "@/data/providers.json";

const CATEGORY_ICONS: Record<string, string> = {
  "Pest Control": "🐜",
  "Painting": "🎨",
  "Handyman": "🔧",
  "Plumbing": "🚿",
  "HVAC": "❄️",
  "Landscaping": "🌿",
  "Cleaning": "✨",
  "Appliance Repair": "🔌",
  "Electrician": "💡",
  "Roofing": "🏠",
  "Locksmith": "🔒",
  "Pressure Washing": "💦",
  "Babysitter": "👶",
  "Pet Sitter": "🐾",
  "Tutor": "📚",
  "Pool": "🏊",
  "Tree Service": "🌳",
  "Contractor": "🏗️",
  "Garage Door": "🚗",
};

const CATEGORY_ORDER = [
  "HVAC",
  "Plumbing",
  "Electrician",
  "Handyman",
  "Landscaping",
  "Cleaning",
  "Painting",
  "Roofing",
  "Pest Control",
  "Appliance Repair",
  "Pressure Washing",
  "Locksmith",
  "Tree Service",
  "Pool",
  "Contractor",
  "Babysitter",
  "Pet Sitter",
  "Tutor",
  "Garage Door",
];

interface Provider {
  id: string;
  name: string;
  category: string;
  type: string;
  [key: string]: unknown;
}

const typedProviders = providers as Provider[];

function getCategories() {
  const counts: Record<string, { providers: number; leads: number }> = {};
  for (const p of typedProviders) {
    if (!counts[p.category]) counts[p.category] = { providers: 0, leads: 0 };
    if (p.type === "provider") counts[p.category].providers++;
    else counts[p.category].leads++;
  }
  return CATEGORY_ORDER.filter((c) => counts[c]).map((c) => ({
    name: c,
    icon: CATEGORY_ICONS[c] || "🔧",
    ...counts[c],
  }));
}

function getRecentProviders() {
  return typedProviders
    .filter((p) => p.type === "provider")
    .slice(0, 4);
}

function getTopProviders() {
  return typedProviders
    .filter((p) => p.type === "provider")
    .sort((a, b) => {
      const aEng = (a.engagement?.reactions || 0) + (a.engagement?.comments || 0) * 2;
      const bEng = (b.engagement?.reactions || 0) + (b.engagement?.comments || 0) * 2;
      return bEng - aEng;
    })
    .slice(0, 3);
}

export default function HomePage() {
  const categories = getCategories();
  const recentProviders = getRecentProviders();
  const topProviders = getTopProviders();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-zinc-900 dark:text-amber-50">
              🏡 Montibello Commons
            </span>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link to="/directory" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
              Directory
            </Link>
            <Link to="/about" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300 mb-4">
          <span className="text-xs">📍</span> Montibello Neighborhood
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-amber-50 sm:text-4xl">
          Stop asking the Facebook group.
          <br />
          <span className="text-amber-600 dark:text-amber-400">Find trusted neighbors instead.</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          A free directory of home service providers — vetted by your neighbors, not random strangers.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/directory"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 transition shadow-lg shadow-amber-200 dark:shadow-amber-900/30"
          >
            🔍 Browse Providers
          </Link>
          <Link
            to="/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-600 hover:border-amber-400 dark:hover:border-amber-600 text-zinc-700 dark:text-zinc-300 font-medium px-6 py-3 transition"
          >
            ✏️ Add a Recommendation
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto max-w-3xl px-4 pb-8">
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: typedProviders.filter(p => p.type === "provider").length, label: "Providers" },
            { value: typedProviders.filter(p => p.type === "lead").length, label: "Requests" },
            { value: [...new Set(typedProviders.map(p => p.category))].length, label: "Categories" },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{value}</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-50">Browse by Service</h2>
          <Link to="/directory" className="text-sm text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {categories.map(({ name, icon, providers: provCount }) => (
            <Link
              key={name}
              to={`/directory?category=${encodeURIComponent(name)}`}
              className="flex flex-col items-center gap-1 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3 text-center hover:border-amber-400 dark:hover:border-amber-600 transition group"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                {name}
              </span>
              <span className="text-xs text-zinc-400">
                {provCount} provider{provCount !== 1 ? "s" : ""}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Recommended */}
      {topProviders.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 pb-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-50 mb-4">
            ⭐ Most Recommended
          </h2>
          <div className="space-y-2">
            {topProviders.map((p) => (
              <Link
                key={p.id}
                to={`/provider/${p.id}`}
                className="flex items-center gap-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-zinc-900 dark:text-amber-50 truncate">
                    {p.name}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {p.category} · Recommended by {p.source || "neighbors"}
                  </div>
                </div>
                <div className="text-amber-500 text-sm font-medium">
                  {(p.engagement?.reactions || 0) + (p.engagement?.comments || 0) * 2} endorsements
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Request CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 p-6 text-center">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-amber-50 mb-2">
            Can't find what you need?
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Post a request and your neighbors will help you find someone.
          </p>
          <Link
            to="/request"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium px-5 py-2 transition text-sm"
          >
            📢 Request a Recommendation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Made with ❤️ by a Montibello neighbor, for Montibello neighbors.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1">
            v1.0 — Submit a provider or request via the links above.
          </p>
        </div>
      </footer>
    </div>
  );
}
