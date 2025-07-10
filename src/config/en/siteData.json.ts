import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Rehabilita Sport",
	// Your website's title and description (meta fields)
	title:
		"Rehabilita Sport - Expertos en Rehabilitación",
	description:
		"En Rehabilita Sport ofrecemos servicios de rehabilitación deportiva, fisioterapia, terapia con cámara hiperbárica y recuperación física personalizada en Iguala de la Independencia. Contáctanos para una atención profesional y cercana.",

	// Your information for blog post purposes
	author: {
		name: "Rehabilita Sport",
		email: "clinica.rehabilitasport@gmail.com",
		twitter: "RehabilitaSport",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/logonav.png",
		alt: "Rehabilita Sport - Clínica de Rehabilitación Deportiva",
	},
};

export default siteData;
