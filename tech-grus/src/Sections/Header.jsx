import React from 'react';

const Header = () => {
  return (

      <header style={{position:'absolute', zIndex:'100000'}} className="w-full justify-between px-20 py-7 items-center inline-flex">
          <div className="text-3xl justify-start font-spy-agency items-center  flex">
              <img src="/logo.svg"/>
              <div className="text-white text-4xl font-normal font-['Spy Agency'] capitalize leading-10">TechGrus</div>
          </div>
          <div
              className="font-inter self-stretch px-7 py-2.5 bg-white/20 rounded-[899.10px] shadow backdrop-blur-[10.80px] justify-center items-center gap-7 flex">
              <div className="text-center text-white text-sm font-medium  ">Home</div>
              <div className="justify-start items-center flex">
                  <div className="text-center text-white text-sm font-medium  ">About</div>
                  <div
                      className="w-5 h-5 px-[2.50px] py-[1.67px] flex-col justify-center items-center gap-[0px] inline-flex"/>
              </div>
              <div className="justify-start items-center flex">
                  <div className="text-center text-white text-sm font-medium ">Portfolio</div>
                  <div
                      className="w-5 h-5 px-[2.50px] py-[1.67px] flex-col justify-center items-center gap-[0px] inline-flex"/>
              </div>
              <div className="justify-start items-center flex">
                  <div className="text-center text-white text-sm font-medium ">Restaurants</div>
                  <div
                      className="w-5 h-5 px-[2.50px] py-[1.67px] flex-col justify-center items-center gap-[0px] inline-flex"/>
              </div>
              <div className="justify-start items-center flex">
                  <div className="text-center text-white text-sm font-medium ">Shoots</div>
                  <div
                      className="w-5 h-5 px-[2.50px] py-[1.67px] flex-col justify-center items-center gap-[0px] inline-flex"/>
              </div>
          </div>
          <div className="font-inter justify-end items-center gap-[33.75px] flex">
              <div className="text-white text-sm font-medium font-['Inter'] ">Call Us</div>
              <div
                  className="px-[21.06px] py-[12.96px] bg-white rounded-[4.86px] shadow justify-center items-center gap-[8.10px] flex">
                  <div className="text-center font-medium text-black text-sm  ">EXPLORE THE
                      PACKAGES
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Header;
