import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFirebase } from '../Firebase/FireBase';
import { useNavigate } from 'react-router-dom';

const Lawyer = () => {
  const firebase = useFirebase()
  const [login,setLogin] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    specialization: '',
    experience: '',
    barAssociation: '',
    certificates: null,
  });
  const navigate = useNavigate()
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmit = async(data) => {
    const who = 'Lawyer'
    firebase.createUser(data,who)
    navigate('/approval')
  };
  
  const handleSignIn = async()=>{
   const user =await firebase.signIn(email,password)    
   console.log(user);
   setEmail('')
   setPassword('')
   navigate('/approval')
  }
  const handleFileUpload = (e) => {
    setFormData({ ...formData, certificates: e.target.files[0] });
  };

  return (
    <>
    <div className='flex justify-center'>
      <div className='flex-flex-col'>
        <h2 className='text-center text-xl mt-6 border-b border-gray-600 p-2'>Lawyer Registration or <span className='text-blue-600 underline cursor-pointer' onClick={()=>setLogin(!login)}>login</span></h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex'>
         {step === 1 && (
          <div className='flex flex-col'>
            <h3 className='text-lg text-center'><span className='text-blue-600'>Step 1</span>: Basic Information</h3>
            <input
              type="text"
              placeholder="Name"
              {...register('name')}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <input
              type="tel"
              placeholder="Phone"
              {...register('phone')}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <button type="button" onClick={nextStep} className='bg-blue-600 p-1 rounded-md mt-1 hover:bgzz-pink-600'>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className='flex flex-col'>
            <h3 className='text-lg text-center'><span className='text-blue-600'>Step 2</span>: Professional Information</h3>
            <input
              type="text"
              placeholder="Specialization"
              {...register('specialization')}
              value={formData.specialization}
              onChange={(e) =>
                setFormData({ ...formData, specialization: e.target.value })
              }
              className='bg-[#161616] p-1 mt-2 focus:outline-none rounded-sm m-2 w-[20rem]'

            />
            <input
              type="number"
              placeholder="Years of Experience"
              {...register('experience')}
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <input
              type="text"
              placeholder="Bar Association"
              {...register('barAssociation')}
              value={formData.barAssociation}
              onChange={(e) =>
                setFormData({ ...formData, barAssociation: e.target.value })
              }
              className='bg-[#161616] p-1 focus:outline-none rounded-sm m-2 w-[20rem]'
            />
            <div className="flex justify-between mt-5">
            <button type="button" onClick={prevStep} className='bg-blue-600 px-10 py-2 rounded-lg'>
                Back
              </button>
              <button type="button" onClick={nextStep} className='bg-blue-600 px-10 py-2 rounded-lg'>next</button>
           </div>
          </div>
        )}

        {step === 3 && (
          <div className='flex flex-col'>
            <h3 className='text-lg text-center'><span className='text-blue-600'>Step 3</span>:Upload Certificates</h3>
            {/* <label > degree certificate:</label> */}
            <input
              type="file"
              {...register('certificates')}
              onChange={handleFileUpload}
              className='mt-7'
            />
            
           <div className="flex justify-between mt-5">
            <button type="button" onClick={prevStep} className='bg-blue-600 px-10 py-2 rounded-lg'>
                Back
              </button>
              <button type="submit" className='bg-blue-600 px-10 py-2 rounded-lg'>Submit</button>
           </div>
          </div>
        )}
      </form>
      </div>
      {
       <div className="absolute mt-20">
        { login&&(
          <div className='w-[30rem] h-[20rem]  rounded-lg '>

            <div className="flex justify-center gap-5">
              <h1 className='text-center  text-lg ml-10 '>Login as lawyer or</h1>
              <button onClick={()=>setLogin(false)} className='text-red-600 text-xl'>close</button>
            </div>

            <div>
            <div className='pl-6 pr-6  ' >
                  <div className='mt-4 p-1 text-center text-[18px]'>Sign In to Your Account</div>

                    <div className='mt-6  mb-2 flex flex-col'>
                        <label >EMAIL</label>
                        <input type="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500 '
                        />
                    </div>

                    <div className='  flex flex-col'>
                        <label >PASSWORD</label>
                        <input type="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='border mt-1 p-1 rounded-sm border-gray-500 focus:outline-none focus:border-blue-500 '
                        />
                    </div>
                    <button className='p-1 bg-blue-400 w-full rounded-sm mt-2 text-black' onClick={handleSignIn}>Sign In</button>
                </div>
            </div>
          </div>
        )}
       </div>
      }
    </div>
    </>
  );
};

export default Lawyer;