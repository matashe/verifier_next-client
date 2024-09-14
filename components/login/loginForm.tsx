'use client'

import React, { useState } from 'react'

// Server Actions
import { createSession } from '@/server_actions/api/session.actions'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await createSession(email, password)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-black'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className='bg-blue-500 hover:bg-blue-300 hover:text-blue-800'
        type='submit'
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
