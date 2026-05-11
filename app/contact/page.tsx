"use client";
const contactOptions = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
      </svg>
    ),
    title: "Free Automation Audit",
    desc: "60-minute session reviewing your workflows and identifying automation opportunities. No strings attached.",
    cta: "Book Free Session",
    highlight: true,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
    title: "General Enquiry",
    desc: "Questions about products, services, or anything else — drop us a message and we'll get back within 24 hours.",
    cta: "Send Message",
    highlight: false,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
      </svg>
    ),
    title: "Custom Project",
    desc: "Need a custom automation setup, GHL system, or website? Tell us about your project and we'll send a quote.",
    cta: "Get a Quote",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long does an automation audit take?",
    a: "The audit itself is 60 minutes. You'll receive a written action plan within 24 hours of the session.",
  },
  {
    q: "Do I need technical skills to use your products?",
    a: "No. All our digital products are designed for non-technical business owners. We provide step-by-step guides with every product.",
  },
  {
    q: "What tools do you use for automation setups?",
    a: "We primarily use Make.com, Zapier, GoHighLevel, Notion, and Google Workspace — chosen based on your existing stack and budget.",
  },
  {
    q: "Can I get a refund on digital products?",
    a: "Due to the nature of digital products, we don't offer refunds. However, if you're unhappy with a purchase, contact us and we'll make it right.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 hero-glow border-b border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold gradient-text-warm mb-4">
            Let's talk automation
          </h1>
          <p className="text-[#8896A7] text-lg max-w-xl mx-auto">
            Whether you have a question, need a quote, or want a free audit — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactOptions.map((c) => (
            <div
              key={c.title}
              className={`card-hover rounded-2xl p-8 flex flex-col ${
                c.highlight
                  ? "animated-border"
                  : "bg-[#0E1420] border border-[#1A2235]"
              }`}
            >
              {c.highlight && (
                <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase mb-4 block">⭐ Recommended</span>
              )}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-[#7B61FF]/10 border border-[#1A2235] flex items-center justify-center text-[#00E5FF] mb-5">
                {c.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-[#E2E8F0] mb-3">{c.title}</h3>
              <p className="text-[#8896A7] text-sm leading-relaxed flex-1 mb-6">{c.desc}</p>
              <button className={c.highlight ? "btn-primary px-5 py-3 rounded-xl text-sm w-full" : "btn-ghost px-5 py-3 rounded-xl text-sm w-full"}>
                <span>{c.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#7B61FF] font-mono text-xs tracking-widest uppercase mb-4">Send a Message</p>
            <h2 className="font-display text-3xl font-bold gradient-text-warm mb-4">
              Tell us what you need
            </h2>
            <p className="text-[#8896A7] mb-8 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours. Be as specific as possible about your business and goals.
            </p>

            {/* Social links */}
            <div className="space-y-3">
              {[
                { label: "LinkedIn", handle: "@flowdoma", href: "https://linkedin.com" },
                { label: "Instagram", handle: "@flowdoma", href: "https://instagram.com" },
                { label: "TikTok", handle: "@flowdoma", href: "https://tiktok.com" },
                { label: "Email", handle: "hello@flowdoma.com", href: "mailto:hello@flowdoma.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[#8896A7] hover:text-[#00E5FF] transition-colors group"
                >
                  <span className="text-xs font-mono text-[#4A5568] w-16">{s.label}</span>
                  <span className="text-sm group-hover:text-[#00E5FF] transition-colors">{s.handle}</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-[#8896A7] uppercase tracking-wider mb-2 block">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-[#0E1420] border border-[#1A2235] rounded-xl px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-[#8896A7] uppercase tracking-wider mb-2 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-[#0E1420] border border-[#1A2235] rounded-xl px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8896A7] uppercase tracking-wider mb-2 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#0E1420] border border-[#1A2235] rounded-xl px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#8896A7] uppercase tracking-wider mb-2 block">What do you need?</label>
              <select className="w-full bg-[#0E1420] border border-[#1A2235] rounded-xl px-4 py-3 text-sm text-[#8896A7] focus:outline-none focus:border-[#00E5FF]/50 transition-colors appearance-none">
                <option value="">Select an option</option>
                <option value="audit">Free Automation Audit</option>
                <option value="automation">Automation Setup Service</option>
                <option value="website">Website Build</option>
                <option value="ghl">GoHighLevel / CRM Setup</option>
                <option value="product">Question about a product</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8896A7] uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your business and what you're trying to achieve..."
                className="w-full bg-[#0E1420] border border-[#1A2235] rounded-xl px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/50 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-4 rounded-xl text-sm">
              <span>Send Message →</span>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0E1420]/30 border-t border-[#1A2235]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold gradient-text-warm">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-[#080B11] border border-[#1A2235] rounded-2xl p-6">
                <h3 className="font-display font-semibold text-[#E2E8F0] mb-2">{f.q}</h3>
                <p className="text-[#8896A7] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
