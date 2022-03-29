import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link';
const Navbar = () => {
    
    return (
        
        <nav className='header'>
            <h1 className='logo'>
                <a href="#">NextAuth</a>
            </h1>
            <ul className="main-nav">
                <li>
                    <Link href='/'>
                    <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a>blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signin" passhref>
                    <button onClick={()=> signIn('chiquitin mañoso')}>Sign in</button>
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signout" passhref>
                    <button onClick={()=> signOut()}>Sign out</button>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;