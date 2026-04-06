import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { Home } from './components'


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
  return(
    <RouterProvider router={router}/>
  )
}

export default App
