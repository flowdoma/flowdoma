import Link from "next/link";

const values = [
  {
    icon: "⚡",
    title: "Automation First",
    desc: "We believe every repetitive task is a tax on your time. Our mission is to eliminate that tax with smart automation.",
  },
  {
    icon: "🎯",
    title: "Built for Real Businesses",
    desc: "Not theory — everything we sell is battle-tested on real businesses with real results.",
  },
  {
    icon: "🚀",
    title: "Grow Without Hiring",
    desc: "The right tools and systems let a solo operator compete with a team of ten. That's the Flowdoma promise.",
  },
  {
    icon: "🔗",
    title: "Connected Ecosystem",
    desc: "Our tools work together — prompts feed your templates, templates power your automations, automations run your business.",
  },
];

const timeline = [
  { year: "2024", event: "Flowdoma founded with a simple mission: make AI and automation accessible to every small business owner." },
  { year: "2025", event: "Launched first digital products — AI prompt packs and Notion templates — helping 100+ businesses automate their workflows." },
  { year: "2026", event: "Expanding into GoHighLevel systems, website services, and a full business automation platform." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 hero-glow border-b border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text-warm leading-tight mb-6">
              We automate the work so you can focus on growth
            </h1>
            <p className="text-[#8896A7] text-lg leading-relaxed">
              Flowdoma was built by operators for operators. We got tired of watching talented freelancers, creators, and small business owners drown in manual tasks that should have been automated years ago.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#7B61FF] font-mono text-xs tracking-widest uppercase mb-4">Our Mission</p>
            <h2 className="font-display text-4xl font-bold gradient-text-warm mb-6">
              Level the playing field for small businesses
            </h2>
            <p className="text-[#8896A7] leading-relaxed mb-4">
              Large enterprises spend millions on software systems, automation infrastructure, and dedicated teams to manage it all. Small businesses and solopreneurs get left behind — not because they lack ambition, but because they lack access.
            </p>
            <p className="text-[#8896A7] leading-relaxed mb-8">
              Flowdoma closes that gap. We build and curate the tools, templates, and systems that let a one-person business run like a well-oiled machine — at a fraction of the cost.
            </p>
            <Link href="/products" className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              <span>See Our Products</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Stats card */}
          <div className="animated-border rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Digital Products" },
                { value: "500+", label: "AI Prompts" },
                { value: "8+", label: "Automation Templates" },
                { value: "3", label: "Service Categories" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-[#080B11]/50 rounded-2xl">
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-[#8896A7] text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0E1420]/30 border-y border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold gradient-text-warm">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-hover bg-[#080B11] border border-[#1A2235] rounded-2xl p-6 text-center">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-[#E2E8F0] mb-3">{v.title}</h3>
                <p className="text-[#8896A7] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7B61FF] font-mono text-xs tracking-widest uppercase mb-4">Our Journey</p>
            <h2 className="font-display text-4xl font-bold gradient-text-warm">How we got here</h2>
          </div>
          <div className="space-y-8 relative">
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF]/30 via-[#7B61FF]/20 to-transparent" />
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 to-[#7B61FF]/10 border border-[#1A2235] flex items-center justify-center shrink-0 relative z-10">
                  <span className="font-mono text-xs font-bold text-[#00E5FF]">{t.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-[#8896A7] leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="animated-border rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold gradient-text-warm mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-[#8896A7] max-w-md mx-auto mb-8">
            Start with a free automation audit and discover exactly where you're losing time every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 justify-center">
              <span>Book Free Audit</span>
            </Link>
            <Link href="/products" className="btn-ghost px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 justify-center">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
