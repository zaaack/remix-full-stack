import { vitePlugin as remix } from "@remix-run/dev/dist";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { installGlobals } from "@remix-run/node";
import { flatRoutes } from 'remix-flat-routes'
installGlobals({ nativeFetch: true });

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*'],
      async routes(defineRoutes) {
        return flatRoutes('routes', defineRoutes)
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_singleFetch: true,
        unstable_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  define: {
    "process.env": process.env,
  },
  esbuild: {
            keepNames: true,
        },

  ssr: {
  	noExternal: ['ra-data-simple-prisma', 'next-auth-prisma-adapter', 'ra-data-json-server', ] // or the dataProvider you are using
	},
});
