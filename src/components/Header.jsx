import { Link, NavLink } from 'react-router';
import {LogoutBtn, Logo as img} from '../components';
import { useSelector } from 'react-redux';

function Header() {

  const authStatus = useSelector((state) => state.auth.status)


  const NavClass = ({ isActive }) =>
    `cursor-pointer px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 rounded-md ` +
    (isActive ? "text-cyan-400 bg-gray-900/50" : "text-gray-300 hover:text-cyan-300 hover:bg-gray-800");

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <nav className="w-full">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-end md:justify-between mx-auto p-4 px-6 md:px-10">
          
          <Link to="/" className="flex items-center">
            <img src={img} alt="Logo" className="h-10 w-auto" />
          </Link>

          <div className="flex items-center space-x-1 md:space-x-3 font-medium">
            <NavLink to="/" className={NavClass}>
              Home
            </NavLink>
            <NavLink to="/all-posts" className={NavClass}>
              Blogs
            </NavLink>
            <NavLink to="/add-post" className={NavClass}>
              Create
            </NavLink>
          </div>

          <div className="flex items-center">
            {authStatus ? (
                <LogoutBtn />
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-cyan-600 hover:bg-black hover:font-medium hover:text-cyan-300 focus:ring-4 focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-200"
                >
                  Login
                </Link>
              )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;