import type { TRoute } from './types.ts'
import { Auth, Kanban, Main, NotFound } from '../index.ts'

export enum RoutePaths {
  MAIN = '/',
  SIGNUP = '/signup',
  AUTH = '/auth',
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
    path: RoutePaths.AUTH,
    element: Auth,
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
    element: Auth,
  }
})
