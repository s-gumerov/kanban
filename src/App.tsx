import './App.css'
import { withErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './services/errorFallback/ErrorFallback.tsx'

const App = () => {
  return <h1>Kanban</h1>
}
export default withErrorBoundary(App, {
  FallbackComponent: ErrorFallback,
})
