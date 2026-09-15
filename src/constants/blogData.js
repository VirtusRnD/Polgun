import { BLOG_TRANSLATIONS } from './blogTranslations';

/**
 * Safely resolves a multi-language field value.
 * Handles strings, numbers, objects like { tr: "...", en: "..." }, or nested object fields.
 */
export function getLocalizedText(val, lang = 'tr') {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);

  if (typeof val === 'object') {
    const langKey = (lang || 'tr').toLowerCase().split('-')[0];
    if (val[langKey] !== undefined && val[langKey] !== null) {
      return getLocalizedText(val[langKey], lang);
    }
    if (val.tr !== undefined && val.tr !== null) {
      return getLocalizedText(val.tr, lang);
    }
    if (val.en !== undefined && val.en !== null) {
      return getLocalizedText(val.en, lang);
    }
    if (val.text !== undefined && val.text !== null) {
      return getLocalizedText(val.text, lang);
    }
    if (val.content !== undefined && val.content !== null) {
      return getLocalizedText(val.content, lang);
    }
    if (val.value !== undefined && val.value !== null) {
      return getLocalizedText(val.value, lang);
    }
    const values = Object.values(val).filter((v) => v !== null && v !== undefined);
    if (values.length > 0) {
      return getLocalizedText(values[0], lang);
    }
  }
  return '';
}

/**
 * Safely parses a field that might be a JSON string, array, or object.
 */
export function parseJsonField(field, fallback = []) {
  if (!field) return fallback;
  if (Array.isArray(field)) return field;
  if (typeof field === 'string') {
    const trimmed = field.trim();
    if (!trimmed) return fallback;
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed;
      if (parsed && typeof parsed === 'object') return [parsed];
      if (typeof parsed === 'string') return [parsed];
      return fallback;
    } catch {
      return [trimmed];
    }
  }
  if (typeof field === 'object') return [field];
  return fallback;
}

/**
 * Maps a raw blog item (from DB API) into a standardized frontend blog structure
 * with localized title, description, seo metadata, sections, faqs, and images.
 */
export function mapApiBlog(item, lang = 'tr') {
  if (!item) return null;
  const langKey = (lang || 'tr').toLowerCase().split('-')[0];

  const findLatestTranslation = (translations, targetLang) => {
    if (!Array.isArray(translations)) return null;
    const matches = translations.filter(
      (t) => (t?.language || '').toLowerCase().split('-')[0] === targetLang.toLowerCase()
    );
    if (matches.length === 0) return null;
    matches.sort((a, b) => {
      const timeA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
      const timeB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
      if (timeA !== timeB) return timeB - timeA;
      return (b.id || 0) - (a.id || 0);
    });
    return matches[0];
  };

  // 1. Check if backend translations contain requested language
  const dbTrans = findLatestTranslation(item.translations, langKey)
    || findLatestTranslation(item.translations, 'tr');

  // 2. Check fallback dictionary translations (e.g. static translation table if DB translation missing)
  const dictTrans = langKey !== 'tr' ? (BLOG_TRANSLATIONS[item.id]?.[langKey] || BLOG_TRANSLATIONS[item.id]?.['en']) : null;

  const trans = dbTrans || dictTrans;

  const rawSections = trans?.sections ?? item.sections;
  const rawFaqs = trans?.faqs ?? item.faqs;
  const rawIntro = trans?.intro ?? item.intro;
  const rawInternalLinks = trans?.internal_links ?? trans?.internalLinks ?? item.internal_links ?? item.internalLinks;

  // Process intro paragraphs
  const parsedIntro = parseJsonField(rawIntro, [])
    .map((p) => getLocalizedText(p, langKey))
    .filter(Boolean);

  // Process sections and paragraphs
  const parsedSections = parseJsonField(rawSections, [])
    .map((sec) => {
      if (!sec) return null;
      if (typeof sec === 'string') {
        const text = getLocalizedText(sec, langKey);
        return text ? { heading: '', paragraphs: [text] } : null;
      }
      const heading = getLocalizedText(sec.heading || sec.title || sec.name, langKey);
      const rawParas = sec.paragraphs ?? sec.content ?? sec.text ?? [];
      const paragraphs = parseJsonField(rawParas, [])
        .map((p) => getLocalizedText(p, langKey))
        .filter(Boolean);
      return { heading, paragraphs };
    })
    .filter(Boolean);

  // Process FAQs
  const parsedFaqs = parseJsonField(rawFaqs, [])
    .map((faq) => {
      if (!faq) return null;
      if (typeof faq === 'string') {
        const text = getLocalizedText(faq, langKey);
        return text ? { question: text, answer: '' } : null;
      }
      const question = getLocalizedText(faq.question || faq.q, langKey);
      const answer = getLocalizedText(faq.answer || faq.a, langKey);
      return { question, answer };
    })
    .filter(Boolean);

  // Process internal links (supports strings and object links with title/label/url/slug)
  const parsedInternalLinks = parseJsonField(rawInternalLinks, [])
    .map((link) => {
      if (!link) return null;
      if (typeof link === 'string') {
        const text = getLocalizedText(link, langKey);
        return text ? { title: text, url: '', label: text } : null;
      }
      if (typeof link === 'object') {
        const title = getLocalizedText(link.title || link.label || link.text || link.name, langKey);
        const url = link.url || link.link || link.href || link.path || link.slug || '';
        return {
          title: title || url,
          url: url || '',
          label: title || url,
          ...link,
        };
      }
      return null;
    })
    .filter(Boolean);

  return {
    id: item.id,
    title: getLocalizedText(trans?.title || item.title, langKey),
    description: getLocalizedText(trans?.description || item.description, langKey),
    seoTitle: getLocalizedText(trans?.seo_title || trans?.seoTitle || item.seo_title || item.seoTitle || trans?.title || item.title, langKey),
    metaDesc: getLocalizedText(trans?.meta_desc || trans?.metaDesc || item.meta_desc || item.metaDesc || trans?.description || item.description, langKey),
    slug: item.slug || String(item.id),
    image: item.image || item.image_path || item.img || '',
    altText: getLocalizedText(trans?.alt_text || trans?.altText || item.alt_text || item.altText || item.title, langKey),
    focusKeyword: getLocalizedText(trans?.focus_keyword || trans?.focusKeyword || item.focus_keyword || item.focusKeyword, langKey),
    intro: parsedIntro,
    sections: parsedSections,
    faqs: parsedFaqs,
    internalLinks: parsedInternalLinks,
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

