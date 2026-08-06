// Keeps files in /public working when the site is deployed below a GitHub Pages repo path.
export const publicAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
