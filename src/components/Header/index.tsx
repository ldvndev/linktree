import { Link } from "react-router-dom";
import { authorization } from '../../services/firebase';
import { signOut } from 'firebase/auth'

import { BiLogOut } from 'react-icons/bi';

async function handleLogout() {
  await signOut(authorization)
}

export function Header() {
  return(
    <header className="w-full max-w-2xl mt-10 px-1" >
      <nav className="flex items-center justify-between">
        <div className="flex gap-7 text-white text-base font-medium">
          <Link to='/'>Home</Link>
          <Link to='/social-media'>Social Media</Link>
        </div>

        <button onClick={handleLogout}>
          <BiLogOut size={25} color='rgb(192 132 252)'/>
        </button>
      </nav>
    </header>
  );
}