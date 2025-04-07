'use client'
import React, { useRef } from "react"; // ✅ You forgot to import useRef
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";

// ✅ You had incorrect syntax here (you used `{}` instead of `()`)
gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {

  const textRef = useRef(null)
  const containerRef = useRef(null)
  const LeafRef = useRef(null)
  const girlImagRef = useRef(null)

  useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '52% 50%',
          scrub: true,
        }
      })
      tl.to( textRef.current, {
        y: -130
      }, 'a')
      .to(LeafRef.current,{
        scale: 1.2
      }, 'a')
      .to(girlImagRef.current,{
        scale:1.15
      },'a')
      .to(containerRef.current, {
        y: 400
      }, 'a')
  })

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#1E1E1E] bg-[url('https://res.cloudinary.com/dmm9zrqfs/image/upload/v1743760662/Grey_Abstract_Wall_Texture_Zoom_Virtual_Background_bovp4r.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-hidden">
<nav className="w-full fixed top-0 left-0 z-50 px-10 py-6 flex items-center justify-between bg-transparent">

{/* Logo */}
<div className="text-white font-playfair-Display text-3xl tracking-wide font-semibold">
  The Man Co.
</div>

{/* Nav Links with Golden Slash Dividers */}
<ul className="hidden md:flex items-center gap-6 text-white font-light text-sm tracking-widest uppercase">
  <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Home</li>

  <span className="text-[#D4AF37] text-lg select-none">/</span>

  <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Products</li>

  <span className="text-[#D4AF37] text-lg select-none">/</span>

  <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">About</li>

  <span className="text-[#D4AF37] text-lg select-none">/</span>

  <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Contact</li>
</ul>

{/* Mobile Icon (optional) */}
<div className="md:hidden text-white text-xl">☰</div>
</nav>



      {/* Heading - Behind the Girl but Above the Grey Arch */}
      <h1
  ref={textRef}
  className="text-[10rem] font-cinzel font-semibold text-white tracking-tight absolute top-[5rem] z-20"
>
  The Man Company
</h1>


      {/* Arched Background */}
      <div className="w-[540px] h-[674px]  background: 'linear-gradient(180deg, #1A1A1A 0%, #2B2B2B 40%, #3D3D3D 100%)' rounded-t-full absolute bottom-[-10rem] z-10"></div>

      <img
      ref={LeafRef}
        src="https://res.cloudinary.com/dmm9zrqfs/image/upload/v1743763037/Grey_Abstract_Wall_Texture_Zoom_Virtual_Background_2_g8jrli.png"
        alt="Plant Background"
        className="w-[1200px] absolute bottom-[-6rem]"
        width={1200}
        height={500}
      />
      
      <img 
        ref={girlImagRef}
        src="https://res.cloudinary.com/dnxijnw0s/image/upload/v1743778962/Grey_Abstract_Wall_Texture_Zoom_Virtual_Background_5_waxudm.png" 
        width={950} 
        height={950} 
        className="absolute bottom-0 z-30" 
      />
    </div>
  );
};

export default HeroSection;
