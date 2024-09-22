'use server'

// Libraries
import Image from 'next/image'
import { VscAzure } from 'react-icons/vsc'

// Components
import LoginForm from '@/components/login/loginForm'

// Functions
import { getAzureLoginUrl } from '@/server_actions/oauth/azure.oauth'

const LoginPage = async () => {
  const azureLoginUrl = await getAzureLoginUrl()

  console.log(azureLoginUrl)

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-black'>
      <LoginForm />

      <a href={azureLoginUrl}>
        <button className='text-blue-500 bg-white mt-2 px-4 py-2 rounded-md text-2xl flex gap-3 items-center'>
          <VscAzure /> Login with EntraID
        </button>
      </a>
    </div>
  )
}

export default LoginPage
