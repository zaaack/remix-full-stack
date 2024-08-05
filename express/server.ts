import { createRequestHandler } from "@remix-run/express";
import express, { Request, Response } from "express";
import {ExpressAuth, getSession} from '@auth/express'
import { authConfig } from "express/admin/auth/config.js";
import { authenticatedUser } from "express/admin/auth/index.js";
// notice that the result of `remix vite:build` is "just a module"

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer
    ? viteDevServer.middlewares
    : express.static("build/client")
);

const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
      )

  : await import("../build/server/index.js");


app.use("/admin/auth/**", ExpressAuth(authConfig))

app.use("/admin", authenticatedUser)

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build: build as any, mode: process.env.NODE_ENV, getLoadContext(req,res){
  return {
    session: getSession(req,authConfig)
  }
} }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
