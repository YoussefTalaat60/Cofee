import Contact from './pages/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import SupportPage from './pages/SupportPage'
import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {



  const router = createBrowserRouter(createRoutesFromElements(
    <Route>

      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/support' element={<SupportPage />} />
      </Route>
      {/* <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/support' element={<SupportPage />} ></Route> */}
    </Route>
  ));

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? <div className='bg-black h-[100vh] flex justify-center items-center'>
        <BeatLoader size={50} color='#56181e' />
      </div> : <RouterProvider router={router} />}
    </div>
  )
}

export default App
