"use client";
import { IonIcon } from "@ionic/react"
import { globeOutline } from "ionicons/icons"
import Link from "next/link"

export default function Logo () {
  return (
    <Link href="/">
      <IonIcon icon={globeOutline} size="large" className='py-5 h-16 w-16'/>
    </Link>
  )
}