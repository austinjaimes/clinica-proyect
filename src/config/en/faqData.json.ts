import { type FaqItem } from "../types/configDataTypes";

// Datos de FAQ para clínica de rehabilitación
export const faqData: FaqItem[] = [
	{
		question: "¿Qué servicios ofrece la clínica?",
		answer: `Ofrecemos fisioterapia, rehabilitación post-quirúrgica, terapia ocupacional, tratamientos de dolor crónico y programas de ejercicio personalizado. 
		Todos nuestros planes se adaptan a las necesidades de cada paciente para una recuperación óptima.`,
	},
	{
		question: "¿Necesito cita previa para ser atendido?",
		answer: `Sí, recomendamos agendar una cita para poder brindarte atención personalizada y preparar tu plan de tratamiento con antelación. 
		Puedes agendar tu cita por teléfono, WhatsApp o mediante nuestro formulario en línea.`,
	},
	{
		question: "¿La clínica atiende seguros médicos?",
		answer: `Sí, trabajamos con varias aseguradoras. Por favor consulta con nuestro personal qué seguros aceptamos y cómo realizar el trámite para tu tratamiento.`,
	},
	{
		question: "¿Cuánto tiempo duran las sesiones de rehabilitación?",
		answer: `Cada sesión dura entre 45 y 60 minutos, dependiendo del tipo de tratamiento y la condición del paciente. 
		Se realiza una evaluación inicial para determinar la frecuencia y duración recomendada.`,
	},
	{
		question: "¿Puedo recibir un plan de ejercicios para casa?",
		answer: `Sí, nuestros terapeutas pueden elaborar un plan de ejercicios personalizado para continuar tu recuperación en casa, 
		asegurando que avances de manera segura y efectiva entre sesiones.`,
	},
	{
		question: "¿Qué medidas de higiene y seguridad siguen en la clínica?",
		answer: `Contamos con protocolos estrictos de limpieza y desinfección de todas las áreas, uso obligatorio de cubrebocas para el personal y pacientes, 
		y disponibilidad de gel antibacterial. La seguridad y bienestar de nuestros pacientes es nuestra prioridad.`,
	},
];

export default faqData;
