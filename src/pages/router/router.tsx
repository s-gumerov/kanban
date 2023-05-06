import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes.ts'

export const Router = () => {
  const auth = false
  return auth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
      ))}
    </Routes>
  )
}
