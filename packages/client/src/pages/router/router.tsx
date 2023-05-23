import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, notAllowedRoutes } from './routes'
import { TRoute } from './types'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppDispatch'

export const Router = () => {
  const getUserRoutes = (userId: number | undefined): TRoute[] => {
    return userId ? [...publicRoutes, ...privateRoutes] : [...publicRoutes, ...notAllowedRoutes]
  }

  const { user } = useAppSelector(state => state.user)

  const [availableRoutes, setAavailableRoutes] = useState<TRoute[]>(getUserRoutes(user?.id))
  
  useEffect(()=> {
    setAavailableRoutes(getUserRoutes(user?.id))
  },[user?.id])


  return (
    <Routes>
      {availableRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
    </Routes>
  )
}
