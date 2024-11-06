export type SupportedLocale = "en" | "zh";

export interface LanguageConstants {
  BrandName: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION: string;
  TAGS_TITLE: string;
  TAGS_DESCRIPTION: string;
  SEARCH_PAGE_TITLE: string;
  SEARCH_PAGE_DESCRIPTION: string;
  GO_TO_HOMEPAGE: string;
  ERROR_404_SUBMESSAGE: string;
  ERROR_404_MESSAGE: string;
  ERROR_404_DESCRIPTION: string;
  ERROR_404_TITLE: string;
  UPDATED_ON: string;
  PUBLISHED_ON: string;
  TAGS_HEADING: string;
  FOOTER_ABOUT: string;
  FOOTER_BUILD: string;
  FOOTER_INVEST: string;
  FOOTER_LIFE: string;
}

const zhConstants: LanguageConstants = {
  BrandName: "Witness.Rocks",
  SITE_TITLE: "磐石见证",
  SITE_DESCRIPTION:
    "为这些事作见证，并且记载这些事的就是这门徒；我们也知道他的见证是真的。耶稣所行的事还有许多，若是一一地都写出来，我想，所写的书就是世界也容不下了。",
  TAGS_TITLE: "所有标签",
  TAGS_DESCRIPTION:
    "为这些事作见证，并且记载这些事的就是这门徒；我们也知道他的见证是真的。耶稣所行的事还有许多，若是一一地都写出来，我想，所写的书就是世界也容不下了。",
  SEARCH_PAGE_TITLE: "站内搜索",
  SEARCH_PAGE_DESCRIPTION: "搜索Witness.Rocks全站内容",
  GO_TO_HOMEPAGE: "返回首页",
  ERROR_404_SUBMESSAGE: "您查找的页面不存在或已被移动。",
  ERROR_404_MESSAGE: "页面未找到",
  ERROR_404_DESCRIPTION: "404 - 页面未找到",
  ERROR_404_TITLE: "404 - 页面未找到",
  UPDATED_ON: "更新于",
  PUBLISHED_ON: "发布于",
  TAGS_HEADING: "标签",
  FOOTER_ABOUT: "关于我们",
  FOOTER_BUILD: "五行",
  FOOTER_INVEST: "地支",
  FOOTER_LIFE: "天干",
};

const enConstants: LanguageConstants = {
  BrandName: "Witness.Rocks",
  SITE_TITLE: "Witness.Rocks",
  SITE_DESCRIPTION:
    "This is the disciple who is bearing witness about these things, and who has written these things, and we know that his testimony is true.Now there are also many other things that Jesus did. Were every one of them to be written, I suppose that the world itself could not contain the books that would be written.",
  TAGS_TITLE: "All Tags",
  TAGS_DESCRIPTION:
    "This is the disciple who is bearing witness about these things, and who has written these things, and we know that his testimony is true.Now there are also many other things that Jesus did. Were every one of them to be written, I suppose that the world itself could not contain the books that would be written.",
  SEARCH_PAGE_TITLE: "Site Search",
  SEARCH_PAGE_DESCRIPTION: "Search all content on Witness.Rocks",
  GO_TO_HOMEPAGE: "Go to Homepage",
  ERROR_404_SUBMESSAGE:
    "The page you're looking for doesn't exist or has been moved.",
  ERROR_404_MESSAGE: "Page not found",
  ERROR_404_DESCRIPTION: "404 - Page not found",
  ERROR_404_TITLE: "404 - Page Not Found",
  UPDATED_ON: "Updated on",
  PUBLISHED_ON: "Published on",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "About Us",
  FOOTER_BUILD: "Build",
  FOOTER_INVEST: "Invest",
  FOOTER_LIFE: "Life",
};

export function getConstants(lang: SupportedLocale): LanguageConstants {
  switch (lang) {
    case "zh":
      return zhConstants;
    default:
      return enConstants;
  }
}

export function getTagMetadata(tag: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${tag}`,
    description: `${constants.TAGS_DESCRIPTION} ${tag}.`,
  };
}

export function getCategoryMetadata(category: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${category}`,
    description: `${constants.SITE_DESCRIPTION} ${category}.`,
  };
}
