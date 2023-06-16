import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import {
  SIGNUP_VALIDATION_SCHEMA,
  INITIAL_FORM_STATE,
} from './validation-schema'
import { TextFieldAuth } from '../../components/TextFieldAuth'
import styles from '../SignIn/styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import type { TSignupData } from '../../../../shared/API/types'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { signUpByThunk } from '../../store/user/userSlice'
import { RoutePaths } from '../router/routes'


export const Signup = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = async(values: TSignupData) => {
    const response = await dispatch(signUpByThunk(values))
    
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
      <h1 className={styles.auth__title}>Регистрация</h1>
      <Link to={RoutePaths.SIGNIN}>Уже зарегистрированы? Войти</Link>
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
