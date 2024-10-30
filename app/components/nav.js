import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black-500 ">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="text-3xl font-bold leading-none flex items-center space-x-3 cursor-pointer">
          <div className="text-3xl font-bold leading-none cursor-pointer flex items-center">
          <Image 
            src="/plumbing.png" 
            alt="logo" 
            width={100} // Increased width
            height={100} // Increased height
            className="h-24 w-24" // Apply larger Tailwind size classNamees
            style={{ width: '100px', height: '100px' }} // Inline style for consistent sizing
          />
        </div>            
        <span className='text-black hidden lg:flex' >Sinani Piping & Heating </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden navbar-burger flex items-center text-blue-600 p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center ml-8 xl:ml-72 mr-auto space-x-4 xl:space-x-6">
          <li className="p-3 xl:p-6 active relative group">
            <Link href="/">
            <span className="relative text-black">Home</span>
            </Link>
            <div className="absolute left-0 right-0 bottom-2 h-1 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
          <li className="p-3 xl:p-6 relative group">
            <Link href="/services">
              <span className="relative text-black">Services</span>
            </Link>
            <div className="absolute left-0 right-0 bottom-2 h-1 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
          <li className="p-3 xl:p-6 relative group">
            <Link href="/about">
              <span className="relative text-black">Do We Serve In Your Area ?</span>
            </Link>
            <div className="absolute left-0 right-0 bottom-2 h-1 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
         
          <li className="p-3 xl:p-6 relative group">
            <Link href="/contacts">
              <span className="relative text-black">Contact</span>
            </Link>
            <div className="absolute left-0 right-0 bottom-2 h-1 bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
        </ul>

        {/* Sign In / Sign Up Buttons for Desktop */}
        <div className="hidden lg:flex space-x-4">
        <span className="inline-block transform text-gray-400 mt-2 hover:scale-105 transition-transform duration-300">Leave A Review</span>
        <Link href="https://www.yelp.com/biz/sinani-piping-and-heating-staten-island" passHref>
      <div className="flex items-center space-x-2 py-2 px-6 bg-gray-100 hover:bg-red-300 text-sm text-white font-bold rounded-xl transition duration-200 cursor-pointer">
     
        <svg
          width="20px"
          height="20px"
          viewBox="-6 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Yelp-color</title>
          <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Color-" transform="translate(-306.000000, -760.000000)" fill="#D32200">
              <path
                d="M306.916951,783.108522 C306.149772,784.358008 305.82659,788.292467 306.090874,790.903939 C306.184506,791.76643 306.338546,792.484922 306.560545,792.913918 C306.867115,793.506411 307.383601,793.860408 307.972577,793.879907 C308.350126,793.900907 308.584206,793.834908 315.676081,791.517432 C315.676081,791.517432 318.827857,790.497443 318.841449,790.489943 C319.62675,790.288945 320.155318,789.553953 320.208175,788.614963 C320.258012,787.654973 319.768709,786.804482 318.963775,786.498486 C318.963775,786.498486 316.743788,785.577496 316.737748,785.577496 C309.117305,782.384029 308.776001,782.258031 308.390901,782.253531 C307.803435,782.231031 307.277888,782.531028 306.916951,783.108522 Z M323.965238,806.903819 C324.089074,806.542323 324.102665,806.291825 324.123808,798.721406 C324.123808,798.721406 324.141931,795.377941 324.143441,795.341942 C324.193277,794.52445 323.67377,793.778958 322.81598,793.441462 C321.935536,793.097966 320.988644,793.310963 320.457055,793.985956 C320.457055,793.985956 318.903065,795.860936 318.897024,795.860936 C313.555465,802.231369 313.336487,802.525365 313.2051,802.903361 C313.12657,803.128359 313.093346,803.362357 313.122039,803.597854 C313.153753,803.93385 313.301752,804.269847 313.552445,804.578844 C314.789294,806.075828 320.72738,808.295804 322.622675,807.967308 C323.28263,807.844309 323.759851,807.467813 323.965238,806.903819 Z M336.006625,804.269547 C337.796206,803.545055 341.703079,798.497608 341.977935,796.555129 C342.071567,795.880136 341.86467,795.296642 341.405571,794.926146 C341.106553,794.696649 340.873983,794.60665 333.788149,792.244175 C333.788149,792.244175 330.680168,791.200186 330.639393,791.180686 C329.888826,790.885189 329.028015,791.156686 328.45112,791.884179 C327.853083,792.626671 327.759451,793.60316 328.238183,794.345652 L329.490134,796.41413 C333.699047,803.357557 334.019208,803.848051 334.322758,804.088049 C334.790918,804.463045 335.385935,804.524544 336.006625,804.269547 Z M332.347423,786.397837 C340.401292,784.416358 340.712392,784.309859 341.031043,784.098361 C341.517326,783.766865 341.761977,783.207371 341.721202,782.526378 C341.721202,782.503878 341.724222,782.482878 341.721202,782.457379 C341.514305,780.4504 338.046898,775.221456 336.340378,774.373965 C335.7363,774.078468 335.129202,774.099467 334.630837,774.439964 C334.319737,774.646962 334.088677,774.957458 329.777071,780.948395 C329.777071,780.948395 327.82741,783.646866 327.804757,783.672366 C327.289781,784.305359 327.28525,785.217349 327.785124,785.997341 C328.304631,786.804332 329.183565,787.197328 329.988499,786.970831 C329.988499,786.970831 329.955274,787.02783 329.946213,787.03983 C330.343394,786.885332 331.054696,786.709833 332.347423,786.397837 Z M324.258669,779.640709 C324.121241,776.399243 323.162267,761.957396 323.049003,761.286904 C322.882881,760.68241 322.419251,760.248915 321.747215,760.076416 C319.69335,759.557422 311.835806,761.796898 310.378468,763.323882 C309.911818,763.818877 309.736636,764.43087 309.877084,764.969364 C310.105123,765.449359 319.844369,781.013194 319.844369,781.013194 C321.285095,783.384669 322.458516,783.017173 322.842106,782.895674 C323.224185,782.774175 324.391566,782.406679 324.258669,779.640709 Z"
                ></path>
            </g>
          </g>
        </svg>
      </div>
    </Link>
          
          <Link href="https://www.google.com/search?q=sinani+piping+and+heating+staten-island+reviews&rlz=1C1VDKB_enUS946US946&oq=sin&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIICAEQRRgnGDsyBggCEEUYOzIKCAMQLhixAxiABDIKCAQQLhixAxiABDIGCAUQRRhBMgYIBhBFGEEyBggHEEUYPNIBBzUyNGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x89c249c5be1c9955:0xe3c032894b19a569,1,,,," passHref>
            <div className="flex items-center space-x-2 py-2 px-6 bg-gray-100 hover:bg-blue-300 text-sm text-white font-bold rounded-xl transition duration-200 cursor-pointer">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="-0.5 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                 >       
          <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Color-" transform="translate(-401.000000, -860.000000)">
              <g id="Google" transform="translate(401.000000, 860.000000)">
                <path
                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                  id="Fill-1"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                  id="Fill-2"
                  fill="#EB4335"
                ></path>
                <path
                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                  id="Fill-3"
                  fill="#34A853"
                ></path>
                <path
                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                  id="Fill-4"
                  fill="#4285F4"
                ></path>
              </g>
            </g>
          </g>
                </svg>
              </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-menu fixed inset-0 z-50 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r shadow-lg overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" passHref>
            <div className="text-3xl font-bold leading-none cursor-pointer flex items-center">
            <Image 
              src="/plumbing.png" 
              alt="logo" 
              width={100} // Increased width
              height={100} // Increased height
              className="h-24 w-24" // Apply larger Tailwind size classNamees
              style={{ width: '100px', height: '100px' }} // Inline style for consistent sizing
            />
          </div>
            </Link>
            <button className="navbar-close" onClick={() => setIsOpen(false)}>
              <svg className="h-6 w-6 text-black cursor-pointer hover:text-gray-500" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul>
            <li className="mb-1">
              <Link href="/" passHref>
                <div className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer">Home</div>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/about" passHref>
                <div className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer">Services</div>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/services" passHref>
                <div className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer">Services</div>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/pricing" passHref>
                <div className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer">Pricing</div>
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/contact" passHref>
                <div className="block p-4 text-sm font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded cursor-pointer">Contact</div>
              </Link>
            </li>
          </ul>
          <div className="mt-auto">
            <Link href="/signin" passHref>
              <div className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer">Sign In</div>
            </Link>
            <Link href="/signup" passHref>
              <div className="block px-4 py-3 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer">Sign Up</div>
            </Link>
          </div>
          <p className="my-4 text-xs text-center text-black">
            <span>© 2021 Company Name</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
