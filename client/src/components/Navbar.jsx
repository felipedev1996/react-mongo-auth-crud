import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

    const {isAuthenticated,logout,user} = useAuth();
  return (
   <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
    <Link to='/'>
        
        <h1 className='text-2xl font-bold'>Task Manager</h1>
    </Link>
    <ul className='flex gap-x-2'>
      {isAuthenticated ? (
        
        <>
        <li>
            Welcome {user.username}
        </li>
        <li><Link to='/add-task' className='text-blue-500 px-4 py-1 rounded-md '>Add Task</Link></li>
        <li><Link to='/' onClick={logout} className='text-red-400  px-4 py-1 rounded-md '>Logout</Link></li>
        </>
      ):(
        
        <>
        <li><Link to="/login" className='text-blue-500 px-4 py-1 rounded-md '>Login</Link></li>
        <li><Link to="/register" className='text-blue-500 px-4 py-1 rounded-md'>Register</Link></li>
        </>
      )}
    </ul>
   </nav>
  )
}

export default Navbar