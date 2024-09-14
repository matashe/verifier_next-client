'use client'

import axios from 'axios'

export const createSession = async (email: string, password: string) => {
  // create URL
  const endpoint = process.env.NEXT_PUBLIC_SERVER_ENDPOINT
  const url = new URL('/api/sessions', endpoint)

  try {
    const reqBody = {
      data: {
        email,
        password,
      },
    }

    const res = await axios.post(url.toString(), reqBody, {
      withCredentials: true,
    })
    return res
  } catch (err) {
    console.error(err)
  }
}
