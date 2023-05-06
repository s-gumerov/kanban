import './App.css'
import { withErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './services/errorFallback/ErrorFallback.tsx'
import { Router } from './pages/router/router.tsx'

export const App = withErrorBoundary(Router, {
  FallbackComponent: ErrorFallback,
})
