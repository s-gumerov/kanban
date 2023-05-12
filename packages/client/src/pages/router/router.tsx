import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, notAllowedRoutes } from './routes'
import { TRoute } from './types'

export const Router = () => {
  const auth = false

  const availableRoutes: TRoute[] = auth
    ? [...publicRoutes, ...privateRoutes]
    : [...publicRoutes, ...notAllowedRoutes]

  return (
    <Routes>
      {availableRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
    </Routes>
  )
}
