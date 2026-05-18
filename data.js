import {
  Activity,
  ArrowUpRight,
  Bot,
  Building2,
  Dumbbell,
  Gavel,
  Home,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Stethoscope,
  Utensils,
  Workflow,
  Zap,
} from 'lucide-react';

export const WEBHOOK_URL = 'https://TU-WEBHOOK-AQUI.com/velar-ia';
export const WHATSAPP_URL = 'https://wa.me/549XXXXXXXXXX?text=Hola%20Velar%20IA,%20quiero%20automatizar%20mi%20negocio';

export const benefits = [
  {
    icon: MessageCircle,
    title: 'WhatsApp que responde solo',
    text: 'Atencion inmediata, preguntas frecuentes, calificacion y derivacion al equipo correcto sin perder oportunidades.',
  },
  {
    icon: Bot,
    title: 'IA atendiendo clientes',
    text: 'Conversaciones naturales, contexto comercial y respuestas consistentes incluso fuera del horario laboral.',
  },
  {
    icon: RefreshCw,
    title: 'Recuperacion de leads',
    text: 'Seguimientos automaticos para interesados que no contestaron, pidieron precio o abandonaron una conversacion.',
  },
  {
    icon: Workflow,
    title: 'Procesos sin friccion',
    text: 'Automatizamos tareas repetitivas, avisos internos, formularios, CRM y reportes para ordenar la operacion.',
  },
  {
    icon: ArrowUpRight,
    title: 'Mas ventas',
    text: 'Menos demora en responder, mejor seguimiento y mayor conversion desde cada consulta que ya estas generando.',
  },
  {
    icon: Zap,
    title: 'Menos trabajo manual',
    text: 'Tu equipo deja de copiar datos, perseguir clientes y contestar lo mismo todos los dias.',
  },
];

export const useCases = [
  {
    icon: Stethoscope,
    title: 'Clinicas',
    text: 'Turnos por WhatsApp, recordatorios, reprogramaciones y pre-calificacion de pacientes.',
  },
  {
    icon: Gavel,
    title: 'Abogados',
    text: 'Filtro de consultas, recopilacion de datos, seguimiento y agenda de reuniones con potenciales clientes.',
  },
  {
    icon: Home,
    title: 'Inmobiliarias',
    text: 'Respuesta instantanea por propiedad, envio de fichas, calificacion y coordinacion de visitas.',
  },
  {
    icon: Utensils,
    title: 'Restaurantes',
    text: 'Reservas, confirmaciones, consultas frecuentes, promociones y recuperacion de clientes frecuentes.',
  },
  {
    icon: Dumbbell,
    title: 'Gimnasios',
    text: 'Captura de interesados, planes, prueba gratis, vencimientos y reactivacion de socios.',
  },
  {
    icon: Building2,
    title: 'Concesionarias',
    text: 'Calificacion de compradores, financiacion, seguimiento por modelo y agenda de test drives.',
  },
];

export const testimonials = [
  {
    quote: 'Pasamos de responder consultas al final del dia a tener una IA filtrando y agendando en minutos.',
    name: 'Direccion comercial',
    company: 'Clinica privada',
    metric: '+38% turnos agendados',
  },
  {
    quote: 'El seguimiento automatico recupero leads que antes quedaban enterrados en WhatsApp.',
    name: 'Socio fundador',
    company: 'Estudio juridico',
    metric: '21 h/mes ahorradas',
  },
  {
    quote: 'Ordenamos el circuito completo: consulta, calificacion, visita y aviso al vendedor.',
    name: 'Gerencia',
    company: 'Inmobiliaria premium',
    metric: '2.4x mas respuestas',
  },
];

export const process = [
  {
    icon: Activity,
    title: 'Analizamos',
    text: 'Mapeamos donde se pierden clientes, que tareas se repiten y que datos necesita tu equipo para vender mejor.',
  },
  {
    icon: Sparkles,
    title: 'Automatizamos',
    text: 'Disenamos flujos con IA, WhatsApp, formularios, CRM y alertas internas conectadas a tu operacion real.',
  },
  {
    icon: ArrowUpRight,
    title: 'Escalamos',
    text: 'Medimos conversaciones, conversiones y cuellos de botella para optimizar el sistema cada semana.',
  },
];
