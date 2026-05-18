import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { benefits, process, testimonials, useCases, WHATSAPP_URL } from './data';
import { ContactForm } from './components/ContactForm';
import { DashboardMockup } from './components/DashboardMockup';
import { Logo } from './components/Logo';
import { SectionHeader } from './components/SectionHeader';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(140,255,0,.16),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(140,255,0,.08),transparent_24%),linear-gradient(180deg,#050805_0%,#070B07_54%,#030503_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <Header />
      <Hero />
      <Benefits />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-7 text-sm text-white/62 md:flex">
          <a className="transition hover:text-lime-300" href="#beneficios">Beneficios</a>
          <a className="transition hover:text-lime-300" href="#casos">Casos</a>
          <a className="transition hover:text-lime-300" href="#proceso">Proceso</a>
        </div>
        <a
          href="#auditoria"
          className="group inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400 px-4 py-2 text-sm font-semibold text-black shadow-glow transition hover:bg-lime-300"
        >
          Agendar auditoria
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 min-h-screen px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div {...fadeUp}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.06] px-4 py-2 text-sm text-lime-300 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_18px_rgba(140,255,0,.9)]" />
            Automatizacion IA para equipos que venden
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Automatizamos tu negocio con IA para que vendas mas.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/68 sm:text-xl">
            Respondemos consultas, recuperamos leads y ordenamos procesos comerciales para que tu equipo trabaje menos y cierre mas oportunidades.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#auditoria"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-base font-bold text-black shadow-glow-strong transition hover:bg-lime-300"
            >
              Agendar auditoria
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-base font-semibold text-white transition hover:border-lime-400/35 hover:text-lime-300"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 border-t border-white/8 pt-7 sm:grid-cols-3">
            {['Respuesta en segundos', 'Seguimiento automatico', 'CRM ordenado'].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-white/64">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Beneficios" title="Tu operacion comercial, mas rapida y mas inteligente." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="group rounded-lg border border-white/8 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.05)] transition hover:border-lime-400/28 hover:bg-lime-400/[0.045]"
            >
              <item.icon className="h-6 w-6 text-lime-400" />
              <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/58">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="casos" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Casos de uso" title="Automatizaciones pensadas para negocios con demanda real." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/8 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <motion.article key={item.title} {...fadeUp} className="bg-carbon p-7 transition hover:bg-[#0d150d]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-lime-400/18 bg-lime-400/[0.07]">
                  <item.icon className="h-5 w-5 text-lime-400" />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-5 leading-7 text-white/58">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="proceso" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Como funciona" title="De caos operativo a sistema comercial automatizado." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.article key={step.title} {...fadeUp} className="relative rounded-lg border border-lime-400/14 bg-gradient-to-b from-lime-400/[0.08] to-white/[0.025] p-7">
              <span className="text-sm font-semibold text-lime-300">0{index + 1}</span>
              <step.icon className="mt-8 h-7 w-7 text-lime-400" />
              <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Resultados" title="Menos demora, mas control y mejores conversaciones." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article key={item.company} {...fadeUp} className="rounded-lg border border-white/8 bg-white/[0.035] p-7">
              <p className="text-3xl font-semibold text-lime-300">{item.metric}</p>
              <p className="mt-7 min-h-28 text-lg leading-8 text-white/72">"{item.quote}"</p>
              <div className="mt-7 border-t border-white/8 pt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/45">{item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="auditoria" className="relative z-10 border-y border-lime-400/12 bg-[linear-gradient(135deg,rgba(140,255,0,.11),rgba(255,255,255,.025)_42%,rgba(140,255,0,.055))] px-5 py-24 shadow-glow sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.94fr_.72fr]">
        <motion.div {...fadeUp} className="self-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-lime-300">Auditoria sin cargo</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Cada consulta que tarda en responderse es una venta que se enfria.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Revisamos tu proceso actual y te mostramos que automatizaciones tendrian impacto inmediato en ventas, seguimiento y carga operativa.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <Logo compact />
        <p>Velar IA. Automatizacion, WhatsApp e inteligencia artificial para negocios.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-lime-300/30 bg-lime-400 text-black shadow-glow-strong transition hover:scale-105 hover:bg-lime-300"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export default App;
