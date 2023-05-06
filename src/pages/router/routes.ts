import type { TRoute } from './types.ts'
import { AuthPage } from '../index.ts'

export enum RoutePaths {
  MAIN = '/',
  SIGNUP = '/signup',
  AUTH = '/auth',
  NOT_FOUND = '/not-found',
}

export enum RouteNames {
  MAIN = 'Главная',
  SIGNUP = 'Регистрация',
  AUTH = 'Авторизация',
  NOT_FOUND = 'Страница не найдена',
}
export const publicRoutes: TRoute[] = [
  {
    path: RoutePaths.AUTH,
    element: AuthPage,
  },
]

export const privateRoutes: TRoute[] = [
  {
    path: RoutePaths.AUTH,
    element: AuthPage,
  },
]
