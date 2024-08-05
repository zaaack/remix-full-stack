import {
  unstable_defineLoader as defineLoader,
  type MetaFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { trpcServer } from "~/common/trpc";
import { RegisterButton } from "~/components/RegisterButton";
import { Title } from "~/components/Title";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
// import { dataProvider } from "./providers/dataProvider";
import { TaskList, TaskCreate } from "./resources/Tasks";
import jsonServerProvider from "ra-data-json-server";
import { NoSsr } from "@mui/base/NoSsr";
import { ClientOnly } from "remix-utils/client-only";
import React, { useEffect, useState } from "react";
export interface LoaderData {}

export const meta: MetaFunction = () => {
  return [{ title: "remix-t3-stack" }];
};

// Hack: 避免chrome插件导致 emotion css 样式丢失（可能被覆盖了）
const AdminApp = React.lazy(() => import("./AdminApp"));
const AdminHome = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }, 1);
  }, []);
  return isClient ? <AdminApp /> : null;
};

export default AdminHome;
