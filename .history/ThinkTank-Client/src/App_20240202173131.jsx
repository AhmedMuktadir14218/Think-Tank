import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import Search from './Pages/Search';
import Signup from './Pages/Signup';

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/search' element={<Search />} />
                  <Route path='/dashboard' element={<Dashboard />} />
      

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
