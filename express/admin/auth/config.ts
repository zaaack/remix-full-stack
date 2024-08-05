import { ExpressAuthConfig } from "@auth/express"
import Credentials from "@auth/express/providers/credentials"

export const authConfig: ExpressAuthConfig = {
  trustHost: true,
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your own logic here to validate credentials
        if (credentials.username === "yzknight@126.com" && credentials.password === "aaa") {
          return { id: '1', name: "User" }
        }
        return null
      }
    })
  ],
}
