import * as Yup from 'yup'
import { LOGIN_REGEXP, PASSWORD_REGEXP } from '../../utils/validationRegExps.ts'
import type { TAuthData } from './types.ts'

export const INITIAL_FORM_STATE: TAuthData = {
  login: '',
  password: '',
}

export const AUTH_VALIDATION_SCHEMA = Yup.object().shape({
  login: Yup.string()
    .required('Введите, пожалуйста, логин!')
    .min(2, 'Слишком короткий логин!')
    .max(20, 'Слишком длинный логин!')
    .matches(LOGIN_REGEXP, 'Латиница, цифры, может содержать "-" и "_"'),
  password: Yup.string()
    .required('Введите, пожалуйста, пароль!')
    .min(8, 'Пароль от 8 символов!')
    .max(20, 'Пароль не более 20 символов!')
    .matches(
      PASSWORD_REGEXP,
      ' Должен содержать хотя бы одну заглавную букву и цифру'
    ),
})
