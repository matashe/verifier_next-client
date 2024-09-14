'use server'

// Libraries
import Image from 'next/image'
import { VscAzure } from 'react-icons/vsc'

// Components
import LoginForm from '@/components/login/loginForm'

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-black'>
      <LoginForm />

      {/* <button className='text-blue-500 bg-white mt-2 px-4 py-2 rounded-md text-2xl flex gap-3 items-center'>
        <VscAzure /> Login with EntraID
      </button> */}
    </div>
  )
}

export default LoginPage
