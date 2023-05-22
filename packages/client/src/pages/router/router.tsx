import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, notAllowedRoutes } from './routes'
import { TRoute } from './types'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppDispatch'

export const Router = () => {
  const { user } = useAppSelector(state => state.user)
  console.log(user);
  
  const [availableRoutes, setAavailableRoutes] = useState([...publicRoutes, ...notAllowedRoutes])

  useEffect(()=>{
if(user && user.id) {
  setAavailableRoutes([...publicRoutes, ...privateRoutes])
} else {
  setAavailableRoutes([...publicRoutes, ...notAllowedRoutes])
}
  },[user])


  return (
    <Routes>
      {availableRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
    </Routes>
  )
}
