import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, notAllowedRoutes } from './routes'
import type { TRoute } from './types'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppDispatch'

export const Router = () => {
  const getUserRoutes = (userId: number | undefined): TRoute[] => {
    return userId ? [...publicRoutes, ...privateRoutes] : [...publicRoutes, ...notAllowedRoutes]
  }

  const { user } = useAppSelector(state => state.user)
  const [availableRoutes, setAavailableRoutes] = useState<TRoute[]>(getUserRoutes(user?.id))
  
  useEffect(()=> {
    if(user) {
      const {id} = user
      setAavailableRoutes(getUserRoutes(id))
    }
  },[user])


  return (
    <Routes>
      {availableRoutes.map(({ path, element }) => {
        const Element = element /* для того чтобы не было ошибки Rendered fewer hooks than expected при попытке обновить роуты после авторизации*/
        return <Route key={path} path={path} element={<Element/>} />
})}
    </Routes>
  )
}
