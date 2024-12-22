import { rpcClient } from "typed-rpc";
import SuperJSON from "superjson";
import type { RpcRouter } from "#/modules/service";
function createClient<T extends { [k: string]: object }>(prefix = '/api') {
  let ret = {} as any as { [k in keyof T]: ReturnType<typeof rpcClient<Awaited<T[k]>>> };
  const cache: any = {};
  return new Proxy(ret, {
    get(target, p: string, receiver) {
      cache[p] ??= rpcClient<Awaited<T[keyof T]>>({
        url: prefix.replace(/\/$/, "") + "/" + p,
        transcoder: SuperJSON,
      });
      return cache[p];
    },
  });
}
export const client = createClient<RpcRouter>();
