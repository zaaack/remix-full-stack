import { type ActionFunctionArgs, json } from "@remix-run/node";
import { handleRpc } from "typed-rpc/server";
import transcoder from "superjson";
import { createRcpRouter, type RpcRouter } from "#/modules/service/index";

export async function action({ request }: ActionFunctionArgs) {
  let body = await request.json();
  let type = new URL(request.url).pathname.split("/").pop()! as keyof RpcRouter;
  const service = createRcpRouter();
  let res = await handleRpc(body, await service[type], {
    transcoder,
  });
  return Response.json(res);
}
