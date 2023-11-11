import { Link } from 'react-router-dom';
import { authorization } from '../../services/firebase';
import { signOut } from 'firebase/auth';

import { BiLogOut } from 'react-icons/bi';

async function handleLogout() {
  await signOut(authorization);
}

export function Header() {
  return (
    <header className="w-full max-w-2xl mt-12 mb-8 px-1">
      <nav className="flex items-center justify-between">
        <div className="flex gap-7 text-purple-400  text-base">
          <Link className="hover:text-purple-500" to="/">Home</Link>
          <Link className="hover:text-purple-500" to="/social-media">
            Social Media
          </Link>
        </div>

        <button onClick={handleLogout}>
          <BiLogOut size={25} color="rgb(192 132 252)" />
        </button>
      </nav>
    </header>
  );
}
