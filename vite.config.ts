import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}
const IsProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  esbuild: {
    keepNames: true, // FIX: 压缩bug
  },
  plugins: [
    remix({
      serverModuleFormat: 'esm',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  ssr: IsProd
    ? {
        external: ['@prisma/client', 'prisma', 'isolated-vm', 'zeromq'],
        noExternal: true,
        // noExternal: ["react-use","nstate"],
      }
    : {
        noExternal: ['react-use', 'nstate'],
      },
  optimizeDeps: {
    exclude: ['@sqlite.org/sqlite-wasm', 'sqlocal', 'sqlocal/kysely'],
  },
})
