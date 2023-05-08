import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import {
  AUTH_VALIDATION_SCHEMA,
  INITIAL_FORM_STATE,
} from './validation-schema.ts'
import { TAuthData } from './types.ts'
import { TextFieldAuth } from '../../components/TextFieldAuth'

export const Auth = (): JSX.Element => {
  const handleSubmit = (values: TAuthData) => {
    console.log(values)
  }

  return (
    <div className="auth">
      <h1 className="auth__title title">Авторизация</h1>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={AUTH_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}>
        <Form>
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
