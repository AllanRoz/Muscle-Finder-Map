import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages builds are static: no Nitro server, assets served from a subpath.
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // Skip the Nitro server build for static exports so the output is plain files.
  nitro: isGithubPages ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static SPA shell only for the GitHub Pages export; the normal build keeps SSR.
    ...(isGithubPages
      ? {
          spa: { enabled: true },
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/", prerender: { enabled: true } }],
        }
      : {}),
  },

  vite: {
    base: isGithubPages ? "/Muscle-Finder-Map/" : "/",
    build: isGithubPages ? { outDir: "dist" } : undefined,
  },
});
