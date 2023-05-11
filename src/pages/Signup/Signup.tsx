import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import {
  SIGNUP_VALIDATION_SCHEMA,
  INITIAL_FORM_STATE,
} from './validation-schema.ts'
import type { TSignupData } from './types.ts'
import { TextFieldAuth } from '../../components/TextFieldAuth'
import styles from '../Auth/styles.module.scss'

export const Signup = (): JSX.Element => {
  const handleSubmit = (values: TSignupData) => {
    console.log(values)
  }

  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>Авторизация</h1>
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
            Войти
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
