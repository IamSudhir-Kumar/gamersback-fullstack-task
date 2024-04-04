import './App.css'
import Header from './components/header/Header'
import Signin from './components/registration/Signin'
import Signup from './components/registration/Signup'
import NotFound from './components/Not Found/NotFound'
import Home from './pages/home/home'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*"
        element={<NotFound />}
        />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
