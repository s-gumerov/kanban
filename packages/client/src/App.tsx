import './App.css'
import { withErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './services/errorFallback/ErrorFallback'
import { Router } from './pages/router/router'

export const App = withErrorBoundary(Router, {
  FallbackComponent: ErrorFallback,
})
