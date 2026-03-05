import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { env } from "../../config/env";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
};

const normalizeSiteUrl = (url: string) => url.replace(/\/+$/, "");

const buildAbsoluteUrl = (siteUrl: string, path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizeSiteUrl(siteUrl)}${normalizedPath}`;
};

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const upsertCanonicalLink = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const Seo = ({ title, description, path, noIndex = false, image, type = "website" }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const activePath = path ?? location.pathname;
    const canonicalUrl = buildAbsoluteUrl(env.VITE_SITE_URL, activePath);
    const ogImage = image ?? `${normalizeSiteUrl(env.VITE_SITE_URL)}/vite.svg`;

    document.title = `${title} | ${env.VITE_APP_NAME}`;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", ogImage);

    upsertMetaByProperty("og:type", type);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", ogImage);
    upsertMetaByProperty("og:site_name", env.VITE_APP_NAME);

    upsertCanonicalLink(canonicalUrl);
  }, [description, image, location.pathname, noIndex, path, title, type]);

  return null;
};

export default Seo;
