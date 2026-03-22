import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
      <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-3">
          <Link to="/" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
            ← Back
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-amber-50">
            About Montibello Commons
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            A free community resource, made by neighbors for neighbors.
          </p>
        </section>

        <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-50">The Problem</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Every week in the Montibello Facebook group, neighbors ask the same questions:
            <em>"Does anyone have a good plumber?" "Looking for a reliable HVAC company."</em>
            And every time, the same 20 neighbors chime in — until the thread scrolls away and
            the next neighbor asks the same thing.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <strong className="text-zinc-800 dark:text-zinc-200">Montibello Commons</strong> is the fix:
            a clean, searchable directory of neighbor-vetted service providers. No more digging
            through 6-month-old threads.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-50">How It Works</h2>
          <ul className="space-y-3">
            {[
              { icon: "🔍", title: "Browse", desc: "Search our directory of providers by service category" },
              { icon: "✅", title: "Verify", desc: "Each provider shows who recommended them and endorsement counts" },
              { icon: "📢", title: "Request", desc: "Can't find what you need? Post a request and neighbors will help" },
              { icon: "✏️", title: "Contribute", desc: "Add your own recommendations to help the community" },
            ].map(({ icon, title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <strong className="text-zinc-800 dark:text-zinc-200">{title}</strong>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 p-6 text-center">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-50 mb-2">
            Built Different
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            This isn't a corporate directory or a pay-to-play listing site. Every provider
            was recommended by a real Montibello neighbor. That's the whole point.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/directory"
            className="flex-1 text-center rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 transition"
          >
            🔍 Browse Providers
          </Link>
          <Link
            to="/"
            className="flex-1 text-center rounded-xl border border-zinc-300 dark:border-zinc-600 hover:border-amber-400 dark:hover:border-amber-600 text-zinc-700 dark:text-zinc-300 font-medium px-6 py-3 transition"
          >
            ← Back Home
          </Link>
        </div>

        <p className="text-center text-sm text-zinc-400 dark:text-zinc-600 pt-4">
          Made with ❤️ by a Montibello neighbor
        </p>
      </div>
    </div>
  );
}
