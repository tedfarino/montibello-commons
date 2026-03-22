import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import providers from "@/data/providers.json";

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
  phone?: string;
  email?: string;
  website?: string;
  recommended?: boolean;
  source?: string;
  note?: string;
  engagement?: { reactions?: number; comments?: number };
  available?: string;
  [key: string]: unknown;
}

const typedProviders = providers as Provider[];

export default function DirectoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const [search, setSearch] = useState("");

  const categories = CATEGORY_ORDER.filter((c) =>
    typedProviders.some((p) => p.category === c)
  );

  const filtered = typedProviders.filter((p) => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const providers_list = filtered.filter((p) => p.type === "provider");
  const leads = filtered.filter((p) => p.type === "lead");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
            ← Back
          </Link>
          <span className="text-lg font-semibold text-zinc-900 dark:text-amber-50">
            🔍 Directory
          </span>
          <Link
            to="/add"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
          >
            + Add
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search providers..."
          className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
        />

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSearchParams({})}
            className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
              !selectedCategory
                ? "bg-amber-600 text-white"
                : "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-amber-100 dark:hover:bg-amber-900/40"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-amber-600 text-white"
                  : "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-amber-100 dark:hover:bg-amber-900/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Providers count */}
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {providers_list.length} provider{providers_list.length !== 1 ? "s" : ""}
          {leads.length > 0 && ` · ${leads.length} open request${leads.length !== 1 ? "s" : ""}`}
        </p>

        {/* Provider list */}
        {providers_list.length > 0 ? (
          <div className="space-y-3">
            {providers_list.map((p) => (
              <Link
                key={p.id}
                to={`/provider/${p.id}`}
                className="block rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-zinc-900 dark:text-amber-50">
                        {p.name}
                      </h3>
                      {p.recommended && (
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      {p.category}
                      {p.source && ` · Recommended by ${p.source}`}
                    </p>
                    {p.note && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                        "{p.note.slice(0, 100)}{p.note.length > 100 ? "..." : ""}"
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.phone && (
                        <span className="text-xs text-zinc-400">📞 {p.phone}</span>
                      )}
                      {p.website && (
                        <span className="text-xs text-amber-600 dark:text-amber-400">
                          🌐 {p.website.replace(/^https?:\/\//, "")}
                        </span>
                      )}
                      {p.available && (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Available: {p.available}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-amber-500 font-medium text-sm">
                      {(p.engagement?.reactions || 0) + (p.engagement?.comments || 0) * 2}
                    </div>
                    <div className="text-xs text-zinc-400">endorsements</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800/50 p-8 text-center">
            <p className="text-zinc-500 dark:text-zinc-500">
              No providers found in this category.
            </p>
            <Link
              to="/request"
              className="mt-3 inline-block text-sm text-amber-600 hover:text-amber-500 dark:text-amber-400 font-medium"
            >
              Request a recommendation →
            </Link>
          </div>
        )}

        {/* Open requests */}
        {leads.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-amber-50 mb-3">
              📢 Neighbors Looking For...
            </h2>
            <div className="space-y-2">
              {leads.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-zinc-800 dark:text-amber-100">
                        {p.request || `${p.category} needed`}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {p.category} · {p.engagement?.comments || 0} neighbor{p.engagement?.comments !== 1 ? "s" : ""} responded
                      </p>
                    </div>
                    <Link
                      to="/add"
                      className="flex-shrink-0 text-xs font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400"
                    >
                      Help →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
