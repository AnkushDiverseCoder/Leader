"use client"
// import Hero from "@/components/Hero/Hero";
import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import ZoomParallax from '../components/ZoomParallex/Index.jsx';

function LoadingAnimation() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <video src="/leader.mp4" alt="Loading..." autoPlay muted className="object-fill w-full h-full" />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000); // 3 seconds
  }, []);
  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <main >
          <ZoomParallax/>
        </main>
      )}
    </>
  );
}