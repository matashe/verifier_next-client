import { getUsers } from '@/server_actions/api/user.actions'
import { useState, useEffect } from 'react'

export default async function Home() {
  const data = await getUsers()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {data.map((user) => {
        return (
          <div key={user.id} className='flex flex-col items-center'>
            <h1>{user.email}</h1>
          </div>
        )
      })}
    </main>
  )
}
