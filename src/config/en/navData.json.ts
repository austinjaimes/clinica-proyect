/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menu is not supported in this template, although the mega menu code still exist at src/components/nav/nav-dropdown/MegaMenuDropdownToggle.astro
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Inicio",
		link: "/overview",
	},

	// dropdown
	{
		text: "Servicios",
		dropdown: [
			{
				text: "Rehabilitación Física",
				link: "/",
			},
			{
				text: "Fisioterapia Deportiva",
				link: "/examples/landing-2",
			},
			{
				text: "Medicina Regenerativa",
				link: "/examples/landing-3",
			},
			{
				text: "Traumatología y Ortopedia",
				link: "/about",
			},
			{
				text: "Tanatología",
				link: "/services",
			},
			{
				text: "Geriatría",
				link: "/services/pediatrics",
			},
			{
				text: "Cirugía de columna",
				link: "/blog",
			},
			// {
			// 	text: "404",
			// 	link: "/not-a-link",
			// },
			// {
			// 	text: "RSS Feed",
			// 	link: "/rss.xml",
			// },
		],
	},
	{
		text: "¿Quienes somos?",
		link: "/services",
	},
	{
		text: "Testimonios",
		link: "/blog",
	},
	{
		text: "Congresos",
		link: "/about",
	},
	{
		text: "Contacto",
		link: "/about",
	},
];

export default navConfig;
