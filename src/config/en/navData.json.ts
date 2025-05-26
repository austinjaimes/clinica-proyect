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
		text: "Overview",
		link: "/overview",
	},

	// dropdown
	{
		text: "Core Pages",
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
				text: "About",
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
				text: "Blog Post One",
				link: "/blog/tsconfig-paths-setup",
			},
			{
				text: "Blog Post Two",
				link: "/examples/blog-post-2",
			},
			{
				text: "Categories",
				link: "/categories",
			},
			{
				text: "Elements",
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
		text: "About",
		link: "/about",
	},
];

export default navConfig;
