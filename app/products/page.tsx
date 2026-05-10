import Link from "next/link";

const categories = ["All", "Prompt Packs", "Notion Templates", "Automation", "PDF Guides", "Services"];

const products = [
  {
    id: "fd-01",
    name: "Niche AI Prompt Pack — Freelancers",
    desc: "50 battle-tested ChatGPT & Claude prompts specifically for freelancers: proposals, client emails, pricing, project scoping.",
    price: "$17",
    originalPrice: null,
    tag: "Prompt Pack",
    badge: null,
    color: "from-[#00E5FF]/10",
  },
  {
    id: "fd-02",
    name: "Business Automation Starter Kit",
    desc: "Comprehensive PDF + templates showing how to automate email follow-ups, social scheduling, invoice generation, and lead tracking.",
    price: "$37",
    originalPrice: null,
    tag: "PDF Guide",
    badge: "Best Seller",
    color: "from-[#7B61FF]/10",
  },
  {
    id: "fd-03",
    name: "Freelancer Business OS",
    desc: "Complete Notion workspace — client CRM, project tracker, invoice generator, proposal templates, income dashboard. All in one.",
    price: "$39",
    originalPrice: null,
    tag: "Notion Template",
    badge: "Popular",
    color: "from-[#00E5FF]/10",
  },
  {
    id: "fd-04",
    name: "AI Tools Directory & Buyer's Guide",
    desc: "Curated PDF of the best AI tools by category — writing, design, automation, video, marketing. Free vs paid, with Flowdoma recommendations.",
    price: "$17",
    originalPrice: null,
    tag: "PDF Guide",
    badge: null,
    color: "from-[#7B61FF]/10",
  },
  {
    id: "fd-05",
    name: "Make.com & Zapier Automation Templates",
    desc: "10 pre-built automation workflows you import directly. Lead capture to CRM, invoice auto-gen, client onboarding, social autoposter.",
    price: "$29",
    originalPrice: null,
    tag: "Automation",
    badge: "New",
    color: "from-[#00E5FF]/10",
  },
  {
    id: "fd-06",
    name: "Social Media Content Calendar Pack",
    desc: "Done-for-you content calendar templates in Notion and Google Sheets. Monthly planning grids, post idea banks, hashtag guides.",
    price: "$19",
    originalPrice: null,
    tag: "Notion Template",
    badge: null,
    color: "from-[#7B61FF]/10",
  },
  {
    id: "fd-07",
    name: "Email Sequence Swipe File",
    desc: "30 ready-to-use email templates — welcome sequences, abandoned cart, re-engagement, cold outreach, referral requests.",
    price: "$22",
    originalPrice: null,
    tag: "PDF Guide",
    badge: null,
    color: "from-[#00E5FF]/10",
  },
  {
    id: "fd-09",
    name: "ChatGPT & Claude Mega Prompt Library",
    desc: "500+ prompts across all major categories — marketing, sales, HR, customer service, SEO, coding, finance. The complete library.",
    price: "$47",
    originalPrice: "$67",
    tag: "Prompt Pack",
    badge: "⭐ Top Rated",
    color: "from-[#7B61FF]/10",
  },
  {
    id: "fd-10",
    name: "AI Business Plan Generator Kit",
    desc: "Structured prompt kit walking you through a full business plan using ChatGPT — market research, financials, marketing strategy.",
    price: "$27",
    originalPrice: null,
    tag: "Prompt Pack",
    badge: null,
    color: "from-[#00E5FF]/10",
  },
];

const services = [
  {
    name: "Done-For-You Automation Setup",
    desc: "We build your complete automation system — CRM workflows, email sequences, social schedulers, reporting dashboards.",
    price: "From $300",
    tag: "Service",
    cta: "Get a Quote",
  },
  {
    name: "Free Automation Audit",
    desc: "60-minute consultation reviewing your current tools and workflows. We identify automation opportunities and give you an action plan.",
    price: "Free",
    tag: "Consultation",
    cta: "Book Now",
  },
  {
    name: "WordPress Website Build",
    desc: "Professional WordPress website built for your business. Fast, mobile-optimized, SEO-ready. Includes hosting setup guidance.",
    price: "From $400",
    tag: "Web Service",
    cta: "Get a Quote",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 hero-glow border-b border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">Digital Products & Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text-warm mb-4">
            Tools built to save you time
          </h1>
          <p className="text-[#8896A7] text-lg max-w-xl mx-auto">
            Every product is designed for one purpose: helping you automate more, stress less, and grow your business faster.
          </p>
        </div>
      </section>

      {/* Digital Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl font-bold text-[#E2E8F0]">Digital Products</h2>
          <span className="text-[#4A5568] text-sm font-mono">{products.length} products</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="card-hover bg-[#0E1420] border border-[#1A2235] rounded-2xl overflow-hidden flex flex-col">
              {/* Card top */}
              <div className={`h-28 bg-gradient-to-br ${p.color} to-transparent relative flex items-start justify-between p-4`}>
                {p.badge && (
                  <span className="text-xs font-mono font-semibold bg-[#080B11]/80 border border-[#1A2235] text-[#00E5FF] px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                {!p.badge && <span />}
                <span className="text-xs font-mono text-[#8896A7] bg-[#080B11]/60 px-3 py-1 rounded-full border border-[#1A2235]">
                  {p.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-[#E2E8F0] mb-2 leading-snug">{p.name}</h3>
                <p className="text-[#8896A7] text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-2xl gradient-text">{p.price}</span>
                    {p.originalPrice && (
                      <span className="text-[#4A5568] text-sm line-through">{p.originalPrice}</span>
                    )}
                  </div>
                  <a
                    href="https://gumroad.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary px-4 py-2 rounded-lg text-sm"
                  >
                    <span>Get it →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0E1420]/30 border-t border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#7B61FF] font-mono text-xs tracking-widest uppercase mb-3">Done For You</p>
            <h2 className="font-display text-3xl font-bold text-[#E2E8F0]">Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="animated-border rounded-2xl p-6 card-hover">
                <span className="text-xs font-mono text-[#7B61FF] tracking-wider uppercase mb-4 block">{s.tag}</span>
                <h3 className="font-display font-semibold text-lg text-[#E2E8F0] mb-3">{s.name}</h3>
                <p className="text-[#8896A7] text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xl gradient-text">{s.price}</span>
                  <Link href="/contact" className="btn-ghost px-4 py-2 rounded-lg text-sm">
                    {s.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#00E5FF]/5 via-[#0E1420] to-[#7B61FF]/5 border border-[#1A2235] rounded-3xl p-10 md:p-14 text-center">
          <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">Coming Soon</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text-warm mb-4">
            Flowdoma Complete Bundle
          </h2>
          <p className="text-[#8896A7] max-w-md mx-auto mb-8">
            All digital products, templates, and automation workflows in one bundle at a massive discount. Join the waitlist.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#0E1420] border border-[#1A2235] rounded-xl px-5 py-3 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
            />
            <button type="submit" className="btn-primary px-6 py-3 rounded-xl text-sm">
              <span>Notify Me</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
