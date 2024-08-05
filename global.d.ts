import type { Session } from "@auth/express";


declare module "@remix-run/node" {
  export interface AppLoadContext {
    // Add custom properties to `AppLoadContext` here
    session: Session | null;
  }
}
