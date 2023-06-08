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

  export type TBadRequest = {
    reason: string
  }
  