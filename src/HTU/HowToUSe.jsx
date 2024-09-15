import React from 'react'
import Navbar from '../components/Navbar'

const HowToUse = () => {
  return (
    <>  
    <Navbar/>
    <div>
      <div className='text-center flex justify-center items-center font-serif text-[50px] sm:text-[100px] md:text-[150px] feature-heading bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent'>
        WELCOME TO VERDICT!
      </div>
      <div className='flex justify-center items-center'>
        <div className='content flex justify-center items-center text-[16px] sm:text-[20px] p-4 text-white font-mono w-[95%] sm:w-[900px] text-center'>
          We’re excited to introduce you to Verdict, your one-stop solution for understanding consumer rights and connecting with legal experts. Whether you’re a consumer seeking justice or a legal professional wanting to make a difference, Verdict has got you covered. Here’s how you can get started and make the most of our app.
        </div>
      </div>

      <div className='details'>
        <div className='n first float-none sm:float-left m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>1) Sign-Up & Explore</h2>
          <p className='text-[16px] sm:text-[20px]'>
            Getting started with Verdict is as simple as it gets! Whether you're a consumer looking to know more about your rights or a legal professional ready to assist, the sign-up process will have you exploring the platform in no time. For regular users, Verdict provides access to tools like the chatbot for legal queries and awareness of essential consumer laws. For law practitioners, once registered, you’ll be able to browse and take on cases, contributing to real-world justice!
          </p>
        </div>

        <div className='n second float-none sm:float-right m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>2) Meet Your Legal Assistant – Our Chatbot</h2>
          <p>
            Ever had a legal question but didn’t know where to ask? Our chatbot is here to help! It's like having your own legal expert available 24/7, answering your questions in real-time. Want to know about filing complaints, consumer protection laws, or warranty claims? Just ask, and we’ll provide easy-to-understand answers to help you navigate your rights.
          </p>
        </div>

        <div className='n third float-none sm:float-left m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>3) Upload Your Case Documents Easily</h2>
          <p>
            If you have a case, you can securely upload your case documents through Verdict. Whether it's a complaint about a faulty product or a bigger legal issue, uploading documents is straightforward. Rest assured, they’ll be reviewed by registered legal practitioners who can offer real-time assistance.
          </p>
        </div>

        <div className='n fourth float-none sm:float-right m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>4) Track Your Case Status in Real-Time</h2>
          <p>
            One of the standout features of Verdict is real-time case tracking. After submitting your case, you can see its status. Cases that have been taken by practitioners will be marked in green, and those still pending will be in red. This color-coding helps you stay on top of your case’s progress with just a glance.
          </p>
        </div>

        <div className='n fifth float-none sm:float-left m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>5) Direct Interaction with Legal Experts</h2>
          <p>
            Once a legal expert accepts your case, Verdict facilitates direct communication between you and the practitioner. You’ll be able to discuss your legal matter in depth through a one-on-one chat. It’s like having a lawyer right at your fingertips!
          </p>
        </div>

        <div className='n sixth float-none sm:float-right m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>6) Legal News and Updates – Stay Informed</h2>
          <p>
            Verdict isn’t just about solving cases—it’s also a platform for legal learning. Stay updated with the latest legal news, case studies, and consumer protection laws so you can always stay ahead of the game. Knowledge is power, and Verdict ensures you’re empowered.
          </p>
        </div>

        <div className='n seventh float-none sm:float-left m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>7) For Legal Practitioners: Make a Difference</h2>
          <p>
            If you’re a law practitioner or student, Verdict offers a unique opportunity to make a real impact. With a variety of cases waiting to be taken up, you can contribute your expertise and help consumers resolve their issues, all while building a solid legal reputation.
          </p>
        </div>

        <div className='n eighth float-none sm:float-right m-4 w-[95%] sm:w-[1000px] rounded-sm p-4 text-slate-300 text-[16px] sm:text-[20px] font-mono'>
          <h2 className='text-[25px] sm:text-[35px]'>8) Verdict’s Vision: Empowering Justice for Everyone</h2>
          <p>
            At Verdict, we believe everyone deserves access to justice. We’re here to make that a reality by bridging the gap between consumers and legal experts. No more complicated legal processes, no more confusion—Verdict simplifies the journey to justice for everyone.
          </p>
        </div>
      </div>
    </div>
    </>
  
  )
}

export default HowToUse
