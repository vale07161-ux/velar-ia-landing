import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  Dumbbell,
  Gavel,
  Home,
  Loader2,
  MessageCircle,
  RefreshCw,
  Send,
  Sparkles,
  Stethoscope,
  Utensils,
  Workflow,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const WEBHOOK_URL = 'https://formsubmit.co/ajax/vale07161@gmail.com';
const CONTACT_EMAIL = 'vale07161@gmail.com';
const WHATSAPP_PHONE = '543813445475';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hola%20Velar%20IA,%20quiero%20automatizar%20mi%20negocio`;

const benefits = [
  [MessageCircle, 'WhatsApp que responde solo', 'Atencion inmediata, preguntas frecuentes, calificacion y derivacion al equipo correcto sin perder oportunidades.'],
  [Bot, 'IA atendiendo clientes', 'Conversaciones naturales, contexto comercial y respuestas consistentes incluso fuera del horario laboral.'],
  [RefreshCw, 'Recuperacion de leads', 'Seguimientos automaticos para interesados que no contestaron, pidieron precio o abandonaron una conversacion.'],
  [Workflow, 'Procesos sin friccion', 'Automatizamos tareas repetitivas, avisos internos, formularios, CRM y reportes para ordenar la operacion.'],
  [ArrowUpRight, 'Mas ventas', 'Menos demora en responder, mejor seguimiento y mayor conversion desde cada consulta que ya estas generando.'],
  [Zap, 'Menos trabajo manual', 'Tu equipo deja de copiar datos, perseguir clientes y contestar lo mismo todos los dias.'],
];

const cases = [
  [Stethoscope, 'Clinicas', 'Turnos por WhatsApp, recordatorios, reprogramaciones y pre-calificacion de pacientes.'],
  [Gavel, 'Abogados', 'Filtro de consultas, recopilacion de datos, seguimiento y agenda de reuniones con potenciales clientes.'],
  [Home, 'Inmobiliarias', 'Respuesta instantanea por propiedad, envio de fichas, calificacion y coordinacion de visitas.'],
  [Utensils, 'Restaurantes', 'Reservas, confirmaciones, consultas frecuentes, promociones y recuperacion de clientes frecuentes.'],
  [Dumbbell, 'Gimnasios', 'Captura de interesados, planes, prueba gratis, vencimientos y reactivacion de socios.'],
  [Building2, 'Concesionarias', 'Calificacion de compradores, financiacion, seguimiento por modelo y agenda de test drives.'],
];

const steps = [
  [Activity, 'Analizamos', 'Mapeamos donde se pierden clientes, que tareas se repiten y que datos necesita tu equipo para vender mejor.'],
  [Sparkles, 'Automatizamos', 'Disenamos flujos con IA, WhatsApp, formularios, CRM y alertas internas conectadas a tu operacion real.'],
  [ArrowUpRight, 'Escalamos', 'Medimos conversaciones, conversiones y cuellos de botella para optimizar el sistema cada semana.'],
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(140,255,0,.16),transparent_34%),linear-gradient(180deg,#050805_0%,#070B07_54%,#030503_100%)]" />
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
      <a href={WHATSAPP_URL} aria-label="Contactar por WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-lime-300/30 bg-lime-400 text-black shadow-glow-strong transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
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
        <a href="#auditoria" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-black shadow-glow">
          Agendar auditoria <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="Velar IA">
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-lime-400/25 bg-lime-400/[0.08] text-base font-black text-lime-300 shadow-glow">V</span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold uppercase tracking-[0.28em]">Velar</span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-[0.42em] text-lime-300">IA</span>
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section className="relative z-10 min-h-screen px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.06] px-4 py-2 text-sm text-lime-300 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_18px_rgba(140,255,0,.9)]" />
            Automatizacion IA para equipos que venden
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            Automatizamos tu negocio con IA para que vendas mas.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            Respondemos consultas, recuperamos leads y ordenamos procesos comerciales para que tu equipo trabaje menos y cierre mas oportunidades.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#auditoria" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 font-bold text-black shadow-glow-strong">
              Agendar auditoria <ArrowRight className="h-5 w-5" />
            </a>
            <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 font-semibold text-white">
              <MessageCircle className="h-5 w-5" /> Hablar por WhatsApp
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

function DashboardMockup() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative">
      <div className="absolute -inset-8 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="relative rounded-lg border border-lime-400/18 bg-[#071007]/85 p-4 shadow-glow-strong backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-sm text-white/45">Velar IA Command</p>
            <p className="mt-1 font-semibold">Pipeline automatico</p>
          </div>
          <span className="rounded-full border border-lime-400/20 bg-lime-400/[0.08] px-3 py-1 text-xs font-semibold text-lime-300">LIVE</span>
        </div>
        <div className="grid gap-4 py-4 sm:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-md border border-white/8 bg-black/30 p-4">
            <p className="text-sm text-white/55">Conversaciones hoy</p>
            <p className="mt-5 text-5xl font-semibold">148</p>
            <p className="mt-2 text-sm text-lime-300">+32% vs. semana anterior</p>
            <div className="mt-7 flex h-28 items-end gap-2 rounded border border-lime-400/12 bg-lime-400/[0.06] p-3">
              {[34, 58, 42, 70, 52, 84, 76].map((height, index) => (
                <span key={index} style={{ height }} className="w-full rounded-sm bg-lime-400/80 shadow-[0_0_18px_rgba(140,255,0,.25)]" />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {['Lead nuevo', 'IA respondio', 'Agenda lista'].map((title, index) => (
              <div key={title} className="rounded-md border border-white/8 bg-white/[0.035] p-4">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-white/50">{index === 0 ? 'Quiere saber disponibilidad esta semana' : index === 1 ? 'Califico presupuesto, urgencia y zona' : 'Reunion creada y enviada al equipo comercial'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-300">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Beneficios" title="Tu operacion comercial, mas rapida y mas inteligente." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, text]) => (
            <article key={title} className="rounded-lg border border-white/8 bg-white/[0.035] p-6 transition hover:border-lime-400/28">
              <Icon className="h-6 w-6 text-lime-400" />
              <h3 className="mt-7 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/58">{text}</p>
            </article>
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
        <SectionTitle eyebrow="Casos de uso" title="Automatizaciones pensadas para negocios con demanda real." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/8 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(([Icon, title, text]) => (
            <article key={title} className="bg-carbon p-7">
              <Icon className="h-6 w-6 text-lime-400" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/58">{text}</p>
            </article>
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
        <SectionTitle eyebrow="Como funciona" title="De caos operativo a sistema comercial automatizado." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map(([Icon, title, text], index) => (
            <article key={title} className="rounded-lg border border-lime-400/14 bg-gradient-to-b from-lime-400/[0.08] to-white/[0.025] p-7">
              <span className="text-sm font-semibold text-lime-300">0{index + 1}</span>
              <Icon className="mt-8 h-7 w-7 text-lime-400" />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-white/60">{text}</p>
            </article>
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
        <SectionTitle eyebrow="Casos de exito" title="Automatizaciones con impacto medible en negocios reales." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ['Clinica: +42% turnos', 'Automatizamos WhatsApp, recordatorios y recuperacion de pacientes que pedian info pero no confirmaban.'],
            ['Inmobiliaria: 31 leads recuperados', 'La IA respondio por propiedad, filtro presupuesto y aviso al vendedor cuando habia intencion real.'],
            ['Estudio: 18 h/mes ahorradas', 'Se ordenaron consultas, datos iniciales y seguimiento para que el equipo solo tome casos calificados.'],
          ].map(([metric, quote]) => (
            <article key={metric} className="rounded-lg border border-white/8 bg-white/[0.035] p-7">
              <p className="text-3xl font-semibold text-lime-300">{metric}</p>
              <p className="mt-7 text-lg leading-8 text-white/72">"{quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="auditoria" className="relative z-10 border-y border-lime-400/12 bg-[linear-gradient(135deg,rgba(140,255,0,.11),rgba(255,255,255,.025)_42%,rgba(140,255,0,.055))] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.94fr_.72fr]">
        <div className="self-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-lime-300">Auditoria sin cargo</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Cada consulta que tarda en responderse es una venta que se enfria.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Revisamos tu proceso actual y te mostramos que automatizaciones tendrian impacto inmediato en ventas, seguimiento y carga operativa.</p>
        </div>
        <QuizLeadForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', business: '', whatsapp: '', need: '' });
  const [status, setStatus] = useState('idle');

  async function submit(event) {
    event.preventDefault();
    if (!form.name || !form.business || !form.whatsapp || form.need.length < 8) {
      setStatus('error');
      return;
    }

    const lead = { ...form, source: 'Velar IA landing', submittedAt: new Date().toISOString() };
    const message = [
      'Nuevo lead desde la landing Velar IA',
      '',
      `Nombre: ${lead.name}`,
      `Negocio: ${lead.business}`,
      `WhatsApp: ${lead.whatsapp}`,
      `Necesidad: ${lead.need}`,
    ].join('\n');

    setStatus('loading');
    try {
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        });
        if (!response.ok) throw new Error('Webhook error');
      } else {
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=Nuevo lead Velar IA&body=${encodeURIComponent(message)}`;
      }

      setStatus('success');
      setForm({ name: '', business: '', whatsapp: '', need: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-white/10 bg-black/35 p-5 backdrop-blur-xl sm:p-6">
      {[
        ['name', 'Nombre', 'Tu nombre'],
        ['business', 'Negocio', 'Clinica, estudio, inmobiliaria...'],
        ['whatsapp', 'WhatsApp', '+54 9 ...'],
      ].map(([name, label, placeholder]) => (
        <label key={name} className="mb-4 block text-sm font-medium text-white/72">
          {label}
          <input value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} placeholder={placeholder} className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-lime-400/55" />
        </label>
      ))}
      <label className="block text-sm font-medium text-white/72">
        Necesidad principal
        <textarea value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })} rows="4" placeholder="Ej: recibimos consultas pero respondemos tarde y no hacemos seguimiento." className="mt-2 w-full resize-none rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-lime-400/55" />
      </label>
      <button disabled={status === 'loading'} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-4 font-bold text-black shadow-glow">
        {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {status === 'loading' ? 'Enviando...' : 'Quiero mi auditoria'}
      </button>
      {status === 'success' && <p className="mt-4 rounded-md border border-lime-400/20 bg-lime-400/[0.08] px-4 py-3 text-sm text-lime-300">Listo. Se preparo el contacto por WhatsApp y email.</p>}
      {status === 'error' && <p className="mt-4 rounded-md border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-200">Revisa los campos o el webhook. Tambien puedes escribir por WhatsApp.</p>}
    </form>
  );
}

function QuizLeadForm() {
  const [problem, setProblem] = useState('');
  const [form, setForm] = useState({ name: '', whatsapp: '' });
  const [status, setStatus] = useState('idle');

  const options = [
    'Tardamos en responder consultas',
    'No hacemos seguimiento',
    'Todo es manual y sin sistema',
  ];

  async function submit(event) {
    event.preventDefault();
    if (!problem || form.name.trim().length < 2 || form.whatsapp.trim().length < 7) {
      setStatus('error');
      return;
    }

    const lead = { ...form, problem, source: 'Velar IA landing quiz', submittedAt: new Date().toISOString() };
    setStatus('loading');
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error('Webhook error');
      setStatus('success');
      setForm({ name: '', whatsapp: '' });
      setProblem('');
    } catch {
      const message = [
        'Nuevo lead desde la landing Velar IA',
        '',
        `Problema: ${lead.problem}`,
        `Nombre: ${lead.name}`,
        `WhatsApp: ${lead.whatsapp}`,
      ].join('\n');
      window.open(`https://wa.me/543813445475?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=Nuevo lead Velar IA&body=${encodeURIComponent(message)}`;
      setStatus('success');
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-lime-400/20 bg-black/40 p-5 shadow-glow backdrop-blur-xl sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Diagnostico rapido</p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight">Cual es tu mayor problema hoy?</h3>
      <div className="mt-5 grid gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setProblem(option);
              setStatus('idle');
            }}
            className={`rounded-md border px-4 py-4 text-left font-semibold transition ${
              problem === option
                ? 'border-lime-300 bg-lime-400 text-black shadow-glow'
                : 'border-white/10 bg-white/[0.04] text-white hover:border-lime-400/45 hover:bg-lime-400/[0.08]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {problem && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 grid gap-4">
          <label className="block text-sm font-medium text-white/72">
            Nombre
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-lime-400/55" />
          </label>
          <label className="block text-sm font-medium text-white/72">
            WhatsApp
            <input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+54 9 ..." className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-lime-400/55" />
          </label>
          <button disabled={status === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-4 font-bold text-black shadow-glow transition hover:bg-lime-300">
            {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            {status === 'loading' ? 'Enviando...' : 'Quiero mi auditoria'}
          </button>
        </motion.div>
      )}

      <p className="mt-5 rounded-md border border-lime-400/20 bg-lime-400/[0.07] px-4 py-3 text-sm font-medium text-lime-300">
        Cupos limitados: tomamos solo 6 auditorias nuevas por mes para poder analizar cada negocio en profundidad.
      </p>
      {status === 'success' && <p className="mt-4 text-sm text-lime-300">Listo. Recibimos tu solicitud y te vamos a escribir por WhatsApp.</p>}
      {status === 'error' && <p className="mt-4 text-sm text-red-200">Elegi una opcion y completa nombre + WhatsApp.</p>}
    </form>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <p>Velar IA. Automatizacion, WhatsApp e inteligencia artificial para negocios.</p>
      </div>
    </footer>
  );
}

export default App;
