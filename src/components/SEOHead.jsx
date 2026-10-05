import { useEffect } from 'react';

export default function SEOHead({ title, description, canonicalUrl, ogImage, schema }) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set/update meta tag
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Helper to set/update link canonical
    const setCanonicalLink = (url) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    if (description) {
      setMetaTag('meta[name="description"]', 'content', description);
      setMetaTag('meta[property="og:description"]', 'content', description);
      setMetaTag('meta[name="twitter:description"]', 'content', description);
    }

    if (title) {
      setMetaTag('meta[property="og:title"]', 'content', title);
      setMetaTag('meta[name="twitter:title"]', 'content', title);
    }

    if (canonicalUrl) {
      setCanonicalLink(canonicalUrl);
      setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    }

    const defaultOgImage = 'https://sarojroadlines.vercel.app/images/logo.png';
    const imageToUse = ogImage || defaultOgImage;
    setMetaTag('meta[property="og:image"]', 'content', imageToUse);
    setMetaTag('meta[name="twitter:image"]', 'content', imageToUse);

    // 4. Inject Page JSON-LD Schema
    let scriptTag = document.getElementById('page-jsonld-schema');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-jsonld-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Scroll to top on page route load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonicalUrl, ogImage, schema]);

  return null;
}
