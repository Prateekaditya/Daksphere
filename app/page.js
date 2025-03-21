import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/space.jpeg')]  bg-cover bg-center h-screen text-white">
      <div >
        <Navbar/>
      </div>
      <div className="flex flex-col gap-1.5 text-6xl w-150 pl-8 mt-35">
        <h2>Coming Soon:</h2>
        <h2>DAKSphere-Your Goals</h2>
      </div>
      <div className="flex flex-col gap-3 mt-4 ml-1.5">
        <p className="w-150 pl-8 text-[#87898F]">Experience the future of goal-setting and achievement with DAKSphere, a revolutionary platform that empowers you to reach new heights</p>
        <div className=" flex ml-8 gap-8 mt-4.5">
          <button className="bg-[#E3C7E0] w-45 p-1.5 rounded-3xl text-[#0b072a]">Explore Now</button>
          <button className="bg-transparent border-1 w-45 rounded-3xl p-1.5">Join the Journey</button>
        </div>
      </div>
      </div>
      <div>
        heasl
      </div>
    </>

  );
}
