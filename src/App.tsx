import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/dashboardLayout'
import LoginPage from './pages/loginPage'
import ShowUsers from './pages/showUsers'
import SingUpPage from './pages/singupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/" element={<DashboardLayout/>}> 
          <Route path="dashboard" element={<ShowUsers/>} />
        </Route>
        <Route path="/singup" element={<SingUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
