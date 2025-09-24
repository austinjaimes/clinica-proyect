import Aniket from "@images/testimonials/aniket_p.jpg";
import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import Connor from "@images/testimonials/connor.webp";
import Damiano from "@images/testimonials/damiano.jpg";
import David from "@images/testimonials/david-g-davedev.png";
import Geoffrey from "@images/testimonials/geoffrey.webp";

import { type TestimonialItem } from "../types/configDataTypes";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: Geoffrey,
		name: "María González",
		title: "Paciente desde 2020",
		testimonial: `Gracias a Rehabilita Sport recuperé la movilidad después de una cirugía de rodilla. 
    El trato siempre ha sido humano, cercano y profesional.`,
	},
	{
		avatar: Connor,
		name: "Carlos Ramírez",
		title: "Paciente desde 2023",
		testimonial: `El equipo médico realmente se interesa por ti. 
    No solo atienden los síntomas, sino que se preocupan por tu bienestar completo.`,
	},
	{
		avatar: BowTiedFocus,
		name: "Laura Fernández",
		title: "Paciente desde 2019",
		testimonial: `Tenía años con dolor de espalda y aquí encontré la solución. 
    La rehabilitación fue efectiva y ahora puedo llevar una vida normal.`,
	},
	{
		avatar: Aniket,
		name: "José Martínez",
		title: "Paciente desde 2022",
		testimonial: `Me ayudaron a recuperarme tras un accidente deportivo. 
    Los ejercicios y el seguimiento hicieron toda la diferencia.`,
	},
	{
		avatar: David,
		name: "Ana Torres",
		title: "Paciente desde 2022",
		testimonial: `Excelente atención y profesionales de primer nivel. 
    Siempre me explican con claridad cada paso del tratamiento.`,
	},
	{
		avatar: Damiano,
		name: "Luis Herrera",
		title: "Paciente desde 2020",
		testimonial: `Lo que más valoro es la calidez humana del equipo. 
    Me siento acompañado en todo mi proceso de recuperación.`,
	},
];

export default testimonialData;
