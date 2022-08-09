import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AppContextProvider from './components/AppContextProvider'


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
    <AppContextProvider>

    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </AppContextProvider>
 
  )
}


export default App