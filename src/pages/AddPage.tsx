import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CATEGORIES = [
  "HVAC", "Plumbing", "Electrician", "Handyman", "Landscaping",
  "Cleaning", "Painting", "Roofing", "Pest Control", "Appliance Repair",
  "Pressure Washing", "Locksmith", "Tree Service", "Pool", "Contractor",
  "Babysitter", "Pet Sitter", "Tutor", "Garage Door",
];

export default function AddPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    phone: "",
    email: "",
    website: "",
    source: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success — actual storage would be added in a later iteration
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-amber-50">
            Thanks for contributing!
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
            Your recommendation has been submitted. We'll review it and add it to the directory soon.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/directory"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 transition"
            >
              🔍 Browse Providers
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", category: "", phone: "", email: "", website: "", source: "", note: "" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-600 hover:border-amber-400 dark:hover:border-amber-600 text-zinc-700 dark:text-zinc-300 font-medium px-6 py-3 transition"
            >
              ➕ Add Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
      <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-3">
          <Link to="/" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
            ← Back
          </Link>
          <span className="text-lg font-semibold text-zinc-900 dark:text-amber-50 ml-auto">
            ✏️ Add Recommendation
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Know a great service provider in Montibello? Share them with your neighbors!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Provider Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Chris Miller Handyman"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Category *
              </label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
              >
                <option value="">Select a category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(704) 555-0123"
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contact@example.com"
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Website
              </label>
              <input
                type="url"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                placeholder="https://example.com"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Your Name (who's recommending?)
              </label>
              <input
                type="text"
                value={form.source}
                onChange={(e) => setForm({ ...form, source: e.target.value })}
                placeholder="Your name or 'A Montibello neighbor'"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                Why recommend them?
              </label>
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Share your experience — what did they do well? Would you recommend them?"
                rows={3}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-4 py-2.5 text-zinc-900 dark:text-amber-50 placeholder-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 transition shadow-lg shadow-amber-200 dark:shadow-amber-900/30"
            >
              Submit Recommendation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
