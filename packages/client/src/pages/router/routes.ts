import type { TRoute } from './types'
import { SignIn, Kanban, Main, NotFound, Signup } from '../index'

export enum RoutePaths {
  MAIN = '/',
  SIGNUP = '/user/signup',
  SIGNIN = '/user/signin',
  KANBAN = '/kanban',
  NOT_FOUND = '*',
}

export enum RouteNames {
  MAIN = 'Главная',
  SIGNUP = 'Регистрация',
  AUTH = 'Авторизация',
  KANBAN = 'Канбан',
  NOT_FOUND = 'Страница не найдена',
}

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
