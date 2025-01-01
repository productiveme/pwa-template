import { Router, Route } from 'wouter'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'

export const AppRouter = () => (
  <Router>
    <Layout>
      <Route path="/" component={Home} />
      {/* Add more routes as needed */}
    </Layout>
  </Router>
)
