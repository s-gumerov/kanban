import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import {
  SIGNUP_VALIDATION_SCHEMA,
  INITIAL_FORM_STATE,
} from './validation-schema'
import type { TSignupData } from './types'
import { TextFieldAuth } from '../../components/TextFieldAuth'
import styles from '../Auth/styles.module.scss'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../router/routes'

export const Signup = (): JSX.Element => {
  const handleSubmit = (values: TSignupData) => {
    console.log(values)
  }

  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>Регистрация</h1>
      <Link to={RoutePaths.AUTH}>Уже зарегистрированы? Войти</Link>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={SIGNUP_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}>
        <Form className={styles.auth__form}>
          <TextFieldAuth fullWidth name="email" type="text" label="Почта" />
          <TextFieldAuth fullWidth name="login" type="text" label="Логин" />
          <TextFieldAuth
            fullWidth
            name="full_name"
            type="text"
            label="Полное имя"
          />
          <TextFieldAuth
            fullWidth
            name="public_name"
            type="text"
            label="Публичное имя"
          />
          <TextFieldAuth fullWidth name="phone" type="tel" label="Телефон" />
          <TextFieldAuth
            fullWidth
            name="password"
            type="password"
            label="Пароль"
          />
          <TextFieldAuth
            fullWidth
            name="password_again"
            type="password"
            label="Пароль (еще раз)"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 4 }}>
            Зарегистрироваться
          </Button>
        </Form>
      </Formik>
    </div>
  )
}