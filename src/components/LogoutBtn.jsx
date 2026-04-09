import {useDispatch} from 'react-redux'
import authService from '../appwrite/config'
import {logout} from '../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }


  return (
    <button className="text-white bg-red-600 hover:bg-black hover:font-medium hover:text-red-300 focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-200"
>Logout</button>
  )
}

export default LogoutBtn