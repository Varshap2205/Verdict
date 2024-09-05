import React, { useState } from 'react'

const Auth = () => {
    const [createAccount,setCreateAccount] = useState(false);
    const [eamil , setEmail] = useState('')
    const [password , setPassword] = useState('')
  return (
    <div className='flex justify-center mt-[5rem] w-full  '>
       <div className='p-1 w-[22rem] border border-dashed rounded-md '>
           {createAccount?(
                 <div className='pl-6 pr-6  ' >
                 <div className='mt-4 p-1 text-center text-[18px]'>Create Account</div>
                 <div className='mt-6  mb-2 flex flex-col'>
                     <label >EMAIL</label>
                     <input type="email" 
                      value={eamil}
                      onChange={(e)=>setEmail(e.target.value)}
                      className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-orange-400 '
                     />
                 </div>
                 <div className='  flex flex-col'>
                     <label >PASSWORD</label>
                     <input type="password" 
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-orange-400 '
                     />
                 </div>
                 <div className="flex justify-between mt-2">
                     <input type="checkbox" className='' />
                     <a href="/forget" className='hover:text-orange-400'>Forget password?</a>
                 </div>
                 <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>Sign Up</button>
             <div>
                 <p className='mt-5 pt-4 font-semibold text-[15px] text-center border-t border-dashed'>Or sign in with </p>
             <div className='flex flex-col'>
                 <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>GOOGLE</button>
                 <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>GITHUB</button>
             </div>
             
             </div>
         </div>
            ):(
                <div className='pl-6 pr-6  ' >
                    <div className='mt-4 p-1 text-center text-[18px]'>Sign In to Your Account</div>
                    <div className='mt-6  mb-2 flex flex-col'>
                        <label >EMAIL</label>
                        <input type="email" 
                         value={eamil}
                         onChange={(e)=>setEmail(e.target.value)}
                         className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-orange-400 '
                        />
                    </div>
                    <div className='  flex flex-col'>
                        <label >PASSWORD</label>
                        <input type="password" 
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-orange-400 '
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <input type="checkbox" className='' />
                        <a href="/forget" className='hover:text-orange-400'>Forget password?</a>
                    </div>
                    <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>Sign In</button>
                <div>
                    <p className='mt-5 pt-4 font-semibold text-[15px] text-center border-t border-dashed'>Or sign in with </p>
                <div className='flex flex-col'>
                    <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>GOOGLE</button>
                    <button className='p-1 bg-orange-400 w-full rounded-sm mt-2 text-black'>GITHUB</button>
                </div>
                
                </div>
            </div>
            )}  

            <div className='h-[2rem] mt-5 bg-[#161616] justify-center '>
                <p className='bg-[#161616] text-center'>New user? 
                    <button onClick={()=>setCreateAccount(!createAccount)}  className='p-1 text-orange-400 font-semibold hover:text-blue-500'>{createAccount?"Sign in":"Sign up"}</button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Auth