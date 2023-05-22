import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import { AUTH_VALIDATION_SCHEMA, INITIAL_FORM_STATE } from './validation-schema'
import { TextFieldAuth } from '../../components/TextFieldAuth'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { RoutePaths } from '../router/routes'
import { signIn } from '../../api/auth/Auth'
import type { TSignInData } from '../../api/auth/types'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { signInByThunk } from '../../store/user/userSlice'

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: TSignInData) => {
    const response = await dispatch(signInByThunk(values))
    
    if (!response.payload || typeof response.payload !== 'object') {
      return
    }

    if('id' in response.payload) {
      return navigate(RoutePaths.KANBAN)
    } else if('reason' in response.payload) {
      return alert(response.payload.reason)
    }
    
  }

  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>Авторизация</h1>
      <Link to={RoutePaths.SIGNUP}>Нет аккаунта? Зарегистрироваться</Link>
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
