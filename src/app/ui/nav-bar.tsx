
"use client";
import { IonIcon } from "@ionic/react";
import { globeOutline } from "ionicons/icons";
import Link from "next/link";

export default function NavBar () {
  return (
    <header className="flex h-200 justify-between bg-gray-900 px-10 border border-red-500">
        <div className="flex items-center">
        <Link href="/">
          <IonIcon icon={globeOutline} size="large" className='py-5 h-16 w-16'/>
        </Link>
          <button className='px-5'>Countries</button>
        </div>
        <div className="flex items-center">
          <button className='flex px-5'>Login</button>
          <button className='flex px-5'>Register</button>
        </div>
      </header>
  )
}
