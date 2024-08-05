import {
  unstable_defineLoader as defineLoader,
  LoaderFunction,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { TaskList, TaskCreate, TaskEdit } from "./resources/Tasks";
import jsonServerProvider from "ra-data-json-server";
import { NoSsr } from "@mui/base/NoSsr";
import { UserEdit, UserList } from "./resources/User";
import { getSession } from "@auth/express"
import { authConfig } from "express/admin/auth/config";
export const loader = async ({ request, context }:LoaderFunctionArgs) => {
  context.session
}

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => {
  return (
    <>
      <Admin basename="/admin" dataProvider={dataProvider}>
        {/* <Resource name="tasks" list={TaskList} create={TaskCreate} /> */}
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          recordRepresentation={(record) => `${record.username}`}
        />
        {/* <Resource
          name="posts"
          list={ListGuesser}
          edit={EditGuesser}
          recordRepresentation="title"
        />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
      </Admin>
    </>
  );
};

export default AdminApp;
