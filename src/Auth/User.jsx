import React, { useEffect, useState } from 'react';
import { useFirebase } from '../Firebase/FireBase';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [createAccount, setCreateAccount] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const firebase = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        if (firebase.isLoggedIn) {
            navigate('/profile');
        }
    }, [firebase.isLoggedIn, navigate]);

    const handleSignIn = async () => {
        setError(null); // Reset error state
        try {
            await firebase.signIn(email, password);
            // Redirect after successful login
            navigate('/profile');
            // Reset fields
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.message); // Set error message to state
            console.log('Sign-in error:', error.message);
        }
    };

    const handleSignUp = async () => {
        const who = 'user';
        const data = {
            email,
            password,
            name,
        };
        try {
            await firebase.createUser(data, who);
            // Reset fields after successful signup
            setEmail('');
            setPassword('');
            setName('');
        } catch (error) {
            setError(error.message); // Set error message to state
            console.log('Sign-up error:', error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await firebase.SignInWithGoogle();
        } catch (error) {
            console.log('Google sign-in error:', error.message);
        }
    };

    // const handleGitHubSignIn = async () => {
    //     try {
    //         await firebase.SignInWithGitHub();
    //     } catch (error) {
    //         console.log('GitHub sign-in error:', error.message);
    //     }
    // };

    return (
        <div className='flex justify-center mt-[5rem] w-full'>
            <div className='p-1 w-[22rem] border border-dashed rounded-md'>
                {error && <p className='text-red-500 text-center'>{error}</p>} {/* Display error message */}
                {createAccount ? (
                    <>
                        <div className='pl-6 pr-6'>
                            <div className='mt-4 p-1 text-center text-[18px]'>Create Account</div>
                            <div className='mt-6 mb-2 flex flex-col'>
                                <label>NAME</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className='mt-6 mb-2 flex flex-col'>
                                <label>EMAIL</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label >PASSWORD</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <input type="checkbox" className='' />
                                <a href="/forget" className='hover:text-blue-500'>Forget password?</a>
                            </div>
                            <button className='p-1 bg-blue-400 w-full rounded-sm mt-2 text-black' onClick={handleSignUp}>Sign Up</button>
                            <div>
                                <p className='mt-5 pt-4 font-semibold text-[15px] text-center border-t border-dashed'>Or sign in with</p>
                                <div className='flex flex-col'>
                                    <button className='p-1 bg-blue-500 w-full rounded-sm mt-2 text-black' onClick={handleGoogleSignIn}>GOOGLE</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='pl-6 pr-6'>
                            <div className='mt-4 p-1 text-center text-[18px]'>Sign In to Your Account</div>
                            <div className='mt-6 mb-2 flex flex-col'>
                                <label>EMAIL</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>PASSWORD</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <input type="checkbox" className='' />
                                <a href="/forget" className='hover:text-blue-500'>Forget password?</a>
                            </div>
                            <button className='p-1 bg-blue-500 w-full rounded-sm mt-2 text-black' onClick={handleSignIn}>Sign In</button>
                            <div>
                                <p className='mt-5 pt-4 font-semibold text-[15px] text-center border-t border-dashed'>Or sign in with</p>
                                <div className='flex flex-col'>
                                    <button className='p-1 bg-blue-400 w-full rounded-sm mt-2 text-black' onClick={handleGoogleSignIn}>GOOGLE</button>
                                    {/* <button className='p-1 bg-blue-400 w-full rounded-sm mt-2 text-black' onClick={handleGitHubSignIn}>GITHUB</button> */}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className='h-[2rem] mt-5 bg-[#161616] justify-center'>
                    <p className='bg-[#161616] text-center'>New user?
                        <button onClick={() => setCreateAccount(!createAccount)} className='p-1 text-blue-400 font-semibold hover:text-blue-500'>{createAccount ? "Sign in" : "Sign up"}</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Auth;
