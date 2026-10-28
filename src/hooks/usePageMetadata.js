import { useEffect } from "react";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function usePageMetadata({
  title,
  description,
  robots = "index, follow",
}) {
  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", robots);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [title, description, robots]);
}
