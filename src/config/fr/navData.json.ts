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
		text: "Aperçu",
		link: "/overview",
	},

	// dropdown
	{
		text: "Pages Principales",
		dropdown: [
			{
				text: "Landing One",
				link: "/",
			},
			{
				text: "Landing Two",
				link: "/examples/landing-2",
			},
			{
				text: "Landing Three",
				link: "/examples/landing-3",
			},
			{
				text: "A Propos",
				link: "/about",
			},
			{
				text: "Services",
				link: "/services",
			},
			{
				text: "Service Page",
				link: "/services/pediatrics",
			},
			{
				text: "Blog",
				link: "/blog",
			},
			{
				text: "Article One",
				link: "/blog/tsconfig-paths-setup",
			},
			{
				text: "Article Two",
				link: "/examples/blog-post-2",
			},
			{
				text: "Categories",
				link: "/categories",
			},
			{
				text: "Éléments",
				link: "/elements",
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
		text: "Services",
		link: "/services",
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "A Propos",
		link: "/about",
	},
];

export default navConfig;
