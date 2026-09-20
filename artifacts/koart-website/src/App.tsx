import { type FormEvent, type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Linkedin,
  Menu,
  MessageCircle,
  MousePointer2,
  PenTool,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type FormState = {
  name: string;
  businessName: string;
  businessType: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  businessName: '',
  businessType: '',
  service: '',
  message: '',
};

const serviceLinks = [
  { label: 'KOart Build', href: '#build' },
  { label: 'KOart Studio', href: '#studio' },
  { label: 'Who we serve', href: '#fit' },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#top"
      data-testid="link-logo"
      className={`group inline-flex items-center gap-1 ${inverse ? 'text-[#f7f2eb]' : 'text-[#171717]'}`}
    >
      <img src="/koart-logo.png" alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
      <span className="font-display text-[1.7rem] font-semibold leading-none tracking-[-0.07em]">art</span>
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="koart-shell grain text-[#171717]">
      <header className="nav-blur fixed left-0 right-0 top-0 z-40 border-b border-[#171717]/10">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replaceAll(' ', '-')}`}
                className="text-[13px] font-semibold tracking-wide text-[#171717]/65 transition-colors hover:text-[#171717]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="link-nav-contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-[13px] font-semibold text-[#f7f2eb] transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            data-testid="button-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#171717]/20 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#171717]/10 bg-[#f7f2eb] px-5 pb-5 pt-3 md:hidden">
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                data-testid={`link-mobile-${link.label.toLowerCase().replaceAll(' ', '-')}`}
                className="block border-b border-[#171717]/10 py-3 text-sm font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              data-testid="link-mobile-contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#171717] px-4 py-3 text-sm font-semibold text-[#f7f2eb]"
            >
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#171717] pb-16 pt-[132px] text-[#f7f2eb] md:pb-24 md:pt-[170px]">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#db0031]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div>
              <div className="reveal-up mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.19em] text-[#db0031]">
                <span className="h-2 w-2 rounded-full bg-[#db0031]" />
                Digital solutions, made in Sri Lanka
              </div>
              <h1 className="font-display reveal-up reveal-delay-1 max-w-[750px] text-[clamp(3.7rem,8.5vw,8.3rem)] font-semibold leading-[.86]">
                The business
                <span className="block text-[#db0031]">behind the</span>
                business.
              </h1>
              <p className="reveal-up reveal-delay-2 mt-9 max-w-[500px] text-[17px] leading-7 text-[#f7f2eb]/68 sm:text-[19px]">
                KOart is the one team for businesses ready to look sharper, work smarter, and grow without juggling five different vendors.
              </p>
              <div className="reveal-up reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  data-testid="button-hero-quote"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#db0031] px-5 py-3.5 text-sm font-bold text-[#171717] transition-transform hover:-translate-y-1"
                >
                  Tell us what you’re building
                  <ArrowUpRight size={17} className="magnetic-arrow" />
                </a>
                <a
                  href="#services"
                  data-testid="link-hero-services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f7f2eb]/25 px-5 py-3.5 text-sm font-semibold text-[#f7f2eb] transition-colors hover:border-[#db0031] hover:text-[#db0031]"
                >
                  See the full solution <ArrowDownRight size={16} />
                </a>
              </div>
            </div>

              <div className="relative mx-auto min-h-[540px] w-full max-w-[490px] lg:min-h-[500px]">
                <div className="absolute right-0 top-2 w-[86%] rounded-[22px] border border-[#f7f2eb]/15 bg-[#262626] p-4 shadow-2xl shadow-black/20 float-card">
                  <div className="mb-4 flex items-center justify-between border-b border-[#f7f2eb]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#db0031]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#f7f2eb]/50">koart / why us</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#db0031]">START HERE</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="rounded-xl bg-[#171717] p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck size={17} className="shrink-0 text-[#db0031]" />
                          <span className="text-[12px] font-semibold text-[#f7f2eb]/90">One team. Less juggling.</span>
                        </div>
                        <span className="font-mono text-[9px] text-[#f7f2eb]/35">01</span>
                      </div>
                      <p className="mt-2 text-[11px] leading-4 text-[#f7f2eb]/50">Build, content, and growth thinking in one room.</p>
                    </div>
                    <div className="rounded-xl bg-[#171717] p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Sparkles size={17} className="shrink-0 text-[#db0031]" />
                          <span className="text-[12px] font-semibold text-[#f7f2eb]/90">Start small. Move clearly.</span>
                        </div>
                        <span className="font-mono text-[9px] text-[#f7f2eb]/35">02</span>
                      </div>
                      <p className="mt-2 text-[11px] leading-4 text-[#f7f2eb]/50">A practical first step, without agency theatre.</p>
                    </div>
                    <div className="rounded-xl bg-[#171717] p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Globe2 size={17} className="shrink-0 text-[#db0031]" />
                          <span className="text-[12px] font-semibold text-[#f7f2eb]/90">Made for your next chapter.</span>
                        </div>
                        <span className="font-mono text-[9px] text-[#f7f2eb]/35">03</span>
                      </div>
                      <p className="mt-2 text-[11px] leading-4 text-[#f7f2eb]/50">Useful work that fits how your business runs.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f7f2eb]/40">
                    <Check size={13} className="text-[#db0031]" />
                    Clarity before complexity
                  </div>
                </div>
                <div className="absolute left-0 top-[355px] w-[74%] rounded-[20px] bg-[#db0031] p-5 text-[#171717] shadow-xl shadow-black/20 lg:bottom-5 lg:top-auto lg:w-[62%]">
                  <div className="mb-7 flex items-start justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Starting with<br />17 LKR</span>
                    <Sparkles size={22} />
                  </div>
                  <p className="font-display text-2xl font-semibold leading-none">A clear first move.<br />A better partner.</p>
                </div>
              <div className="absolute bottom-0 right-1 rounded-full border border-[#db0031]/50 bg-[#171717] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-[#db0031]">
                Built for momentum →
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap items-center gap-x-9 gap-y-3 border-t border-[#f7f2eb]/15 pt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f7f2eb]/45">
            <span>For the owner-operator</span>
            <span className="h-1 w-1 rounded-full bg-[#db0031]" />
            <span>For the small team</span>
            <span className="h-1 w-1 rounded-full bg-[#db0031]" />
            <span>For the next chapter</span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-[#171717]/10 bg-[#d2d0cd] py-4">
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-8 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#171717]">
          <span>Build better</span><span>+</span><span>Tell your story</span><span>+</span><span>Automate the ordinary</span><span>+</span><span>Grow with clarity</span><span>+</span>
          <span>Build better</span><span>+</span><span>Tell your story</span><span>+</span><span>Automate the ordinary</span><span>+</span>
        </div>
      </div>

      <section id="services" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#db0031]">01 / The full solution</div>
            <h2 className="font-display max-w-[460px] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[.9]">Stop stitching it together.</h2>
            <p className="mt-7 max-w-[370px] text-[16px] leading-7 text-[#171717]/65">
              You do not need another supplier who only sees one piece. You need someone who can connect the pieces — and make them pull in the same direction.
            </p>
            <a href="#contact" data-testid="link-services-cta" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold underline decoration-[#db0031] decoration-2 underline-offset-4">
              Let’s find your next move <ArrowUpRight size={16} className="magnetic-arrow" />
            </a>
          </div>
          <div className="space-y-5">
            <ServiceCard
              id="build"
              number="01"
              eyebrow="Digital foundations"
              title="KOart Build"
              description="The website, systems, and automations that make your business easier to find, trust, and run."
              accent="lime"
              icon={<Code2 size={28} strokeWidth={1.6} />}
              items={['Websites & landing pages', 'Business systems & integrations', 'Lead capture & workflow automation', 'Ongoing improvements']}
            />
            <ServiceCard
              id="studio"
              number="02"
              eyebrow="Attention & connection"
              title="KOart Studio"
              description="The content and social presence that makes the right people stop, understand, and remember you."
              accent="coral"
              icon={<PenTool size={28} strokeWidth={1.6} />}
              items={['Brand direction & visual identity', 'Social media content', 'Campaign concepts & creative', 'Content calendars & management']}
            />
          </div>
        </div>
      </section>

      <section id="fit" className="border-y border-[#171717]/10 bg-[#e9e1d5]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-32">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#db0031]">02 / Built around you</div>
              <h2 className="font-display max-w-[700px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[.86]">Your business has a shape.<br /><span className="text-[#707070]">We work with it.</span></h2>
            </div>
            <p className="max-w-[280px] text-sm leading-6 text-[#171717]/60">Different stage. Different pressure. Same need for good people who get to the point.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <AudienceCard number="A" title="Single-owner businesses" copy="You are the strategist, sales team, and customer support. Get a partner who gives your business the polish it deserves — without the agency theatre." icon={<MousePointer2 size={21} />} />
            <AudienceCard number="B" title="Small businesses" copy="The next stage needs better systems and a clearer voice. We turn scattered efforts into a presence your whole team can use." icon={<Layers3 size={21} />} />
            <AudienceCard number="C" title="Growing SMBs" copy="You have traction. Now you need a digital partner who can keep up, connect the dots, and help you scale what is working." icon={<BarChart3 size={21} />} />
          </div>
        </div>
      </section>

      <section className="bg-[#171717] text-[#f7f2eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#db0031]">03 / How we work</div>
              <h2 className="font-display max-w-[470px] text-[clamp(3rem,5.8vw,6.4rem)] font-semibold leading-[.86]">Clear thinking.<br /><span className="text-[#db0031]">Useful output.</span></h2>
              <p className="mt-7 max-w-[390px] text-base leading-7 text-[#f7f2eb]/60">No mystery process. No disappearing after launch. Just the right work, in the right order, with a team that talks like humans.</p>
            </div>
            <div className="divide-y divide-[#f7f2eb]/15 border-y border-[#f7f2eb]/15">
              <ProcessRow step="01" title="Get clear" copy="We learn the business, the bottleneck, and what a win actually looks like." icon={<MessageCircle size={20} />} />
              <ProcessRow step="02" title="Make the move" copy="We build the useful thing first — a sharper presence, a smoother workflow, or both." icon={<Workflow size={20} />} />
              <ProcessRow step="03" title="Keep it moving" copy="You get a partner to iterate with, not a handover deck and a polite goodbye." icon={<ArrowUpRight size={20} />} />
            </div>
          </div>
          <div className="mt-24 grid gap-8 border-t border-[#f7f2eb]/15 pt-8 sm:grid-cols-3">
            <Stat value="01" label="team for build + studio" />
            <Stat value="100%" label="focused on useful outcomes" />
            <Stat value="LK" label="Sri Lankan, globally minded" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 md:py-36">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#db0031]">04 / The useful difference</div>
            <h2 className="font-display max-w-[650px] text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[.88]">More than a pretty<br /><span className="text-[#707070]">front door.</span></h2>
          </div>
          <div className="hidden h-14 w-14 place-items-center rounded-full border border-[#171717]/20 md:grid"><ArrowDownRight size={20} /></div>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          <InsightCard className="md:col-span-7" icon={<Globe2 />} title="Look credible from the first click." copy="A digital presence that sounds like you, answers the real questions, and makes a good first impression work harder." tone="blue" />
          <InsightCard className="md:col-span-5" icon={<Bot />} title="Let the busywork run itself." copy="Small automations that give you time back, without turning your business into a science project." tone="lime" />
          <InsightCard className="md:col-span-5" icon={<ShieldCheck />} title="Make decisions with less guesswork." copy="Connect the touchpoints, see what is landing, and know where your next best move is." tone="coral" />
          <div className="flex min-h-[240px] flex-col justify-between rounded-[26px] bg-[#171717] p-7 text-[#f7f2eb] md:col-span-7 md:p-9">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#db0031]">The KOart principle</span>
              <Sparkles size={22} className="text-[#db0031]" />
            </div>
            <p className="font-display max-w-[560px] text-[clamp(1.7rem,3vw,3rem)] font-medium leading-[.95]">Good digital work should make the next day feel a little lighter.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#e9e1d5]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#171717]/65">05 / Start here</div>
            <h2 className="font-display max-w-[540px] text-[clamp(3.6rem,7vw,7.3rem)] font-semibold leading-[.82]">Tell us what’s on your mind.</h2>
            <p className="mt-8 max-w-[410px] text-[17px] leading-7 text-[#171717]/72">A new website, a better workflow, a content reset — or just a conversation about what is not working yet. We will meet you there.</p>
            <div className="mt-12 flex items-center gap-3 text-sm font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#171717] text-[#db0031]"><Send size={16} /></span>
              <span>Usually reply within two business days.</span>
            </div>
          </div>
          <div className="rounded-[26px] bg-[#f7f2eb] p-6 shadow-xl shadow-[#171717]/10 sm:p-9">
            {submitted ? (
              <div className="flex min-h-[470px] flex-col justify-between">
                <div>
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#db0031]"><Check size={27} /></div>
                  <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#707070]">Message received</p>
                  <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.9]">That’s a good place to start.</h3>
                  <p className="mt-6 max-w-[390px] leading-7 text-[#171717]/65">Thanks for reaching out, {form.name.split(' ')[0] || 'there'}. Your note is safely with us. We will be in touch shortly.</p>
                </div>
                <button type="button" data-testid="button-send-another" onClick={() => { setSubmitted(false); setForm(initialForm); }} className="inline-flex w-fit items-center gap-2 text-sm font-bold underline decoration-[#db0031] decoration-2 underline-offset-4">
                  Send another message <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" value={form.name} onChange={(value) => updateField('name', value)} required />
                  <Field label="Business name" name="businessName" value={form.businessName} onChange={(value) => updateField('businessName', value)} required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField label="Business type" name="businessType" value={form.businessType} onChange={(value) => updateField('businessType', value)} options={['Single-owner business', 'Small business', 'Growing SMB', 'Other']} />
                  <SelectField label="I’m interested in" name="service" value={form.service} onChange={(value) => updateField('service', value)} options={['KOart Build', 'KOart Studio', 'Build + Studio', 'Not sure yet']} />
                </div>
                <label className="block">
                  <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.1em] text-[#171717]/55">A little about the project <span className="text-[#db0031]">*</span></span>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    data-testid="input-message"
                    rows={5}
                    placeholder="What are you hoping to improve or build?"
                    className="w-full resize-none rounded-xl border border-[#171717]/15 bg-[#e9e1d5]/45 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-[#171717]/35 focus:border-[#171717]"
                  />
                </label>
                <button type="submit" data-testid="button-submit-quote" className="group flex w-full items-center justify-between rounded-xl bg-[#171717] px-5 py-4 text-left text-sm font-bold text-[#f7f2eb] transition-transform hover:-translate-y-0.5">
                  Send my enquiry <ArrowUpRight size={19} className="magnetic-arrow text-[#db0031]" />
                </button>
                <p className="text-center text-[11px] leading-5 text-[#171717]/45">No hard sell. No mailing list. Just a useful first conversation.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#171717] text-[#f7f2eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 md:py-16">
          <div className="flex flex-col justify-between gap-10 border-b border-[#f7f2eb]/15 pb-12 md:flex-row md:items-end">
            <div>
              <Logo inverse />
              <p className="mt-5 max-w-[270px] text-sm leading-6 text-[#f7f2eb]/55">One team for the digital work that keeps your business moving.</p>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#f7f2eb]/65">
              <a href="#build" data-testid="link-footer-build" className="transition-colors hover:text-[#db0031]">KOart Build</a>
              <a href="#studio" data-testid="link-footer-studio" className="transition-colors hover:text-[#db0031]">KOart Studio</a>
              <a href="#contact" data-testid="link-footer-contact" className="transition-colors hover:text-[#db0031]">Get in touch</a>
              <a href="#top" data-testid="link-footer-top" className="transition-colors hover:text-[#db0031]">Back to top ↑</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-[11px] uppercase tracking-[0.13em] text-[#f7f2eb]/35 sm:flex-row">
            <span>Websites starting from LKR 19,000</span>
            <span>© {new Date().getFullYear()} KOart Digital Solutions</span>
            <span className="inline-flex items-center gap-2"><Linkedin size={13} /> Colombo / Sri Lanka</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, name, value, onChange, required = false }: { label: string; name: string; value: string; onChange: (value: string) => void; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.1em] text-[#171717]/55">{label} {required && <span className="text-[#db0031]">*</span>}</span>
      <input required={required} name={name} value={value} onChange={(event) => onChange(event.target.value)} data-testid={`input-${name}`} className="w-full rounded-xl border border-[#171717]/15 bg-[#e9e1d5]/45 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-[#171717]/35 focus:border-[#171717]" />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }: { label: string; name: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="relative block">
      <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.1em] text-[#171717]/55">{label} <span className="text-[#db0031]">*</span></span>
      <select required name={name} value={value} onChange={(event) => onChange(event.target.value)} data-testid={`select-${name}`} className="w-full appearance-none rounded-xl border border-[#171717]/15 bg-[#e9e1d5]/45 px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#171717]">
        <option value="" disabled>Select one</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute bottom-3.5 right-4 text-[#171717]/50" />
    </label>
  );
}

function ServiceCard({ id, number, eyebrow, title, description, accent, icon, items }: { id: string; number: string; eyebrow: string; title: string; description: string; accent: 'lime' | 'coral'; icon: ReactNode; items: string[] }) {
  const isLime = accent === 'lime';
  return (
    <article id={id} className={`service-card group rounded-[26px] border p-7 sm:p-9 ${isLime ? 'border-[#db0031] bg-[#db0031] text-[#f7f2eb]' : 'border-[#171717]/10 bg-[#171717] text-[#f7f2eb]'}`}>
      <div className="flex items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl ${isLime ? 'bg-[#171717] text-[#db0031]' : 'bg-[#db0031] text-[#171717]'}`}>{icon}</div>
        <span className={`font-mono text-[11px] font-bold ${isLime ? 'text-[#171717]/55' : 'text-[#f7f2eb]/45'}`}>{number}</span>
      </div>
      <div className="mt-16 grid gap-9 md:grid-cols-[.8fr_1.2fr] md:items-end">
        <div>
          <p className={`mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${isLime ? 'text-[#f7f2eb]/65' : 'text-[#db0031]'}`}>{eyebrow}</p>
          <h3 className="font-display text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[.85]">{title}</h3>
        </div>
        <div>
          <p className={`max-w-[370px] text-[15px] leading-6 ${isLime ? 'text-[#f7f2eb]/80' : 'text-[#f7f2eb]/65'}`}>{description}</p>
          <ul className="mt-7 grid gap-2.5">
            {items.map((item) => <li key={item} className={`flex items-center gap-2 text-[13px] font-semibold ${isLime ? 'text-[#f7f2eb]' : ''}`}><Check size={14} className={isLime ? 'text-[#f7f2eb]' : 'text-[#db0031]'} />{item}</li>)}
          </ul>
        </div>
      </div>
      <div className={`mt-10 flex items-center gap-2 text-[12px] font-bold ${isLime ? 'text-[#f7f2eb]' : 'text-[#db0031]'}`}>Explore this lane <ArrowUpRight size={15} className="magnetic-arrow" /></div>
    </article>
  );
}

function AudienceCard({ number, title, copy, icon }: { number: string; title: string; copy: string; icon: ReactNode }) {
  return (
    <article className="group min-h-[310px] rounded-[22px] border border-[#171717]/12 bg-[#f7f2eb] p-7 transition-transform hover:-translate-y-1.5 sm:p-8">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] font-bold text-[#db0031]">{number}</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#db0031] text-[#171717]">{icon}</span>
      </div>
      <div className="mt-20">
        <h3 className="font-display text-[2rem] font-semibold leading-[.9]">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#171717]/60">{copy}</p>
      </div>
    </article>
  );
}

function ProcessRow({ step, title, copy, icon }: { step: string; title: string; copy: string; icon: ReactNode }) {
  return (
    <div className="group grid gap-4 py-7 sm:grid-cols-[55px_1fr_36px] sm:items-center">
      <span className="font-mono text-[11px] text-[#f7f2eb]/35">{step}</span>
      <div>
        <h3 className="font-display text-3xl font-medium leading-none text-[#f7f2eb]">{title}</h3>
        <p className="mt-3 max-w-[450px] text-sm leading-6 text-[#f7f2eb]/55">{copy}</p>
      </div>
      <span className="hidden text-[#db0031] transition-transform group-hover:translate-x-1 sm:block">{icon}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[2.9rem] font-semibold leading-none text-[#db0031]">{value}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#f7f2eb]/45">{label}</div>
    </div>
  );
}

function InsightCard({ className, icon, title, copy, tone }: { className?: string; icon: ReactNode; title: string; copy: string; tone: 'blue' | 'lime' | 'coral' }) {
  const toneClass = tone === 'blue' ? 'bg-[#d2d0cd]' : tone === 'lime' ? 'bg-[#e9e1d5]' : 'bg-[#f7f2eb]';
  return (
    <article className={`group flex min-h-[240px] flex-col justify-between rounded-[26px] border border-[#171717]/10 p-7 transition-transform hover:-translate-y-1.5 md:p-9 ${toneClass} ${className ?? ''}`}>
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#171717] text-[#f7f2eb]">{icon}</span>
        <ArrowUpRight size={20} className="text-[#171717]/60 transition-transform group-hover:translate-x-1" />
      </div>
      <div>
        <h3 className="font-display max-w-[470px] text-[2rem] font-semibold leading-[.9]">{title}</h3>
        <p className="mt-4 max-w-[510px] text-sm leading-6 text-[#171717]/68">{copy}</p>
      </div>
    </article>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;