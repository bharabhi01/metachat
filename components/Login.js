import React from 'react';
import Image from 'next/image';
import { useMoralis } from "react-moralis"

function Login() {
    const { authenticate, isAuthenticating } = useMoralis();

    return (
        <div className='bg-black text-white'>
            
            <div className='flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-5'>
                <Image
                className='object-cover rounded-full'
                    src ="https://i.imgur.com/WCzuaEb.png"
                    height={250}
                    width={250}
                />

                <h1 className='text-6xl font-bold font-mono pb-20 pt-16'>ENTER THE FUTURE OF MESSAGING!</h1>

                <button onClick={authenticate} className='bg-purple-500 rounded-lg p-5 font-bold hover:animate-bounce animate-pulse'>
                    LOGIN TO THE METACHAT
                </button>
            </div>

            <div className='w-full h-screen blur'>
                <Image
                    src = "https://i.pinimg.com/736x/95/0a/ec/950aecd45f489c1b1642b2e9c9adec1a.jpg"
                    layout='fill'
                    objectFit='cover'
                />
            </div>

        </div>
    );
}

export default Login;
