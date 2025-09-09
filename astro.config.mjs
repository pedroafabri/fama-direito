import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://pedroafabri.github.io",
  base: "/fama-direito",
  integrations: [tailwind(), sitemap(), icon()],
});
