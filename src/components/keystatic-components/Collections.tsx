/**
 * * Keystatic Collection definitions that can take in languages and return the correct content
 * This makes it much cleaner to work with content in different languages
 */

import {
	collection,
	fields,
	// singleton,
} from "@keystatic/core";

import ComponentBlocks from "@/components/keystatic-components/ComponentBlocks";
import { locales } from "@/config/siteSettings.json";

/**
 * * Blog posts collection
 * This gets used by Astro Content Collections, so if you update this, you'll need to update the Astro Content Collections schema
 */
const Blog = (locale: (typeof locales)[number]) =>
	collection({
		label: `Blog (${locale.toUpperCase()})`,
		slugField: "title",
		path: `src/data/blog/${locale}/*/`,
		columns: ["title", "pubDate"],
		entryLayout: "content",
		format: { contentField: "content" },
		schema: {
			title: fields.slug({
				name: { label: "Title" },
				slug: {
					label: "SEO-friendly slug",
					description: "Never change the slug once a file is published!",
				},
			}),
			description: fields.text({
				label: "Description",
				validation: { isRequired: true, length: { min: 1, max: 160 } },
			}),
			draft: fields.checkbox({
				label: "Draft",
				description: "Set this post as draft to prevent it from being published.",
			}),

			authors: fields.array(
				fields.relationship({
					label: "Post author",
					collection: `authors`,
					// authors field in keystatic.config.tsx must match the collection name here (like "authorsEN" or "authorsFR")
					// collection: `authors${locale.toUpperCase()}`,
				}),
				{
					label: "Authors",
					validation: { length: { min: 1 } },
					itemLabel: (props) => props.value || "Please select an author",
				},
			),
			pubDate: fields.date({ label: "Publish Date" }),
			updatedDate: fields.date({
				label: "Updated Date",
				description: "If you update this post at a later date, put that date here.",
			}),
			mappingKey: fields.text({
				label: "Mapping Key",
				description: "This is used to map entries between languages.",
			}),
			heroImage: fields.image({
				label: "Hero Image",
				publicPath: "../",
				validation: { isRequired: true },
			}),
			categories: fields.array(fields.text({ label: "Category" }), {
				label: "Categories",
				description: "This is NOT case sensitive.",
				itemLabel: (props) => props.value,
				validation: { length: { min: 1 } },
			}),
			content: fields.mdx({
				label: "Content",
				options: {
					bold: true,
					italic: true,
					strikethrough: true,
					code: true,
					heading: [2, 3, 4, 5, 6],
					blockquote: true,
					orderedList: true,
					unorderedList: true,
					table: true,
					link: true,
					image: {
						directory: `src/data/blog/${locale}/`,
						publicPath: "../",
						// schema: {
						//   title: fields.text({
						//     label: "Caption",
						//     description:
						//       "The text to display under the image in a caption.",
						//   }),
						// },
					},
					divider: true,
					codeBlock: true,
				},
				components: {
					Admonition: ComponentBlocks.Admonition,
				},
			}),
		},
	});

/**
 * * Authors collection
 * This gets used by Astro Content Collections, so if you update this, you'll need to update the Astro Content Collections schema
 */
const Authors = (locale: (typeof locales)[number] | "") =>
	collection({
		label: `Authors ${locale === "" ? "" : `(${locale.toUpperCase()})`} `,
		slugField: "name",
		path: `src/data/authors/${locale}/*/`,
		columns: ["name"],
		entryLayout: "content",
		format: { contentField: "bio" },
		schema: {
			name: fields.slug({
				name: {
					label: "Name",
					validation: {
						isRequired: true,
					},
				},
				slug: {
					label: "SEO-friendly slug",
					description: "Never change the slug once this file is published!",
				},
			}),
			avatar: fields.image({
				label: "Author avatar",
				publicPath: "../",
				validation: { isRequired: true },
			}),
			about: fields.text({
				label: "About",
				description: "A short bio about the author",
				validation: { isRequired: true },
			}),
			email: fields.text({
				label: "The author's email",
				description: "This must look something like `you@email.com`",
				validation: { isRequired: true },
			}),
			authorLink: fields.url({
				label: "Author Website or Social Media Link",
				validation: { isRequired: true },
			}),
			bio: fields.mdx({
				label: "Full Bio",
				description: "The author's full bio",
				options: {
					bold: true,
					italic: true,
					strikethrough: true,
					code: true,
					heading: [2, 3, 4],
					blockquote: true,
					orderedList: true,
					unorderedList: true,
					table: false,
					link: true,
					image: {
						directory: "src/data/authors/",
						publicPath: "../",
					},
					divider: true,
					codeBlock: false,
				},
			}),
		},
	});

/**
 * * Other Pages collection
 * For items like legal pages, about pages, etc.
 * This gets used by Astro Content Collections, so if you update this, you'll need to update the Astro Content Collections schema
 */
const OtherPages = (locale: (typeof locales)[number]) =>
	collection({
		label: `Other Pages (${locale.toUpperCase()})`,
		slugField: "title",
		path: `src/data/otherPages/${locale}/*/`,
		columns: ["title"],
		entryLayout: "content",
		format: { contentField: "content" },
		schema: {
			title: fields.slug({
				name: { label: "Title" },
				slug: {
					label: "SEO-friendly slug",
					description: "Never change the slug once a file is published!",
				},
			}),
			description: fields.text({
				label: "Description",
				validation: { isRequired: true, length: { min: 1, max: 160 } },
			}),
			draft: fields.checkbox({
				label: "Draft",
				description: "Set this page as draft to prevent it from being published.",
			}),
			mappingKey: fields.text({
				label: "Mapping Key",
				description: "This is used to map entries between languages.",
			}),
			content: fields.mdx({
				label: "Page Contents",
				options: {
					bold: true,
					italic: true,
					strikethrough: true,
					code: true,
					heading: [2, 3, 4, 5, 6],
					blockquote: true,
					orderedList: true,
					unorderedList: true,
					table: true,
					link: true,
					image: {
						directory: `src/data/otherPages/${locale}/`,
						publicPath: "../",
					},
					divider: true,
					codeBlock: true,
				},
				components: {
					Admonition: ComponentBlocks.Admonition,
				},
			}),
		},
	});

/**
 * * Services collection
 * This gets used by Astro Content Collections, so if you update this, you'll need to update the Astro Content Collections schema
 */
const Services = (locale: (typeof locales)[number]) =>
	collection({
		label: `Services (${locale.toUpperCase()})`,
		slugField: "title",
		path: `src/data/services/${locale}/*/`,
		columns: ["title", "order"],
		entryLayout: "content",
		format: { contentField: "content" },
		schema: {
			title: fields.slug({
				name: { label: "Title" },
				slug: {
					label: "SEO-friendly slug",
					description: "Never change the slug once a file is published!",
				},
			}),
			titleLong: fields.text({
				label: "Long Title",
				validation: { isRequired: true },
			}),
			description: fields.text({
				label: "Description",
				validation: { isRequired: true },
			}),
			draft: fields.checkbox({
				label: "Draft",
				description: "Set this service as draft to prevent it from being published.",
			}),
			icon: fields.text({
				label: "Icon",
				description: "Icon name for this service",
				validation: { isRequired: true },
			}),
			image: fields.image({
				label: "Service Image",
				publicPath: "../",
				validation: { isRequired: true },
			}),
			mappingKey: fields.text({
				label: "Mapping Key",
				description: "This is used to map entries between languages.",
			}),
			order: fields.number({
				label: "Order",
				description: "The order this service appears in lists (lower numbers appear first)",
			}),
			content: fields.mdx({
				label: "Content",
				options: {
					bold: true,
					italic: true,
					strikethrough: true,
					code: true,
					heading: [2, 3, 4, 5, 6],
					blockquote: true,
					orderedList: true,
					unorderedList: true,
					table: true,
					link: true,
					image: {
						directory: `src/data/services/${locale}/`,
						publicPath: "../",
					},
					divider: true,
					codeBlock: true,
				},
				components: {
					Admonition: ComponentBlocks.Admonition,
				},
			}),
		},
	});

export default {
	Blog,
	Authors,
	OtherPages,
	Services,
};
