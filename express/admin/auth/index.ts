import { getSession } from "@auth/express"
import { NextFunction, Request, Response } from "express"
import { authConfig } from "./config"

export async function authenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = res.locals.session ?? await getSession(req, authConfig)
  console.log('session', session)
  if (!session?.user) {
    res.redirect(`/admin/auth/signin?callbackUrl=${req.header('referer')?? '/admin/'}`)
  } else {
    next()
  }
}
export async function currentSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session = (await getSession(req, authConfig)) ?? undefined
  res.locals.session = session
  return next()
}
