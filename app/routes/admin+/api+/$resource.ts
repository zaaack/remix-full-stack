import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { defaultHandler } from "ra-data-simple-prisma";
import { db } from "~/.server/db";
// import { NextResponse } from "next/server";
// import { checkAccess } from "../../../auth/checkAccess";

const route = async ({ request, }: ActionFunctionArgs | LoaderFunctionArgs) => {
  const body = await request.json();

  // const access = await checkAccess(body);

  const response = await defaultHandler(body, db, {
    getList: { debug: false },
    // audit: {
    //   model: prismaClient.audit,
    //   authProvider: access.sessionAuthProvider,
    //   // enabledResources: ["post","category"],
    // },
  });
  return json(response);
};

export { route as loader, route as action };
