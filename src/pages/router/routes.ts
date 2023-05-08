import type { TRoute } from './types.ts'
import { Auth, Main, Kanban } from '../index.ts'

export enum RoutePaths {
  MAIN = '/',
  SIGNUP = '/signup',
  AUTH = '/auth',
  KANBAN = '/kanban',
  NOT_FOUND = '/not-found',
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
]

export const privateRoutes: TRoute[] = [
  {
    path: RoutePaths.KANBAN,
    element: Kanban,
  },
]
