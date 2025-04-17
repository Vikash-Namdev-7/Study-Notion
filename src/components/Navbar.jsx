
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import {toast} from 'react-hot-toast'
 
export default function Navbar({isLoggedIn, setisLoggedIn}) {

  return (
    <nav className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo' width={160} height={32} loading='lazy' />
        </Link>
      </div>

      <div>
        <ul className='flex gap-x-6 text-slate-300'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-x-4'>
        { !isLoggedIn &&
          <Link to='/Login'>
            <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] 
            rounded-[8px] border border-blue-800 '>
              Log in</button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to='/Signup'>
            <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] 
            rounded-[8px] border border-blue-800 '
            >Signup</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to='/'>
            <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] 
            rounded-[8px] border border-blue-800 '
              onClick={() => {
              setisLoggedIn(false);
              toast.success("Logged Out");
            }}>Logout</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to='/Dashboard'>
            <button className='bg-slate-800 text-slate-300 py-[8px] px-[12px] 
            rounded-[8px] border border-blue-800'
            >Dashboard</button>
          </Link>
        }
      </div>
    </nav>
  )
}
