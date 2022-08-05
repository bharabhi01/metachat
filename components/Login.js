import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate, isAuthenticating } = useMoralis()

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex h-screen justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url('https://i.imgur.com/uA1sqby.jpg')`,
          }}
        >
          <div className="flex h-full items-center bg-gray-900 bg-opacity-60 px-20">
            <div>
              <h2 className="text-4xl font-bold text-white">Welcome to the Future of Messaging.</h2>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-center text-4xl font-bold text-gray-700 dark:text-white">
                MetaChat
              </h2>
              
            </div>

            <div className="mt-8">
                <div className="mt-6">
                  <button
                    onClick={ authenticate }
                    className="w-full transform rounded-md bg-red-500 px-4 py-2 tracking-wide text-white hover:bg-red-400 focus:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
                  >
                    Sign in with Metamask
                  </button>
                </div>

              <p className="mt-6 text-center text-sm text-gray-400">
                Don&#x27;t have an account yet?{' '}
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  className="text-blue-500 hover:underline focus:underline focus:outline-none"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
