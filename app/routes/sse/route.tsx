import type { LoaderFunction } from "@remix-run/node";
import { EventStream } from "@remix-sse/server";
export const loader: LoaderFunction = ({ request }) => {
  // Return the EventStream from your route loader
  return new EventStream(request, (send) => {
    // In the init function, setup your SSE Event source
    // This can be any asynchronous data source, that will send
    // events to the client periodically

    // Here we will just use a `setInterval`
    let handler = (msg: string) => {
      send(msg, {
        channel: "push",
      });
    };
    // push.events.on("sse-push", handler);

    return () => {
      // Return a cleanup function
      // push.events.off("sse-push", handler);
    };
  });
};
