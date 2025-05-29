import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Rehabilita Sport",
	// Your website's title and description (meta fields)
	title:
		"Rehabilita Sport - Expertos en Rehabilitación.",
	description:
		"Create a stunning medical website with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",

	// Your information for blog post purposes
	author: {
		name: "Cosmic Themes",
		email: "creator@cosmicthemes.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/theme.jpg",
		alt: "Space Coast Template by Cosmic Themes",
	},
};

export default siteData;
