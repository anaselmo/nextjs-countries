"use client";
import Link from "next/link";
import Logo from "@ui/logo";
import { useAuthStore } from "@/app/lib/store";

export default function NavBar () {
  const { token, signOut } = useAuthStore();
  
  return (
    <header className="flex h-100 justify-between text-white px-10 text-lg">
      <div className="flex items-center">
        <Logo/>
        <Link href="/" className='px-5 hover:text-xl hover:font-bold transition-all duration-200'>
          Countries
        </Link>
        {token && (
          <Link href="/visits" className='px-5 hover:text-lg hover:font-bold transition-all duration-200'>
          Visits
        </Link>
        )}
        
      </div>
      <div className="flex items-center">
        {token
        ? <Link href="/" className='px-5 hover:text-xl hover:font-bold transition-all duration-200' onClick={signOut}>Sign out</Link> 
        :<>
          <Link href="/register" className='px-5 hover:text-xl hover:font-bold transition-all duration-200'>
            Register
          </Link>
          <Link href="/login" className='px-5 hover:text-lg hover:font-bold transition-all duration-200 '>
            Login
          </Link>
        </>
        }
      </div>
    </header>
  )
}
