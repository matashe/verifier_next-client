'use server'

import axios from 'axios'
import { cookies } from 'next/headers'

export const createSession = async (email: string, password: string) => {
  // create URL
  const endpoint =
    process.env.NEXT_ENV === 'development'
      ? process.env.DEV_SERVER_ENDPOINT
      : process.env.SERVER_ENDPOINT

  const url = new URL('/api/sessions', endpoint)

  try {
    // send request
    const res = await axios.post(url.toString(), {
      data: {
        email,
        password,
      },
    })

    if (res.status === 401) {
      throw new Error('Wrong email or password')
    }

    if (res.status === 201) {
      // create cookie handler
      const cookieHandler = cookies()

      // get token from response
      const token = String(res.headers['set-cookie'])
        .split(';')[0]
        .split('=')[1]

      // set cookie from request to client
      if (res.headers['set-cookie']) {
        cookieHandler.set('jwt', token, {
          httpOnly: true,
          secure: process.env.NEXT_ENV === 'production' ? true : false,
        })
      }

      // return response data
      return res.data
    } else {
      return {}
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
