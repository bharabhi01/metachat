import React from 'react';
import Image from 'next/image';
import { useMoralis } from "react-moralis"

function Login() {
    const { authenticate, isAuthenticating } = useMoralis();

    return (
        <div className='bg-black relative text-white'>
            
            <h1>I am the login screen</h1>
            
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-5'>
                <Image
                className='object-cover rounded-full'
                    src ="https://i.imgur.com/WCzuaEb.png"
                    height={200}
                    width={200}
                />

                <h1 className='font-sans text-7xl pb-8 pt-8'>Welcome to the future of Messaging</h1>

                <button onClick={authenticate} className='bg-purple-500 rounded-lg p-5 font-bold animate-pulse'>
                    Login to the MetaChat
                </button>
            </div>

            <div className='w-full h-screen'>
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
