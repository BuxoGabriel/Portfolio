import Navbar from "@/components/navbar"
import { } from "next/font/google"

export default function Home() {
  return (
    <main className=" h-screen w-screen bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800">
      <Navbar />
      <div className="w-full p-10 text-slate-100">
        <div className="flex flex-row">
          <div /* Left Side */ className="flex-grow">
            <div className=" w-96">
              <div className=" text-8xl">
                Gabriel Buxo,
                <br />
                Software Engineer
              </div>
              <p className="w-96">Coding for over a decade. AI/ML enthusiast and fullstack dev</p>
            </div>
          </div>
          <div /* Right Side */>
            <div className="max-w-96 rounded-xl border-black border-4 p-8">
              <h1 className="text-center text-xl">Skills</h1>
              <ul className=" list-item">
                <li>Algorithmic Problem Solving</li>
                <li>Fullstack Development</li>
                <li>AI/ML</li>
                <li>Multiple Coding Languages</li>
                <li>Testing</li>
                <li>DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}