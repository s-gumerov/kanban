import * as Yup from 'yup'
import {
  LOGIN_REGEXP,
  FULL_NAME_REGEXP,
  PUBLIC_NAME_REGEXP,
  PASSWORD_REGEXP,
  PHONE_REGEXP,
} from '../../utils/validationRegExps'
import type { TSignupData } from '../../../../shared/API/types'

export const INITIAL_FORM_STATE: TSignupData = {
  email: '',
  login: '',
  full_name: '',
  public_name: '',
  phone: '',
  password: '',
  password_again: '',
}

export const SIGNUP_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Некорректный email!')
    .required('Введите, пожалуйста, email!'),
  login: Yup.string()
    .required('Введите, пожалуйста, логин!')
    .min(2, 'Слишком короткий логин!')
    .max(20, 'Слишком длинный логин!')
    .matches(LOGIN_REGEXP, 'Латиница, цифры, может содержать "-" и "_"'),
  full_name: Yup.string()
    .required('Введите, пожалуйста полное имя!')
    .matches(
      FULL_NAME_REGEXP,
      'Латиница или кириллица, первая буква заглавная'
    ),
  public_name: Yup.string()
    .required('Введите, пожалуйста публичное имя')
    .matches(
      PUBLIC_NAME_REGEXP,
      'Латиница или кириллица, первая буква заглавная'
    ),
  phone: Yup.string()
    .required('Введите, пожалуйста, телефон!')
    .min(10, 'Короткий номер телефона!')
    .max(15, 'Слишком длинный номер телефона!')
    .matches(PHONE_REGEXP, 'от 10 до 15 цифр, может начинаться с плюса'),
  password: Yup.string()
    .required('Введите, пожалуйста, пароль!')
    .min(8, 'Пароль от 8 символов!')
    .max(20, 'Пароль не более 20 символов!')
    .matches(
      PASSWORD_REGEXP,
      ' Должен содержать хотя бы одну заглавную букву и цифру'
    ),
  password_again: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Пароли должны совпадать!'
  ),
})
