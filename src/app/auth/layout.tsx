import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  // Remove the redirect during registration process
  // const user = await currentUser()
  // if (user) redirect('/')

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/logo.png"
            alt="Chatvise Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold">Chatvise</span>
        </div>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Willkommen bei Chatvise!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Revolutionieren Sie Ihren Kundenservice mit KI-gestützter Automatisierung
        </p>
        <Image
          src="/images/bot-ui.png"
          alt="Chatvise Interface"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

export default Layout
