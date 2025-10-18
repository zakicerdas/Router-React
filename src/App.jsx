import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/dashboard/profile';
import Settings from './pages/dashboard/setting';


function App() {

  return (
    <>
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>

      <Route path='/dashboard' element={<Dashboard />}>
      <Route index element={<Profile />} />
      <Route path='profile' element={<Profile />} />
      <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
