import React, { useState } from 'react'

export const Form = () => {
        const [email , setEmail] = useState("")
        const SubmitEvent = (e)=>{
            let data = {
                Email : email
            }
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            })
        }
    return (
        <>
            <div className=' w-full h-screen'>
                <div className='p-4 rounded bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  text-center shadow-md'>
                    
                        <div className='px-3 py-2 font-serif font-bold'>Send Email..</div>

                        <div className='w-full my-3'>
                            <input
                                type="email"
                                value={email}
                                // onChange={setEmail}
                                required
                                placeholder='Enter your Email.....'
                                className='bg-black shadow-lg p-4 text-white py-3 font-serif rounded w-1/3'
                            />
                        </div>
                        <div className='my-3 w-full'>
                            <input
                                type="password"
                                required
                                placeholder='Enter your password.....'
                                className='bg-black shadow-lg p-4 text-white py-3 font-serif rounded w-1/3'
                            />
                        </div>
                        
                        <div className='my-3 w-full'>
                            <input
                                type="file"
                                required
                                placeholder='Attech your file.....'
                                className='bg-black shadow-lg p-4 text-white py-3 font-serif rounded w-1/3'
                            />
                        </div>
                        <div className='my-3 w-full'>
                            <button 
                            type='submit'
                            className='rounded shadow-2xl bg-zinc-500 text-blue-950 px-5 py-3 font-serif' 
                            onClick={(e)=>{SubmitEvent(e)}}>
                                Login
                            </button>
                        </div>
                    
                </div>
            </div>
        </>

    )
}
