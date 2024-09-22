'use server'

import axios, { AxiosRequestConfig } from 'axios'
import { cookies, headers } from 'next/headers'

// Types
import { User, Users } from '@/types/user.type'

type UserInData = {
  data: User
}

export const getUserById = async (id: string) => {
  const response: UserInData = await axios.get(
    `http://localhost:1337/api/users/${id}`
  )
  return response.data
}

export const getUsers = async () => {
  const cookieHandler = cookies()
  const jwt = cookieHandler.get('jwt')

  if (jwt !== undefined) {
    const response: Users = await axios.get('http://localhost:1337/api/users', {
      headers: {
        Cookie: `jwt=${jwt.value}`,
      },
    })

    return response.data
  }

  return []
}
