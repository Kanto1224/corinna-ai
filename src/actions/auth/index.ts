'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    console.log('Creating user in database:', { fullname, clerkId, type })
    
    // Check if user already exists
    const existingUser = await client.user.findUnique({
      where: { clerkId },
    })
    
    if (existingUser) {
      console.log('User already exists in database')
      return { status: 200, user: existingUser }
    }
    
    const registered = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    console.log('User created successfully:', registered)
    
    if (registered) {
      return { status: 200, user: registered }
    }
    
    return { status: 400, error: 'User creation failed' }
  } catch (error: any) {
    console.error('Database registration error:', error)
    return { 
      status: 400, 
      error: error.message || 'Database error occurred'
    }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) redirectToSignIn()
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          fullname: true,
          id: true,
          type: true,
        },
      })
      if (authenticated) {
        const domains = await onGetAllAccountDomains()
        return { status: 200, user: authenticated, domain: domains?.domains }
      }
    } catch (error) {
      return { status: 400 }
    }
  }
}