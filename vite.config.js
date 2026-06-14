import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          contacto: resolve(__dirname, "pages/contacto.html")
        }
      }
    },
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return html.replace(/%VITE_SITE_URL%/g, env.VITE_SITE_URL);
      }
    }
  };
});