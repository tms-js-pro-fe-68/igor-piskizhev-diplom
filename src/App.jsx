import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginPage from './pages/LoginPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
}
)
function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </div>
  )
}


export default App