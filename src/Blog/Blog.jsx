import React from 'react';
import pic1 from './Assets/pic1.webp';
import pic2 from './Assets/pic2.jpg';
import pic3 from './Assets/pic3.jpg';
import pic4 from './Assets/pic4.png';
import pic5 from './Assets/pic5.png';
import pic6 from './Assets/pic6.jpg';
import pic7 from './Assets/pic7.jpeg';
import pic8 from './Assets/pic8.jpg';
import pic9 from './Assets/pic9.jpg';
import pic10 from './Assets/pic10.jpg';
import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-black min-h-screen'>
      <div className="blog max-w-[1440px] mx-auto p-5 text-white">
        
        
        <h1 className='font-mono text-4xl md:text-5xl font-bold mb-10 text-center'>Featured</h1>
        <a href='https://r.search.yahoo.com/_ylt=Awr1SXRc7.VmQgQAwGG7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1727554653/RO=10/RU=https%3a%2f%2fwww.livelaw.in%2fhigh-court%2fdelhi-high-court%2findustrial-disputes-act-beneficial-legislationstrict-timelines-commercial-courts-act-cpc-ought-not-apply-delhi-high-court-256771/RK=2/RS=TBccUGcy.FbcvdyFhuPzEIlOTqw-'>
          <div className="box flex justify-center items-center px-5 relative group">
            <div className='feature flex flex-col md:flex-row justify-center bg-slate-800 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg rounded-lg'>
              <div className='feature-img w-full md:w-1/2'>
                <img src={pic1} alt="featured" className='rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full h-full object-cover' />
              </div>
              <div className='feature-content p-5 text-white w-full md:w-1/2'>
                <h1 className='text-2xl md:text-3xl font-bold'>Industrial Disputes Act Is Beneficial Legislation; Strict Timelines Under Commercial Courts Act Or CPC Ought Not To Apply: Delhi High Court</h1>
                
              </div>
            </div>
          </div>
        </a>

        
        <h1 className='font-mono text-4xl md:text-5xl font-bold mt-16 mb-10 text-center'>Blogs</h1>
        <div className="bloglist grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">

        
          <a href='https://r.search.yahoo.com/_ylt=AwrKEqUX8OVmNgQAT5y7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1727554840/RO=10/RU=https%3a%2f%2fblog.ipleaders.in%2fcommercial-court-act-2015-a-guide%2f/RK=2/RS=a9YMc9v4xbQN4NTbHsdtBYS1.Ts-' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic2} alt="blog-1" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'> The Commercial Courts Act, 2015</p>
            </div>
          </a>

          <a href='https://r.search.yahoo.com/_ylt=AwrKB1Oa8uVmhAQAGiu7HAx.;_ylu=Y29sbwNzZzMEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1727555483/RO=10/RU=https%3a%2f%2fblog.ipleaders.in%2farbitration-conciliation-amendment-act-2019-key-amendments-critical-analysis%2f/RK=2/RS=Voy6wNkk2Axe68gg6nUm2A3suLI-' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic3} alt="blog-2" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Arbitration and Conciliation Act, 1996 (Amended in 2015 and 2019)</p>
            </div>
          </a>

          <a href='https://r.search.yahoo.com/_ylt=Awr1QJ3o8eVmQAQAW5y7HAx.;_ylu=Y29sbwNzZzMEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1727555304/RO=10/RU=https%3a%2f%2fblog.ipleaders.in%2fspecific-relief-amendment-act-2018-overview-new-scheme-breaking-controversy%2f/RK=2/RS=TGsxCfSeLyDshpTJp2VeRv4hAAg-' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic4} alt="blog-3" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Specific Relief Act, 1963 (Amended in 2018)</p>
            </div>
          </a>

          <a href='https://r.search.yahoo.com/_ylt=Awr1QJ3V8uVmQAQA_1W7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1727555541/RO=10/RU=https%3a%2f%2fblog.ipleaders.in%2fall-need-know-about-insolvency-bankruptcy-code%2f/RK=2/RS=XO2Itu5nSyhEnvpFgZ97eeBYpIM-' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic5} alt="blog-4" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Insolvency and Bankruptcy Code, 2016 (IBC)</p>
            </div>
          </a>

          <a href='https://r.search.yahoo.com/_ylt=AwrPqHNQ8.VmLwQA_oC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1727555664/RO=10/RU=https%3a%2f%2fblog.ipleaders.in%2foverview-companies-companies-act-2013%2f/RK=2/RS=Kxsz_h6C5WVRjyLjheoog5C4jrk-' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic6} alt="blog-5" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Companies Act, 2013</p>
            </div>
          </a>

          <a href='https://blog.ipleaders.in/the-competition-act-2002/' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic7} alt="blog-6" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Competition Act, 2002</p>
            </div>
          </a>

          <a href='https://blog.ipleaders.in/analysis-of-the-indian-contract-act-1872/' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic8} alt="blog-7" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'> The Indian Contract Act, 1872</p>
            </div>
          </a>

          <a href='https://blog.ipleaders.in/the-sale-of-goods-act-1930/' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic9} alt="blog-8" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Sale of Goods Act, 1930</p>
            </div>
          </a>

          <a href='https://blog.ipleaders.in/negotiable-instruments-act-1881/' className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
              <img src={pic10} alt="blog-9" className='h-48 w-full object-cover'/>
              <p className='p-4 text-lg'>The Negotiable Instruments Act, 1881</p>
            </div>
          </a>

        </div>
      </div>
    </div>
    </>
  );
}

export default Blog;
