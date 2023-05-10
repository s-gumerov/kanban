import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import {
  AUTH_VALIDATION_SCHEMA,
  INITIAL_FORM_STATE,
} from './validation-schema.ts'
import { TAuthData } from './types.ts'
import { TextFieldAuth } from '../../components/TextFieldAuth'
import styles from './styles.module.scss'

export const Auth = (): JSX.Element => {
  const handleSubmit = (values: TAuthData) => {
    console.log(values)
  }

  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>Авторизация</h1>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={AUTH_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}>
        <Form className={styles.auth__form}>
          <TextFieldAuth fullWidth name="login" type="text" label="Логин" />
          <TextFieldAuth
            fullWidth
            name="password"
            type="password"
            label="Пароль"
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
