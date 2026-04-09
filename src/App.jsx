import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { Home } from './components'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import { useEffect, useState } from 'react'
import { login, logout } from './store/authSlice.js'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/about'/>
            <Route path='/blogs'/>
            <Route path='/login'/>
        </Route>
    )
)

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <RouterProvider router={router}/>
  ) : null
}

export default App
