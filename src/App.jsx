import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router'

import {setPosts} from './store/postSlice'
import appwriteService from './appwrite/config'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  const authStatus = useSelector(state => state.auth.status)
  
  useEffect(() => {
    if(authStatus) {
      appwriteService.getPosts([]).then(res => res ? dispatch(setPosts(res.rows)) : null)
    }else{
      dispatch(setPosts([]))
    }
  }, [authStatus])
  
  return !loading ? (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col">
      <Header />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App