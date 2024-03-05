import Link from "next/link";
import Logo from "@ui/logo";

export default function NavBar () {
  return (
    <header className="flex h-100 justify-between text-white px-10">
      <div className="flex items-center">
        <Logo/>
        <Link href="/" className='px-5'>
          Countries
        </Link>
        <Link href="/visits" className='px-5'>
          Visits
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/register" className='px-5'>
          Register
        </Link>
        <Link href="/login" className='px-5'>
          Login
        </Link>
      </div>
    </header>
  )
}
