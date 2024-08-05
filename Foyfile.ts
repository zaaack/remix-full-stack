import { task, desc, option, fs, execa, sleep } from "foy";

task("dev", async (ctx) => {
  ctx
    .env("NODE_ENV", "development")
    .monitor(
      "./express",
      `node --import @swc-node/register/esm-register ./express/server.ts`,
    );
});
