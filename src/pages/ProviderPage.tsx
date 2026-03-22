import { useParams, Link } from "react-router-dom";
import providers from "@/data/providers.json";

interface Provider {
  id: string;
  name: string;
  category: string;
  type: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  recommended?: boolean;
  source?: string;
  note?: string;
  available?: string;
  services?: string[];
  certifications?: string[];
  engagement?: { reactions?: number; comments?: number };
  [key: string]: unknown;
}

const typedProviders = providers as Provider[];

export default function ProviderPage() {
  const { id } = useParams();
  const provider = typedProviders.find((p) => p.id === id);

  if (!provider) {
    return (
      <div className="min-h-screen bg-amber-50/60 dark:from-zinc-900 dark:to-zinc-950">
        <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-3">
            <Link to="/directory" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
              ← Back
            </Link>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-amber-50">Provider not found</h1>
          <p className="text-zinc-500 dark:text-zinc-500 mt-2">This listing may have been removed.</p>
          <Link to="/directory" className="mt-4 inline-block text-amber-600 hover:text-amber-500 font-medium">
            ← Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const endorsements = (provider.engagement?.reactions || 0) + (provider.engagement?.comments || 0) * 2;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <header className="border-b border-amber-200/60 bg-white/80 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-3">
          <Link to="/directory" className="text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition">
            ← Back
          </Link>
          <span className="text-sm text-zinc-400">|</span>
          <Link to="/directory" className="text-sm text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
            Directory
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        {/* Profile card */}
        <div className="rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-amber-50">
                    {provider.name}
                  </h1>
                  {provider.recommended && (
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-0.5 text-sm font-medium text-green-700 dark:text-green-400">
                      ✓ Neighbor Verified
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">{provider.category}</p>
                {provider.source && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                    Recommended by {provider.source}
                  </p>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                  {endorsements}
                </div>
                <div className="text-xs text-zinc-400">endorsements</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-6 flex flex-wrap gap-3">
              {provider.phone && (
                <a
                  href={`tel:${provider.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-4 py-2 text-sm font-medium transition"
                >
                  📞 {provider.phone}
                </a>
              )}
              {provider.email && (
                <a
                  href={`mailto:${provider.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 px-4 py-2 text-sm font-medium transition"
                >
                  ✉️ Email
                </a>
              )}
              {provider.website && (
                <a
                  href={provider.website.startsWith("http") ? provider.website : `https://${provider.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 px-4 py-2 text-sm font-medium transition"
                >
                  🌐 Website
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Services */}
        {provider.services && provider.services.length > 0 && (
          <div className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-5">
            <h2 className="font-semibold text-zinc-900 dark:text-amber-50 mb-3">Services</h2>
            <div className="flex flex-wrap gap-2">
              {provider.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {provider.certifications && provider.certifications.length > 0 && (
          <div className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-5">
            <h2 className="font-semibold text-zinc-900 dark:text-amber-50 mb-3">Qualifications</h2>
            <div className="flex flex-wrap gap-2">
              {provider.certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-700 dark:text-green-400"
                >
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        {provider.note && (
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-5">
            <h2 className="font-semibold text-zinc-900 dark:text-amber-50 mb-2">Neighbor Note</h2>
            <p className="text-zinc-700 dark:text-zinc-300 italic">"{provider.note}"</p>
          </div>
        )}

        {/* Availability */}
        {provider.available && (
          <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-5">
            <h2 className="font-semibold text-green-800 dark:text-green-300 mb-1">Available Now</h2>
            <p className="text-sm text-green-700 dark:text-green-400">{provider.available}</p>
          </div>
        )}

        {/* Engagement */}
        <div className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-5">
          <h2 className="font-semibold text-zinc-900 dark:text-amber-50 mb-3">Community Engagement</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {provider.engagement?.reactions || 0}
              </div>
              <div className="text-xs text-zinc-500">reactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {provider.engagement?.comments || 0}
              </div>
              <div className="text-xs text-zinc-500">comments</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/request"
            className="flex-1 text-center rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium px-6 py-3 transition"
          >
            📢 Request a Similar Service
          </Link>
          <Link
            to="/add"
            className="flex-1 text-center rounded-xl border border-zinc-300 dark:border-zinc-600 hover:border-amber-400 dark:hover:border-amber-600 text-zinc-700 dark:text-zinc-300 font-medium px-6 py-3 transition"
          >
            ✏️ Add a Recommendation
          </Link>
        </div>
      </div>
    </div>
  );
}
