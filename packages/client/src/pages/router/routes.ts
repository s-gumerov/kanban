import type { TRoute } from './types'
import { SignIn, Kanban, Main, NotFound, Signup } from '../index'
import { RoutePaths } from "../../../../shared"

export const publicRoutes: TRoute[] = [
  {
    path: RoutePaths.MAIN,
    element: Main,
  },
  {
    path: RoutePaths.SIGNUP,
    element: Signup,
  },
  {
    path: RoutePaths.SIGNIN,
    element: SignIn,
  },
  {
    path: RoutePaths.NOT_FOUND,
    element: NotFound,
  },
]

export const privateRoutes: TRoute[] = [
  {
    path: RoutePaths.KANBAN,
    element: Kanban,
  },
]

export const notAllowedRoutes: TRoute[] = privateRoutes.map(({ path }) => {
  return {
    path: path,
    element: SignIn,
  }
})
