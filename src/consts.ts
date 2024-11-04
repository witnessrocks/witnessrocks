// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Witnessrocks";
export const SITE_TITLE = "磐石见证";
export const SITE_DESCRIPTION =
  "为这些事作见证，并且记载这些事的就是这门徒；我们也知道他的见证是真的";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "标签";
export const Tags_DESCRIPTION = "标签";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `标签 '${tag}' 下的所有文章`,
    description: `磐石见证-查看 ${tag} 下的所有文章 `,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `磐石见证- '${category}' 下的所有文章 `,
    description: `磐石见证-查看 ${category} 下的所有文章 `,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [{ href: "/category/about/1/", title: "关于" }];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/team-of-this-website/", title: "关于我们" },
  { href: "/tags/", title: "标签" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - 站内搜索`;
export const SEARCH_PAGE_DESCRIPTION = `搜索 ${SITE_TITLE} 的所有内容`;
