import { BLOG_TRANSLATIONS } from './blogTranslations';

/**
 * Safely parses a field that might be a JSON string, array, or object.
 */
export function parseJsonField(field, fallback = []) {
  if (!field) return fallback;
  if (Array.isArray(field)) return field;
  if (typeof field === 'string') {
    try {
      const parsed = JSON.parse(field);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

/**
 * Maps a raw blog item (from DB API) into a standardized frontend blog structure
 * with localized title, description, seo metadata, sections, faqs, and images.
 */
export function mapApiBlog(item, lang = 'tr') {
  if (!item) return null;
  const langKey = (lang || 'tr').toLowerCase().split('-')[0];

  // 1. Check if backend translations contain requested language
  const dbTrans = item.translations?.find(
    (t) => (t.language || '').toLowerCase().split('-')[0] === langKey
  );

  // 2. Check fallback dictionary translations (e.g. static translation table if DB translation missing)
  const dictTrans = langKey !== 'tr' ? (BLOG_TRANSLATIONS[item.id]?.[langKey] || BLOG_TRANSLATIONS[item.id]?.['en']) : null;

  const trans = dbTrans || dictTrans;

  const rawSections = trans?.sections ?? item.sections;
  const rawFaqs = trans?.faqs ?? item.faqs;
  const rawIntro = trans?.intro ?? item.intro;
  const rawInternalLinks = trans?.internal_links ?? trans?.internalLinks ?? item.internal_links ?? item.internalLinks;

  return {
    id: item.id,
    title: trans?.title || item.title || '',
    description: trans?.description || item.description || '',
    seoTitle: trans?.seo_title || trans?.seoTitle || item.seo_title || item.seoTitle || trans?.title || item.title || '',
    metaDesc: trans?.meta_desc || trans?.metaDesc || item.meta_desc || item.metaDesc || trans?.description || item.description || '',
    slug: item.slug || String(item.id),
    image: item.image || item.image_path || item.img || '',
    altText: trans?.alt_text || trans?.altText || item.alt_text || item.altText || item.title || '',
    focusKeyword: trans?.focus_keyword || trans?.focusKeyword || item.focus_keyword || item.focusKeyword || '',
    intro: parseJsonField(rawIntro, []),
    sections: parseJsonField(rawSections, []),
    faqs: parseJsonField(rawFaqs, []),
    internalLinks: parseJsonField(rawInternalLinks, []),
    order_index: item.order_index || 0,
    raw: item,
  };
}

/**
 * Returns a blog object localized to the requested language.
 */
export function getLocalizedBlog(blog, lang = 'tr') {
  return mapApiBlog(blog, lang);
}

/**
 * Returns all blogs localized to the requested language.
 */
export function getLocalizedBlogs(blogs = [], lang = 'tr') {
  if (!Array.isArray(blogs)) return [];
  return blogs.map((blog) => mapApiBlog(blog, lang)).filter(Boolean);
}

// Fallback empty export
export const BLOG_DATA = [];
