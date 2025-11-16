import Image from "next/image"
import { log } from "console"


export default function Navbar(){
    return(
        <div className="flex justify-between items-center sticky top-0 mt-2 mx-auto border-2 rounded-full border-gray-800 bg-gray-900 w-190 max-md:w-60 p-4 h-15 max-md:h-10 ">
            <div>
                <Image
                src="/logo.jpg"
                alt="logo"
                height={38}
                width={38}
                className="rounded-full max-md:h-5 max-md:w-5"
                />
            </div>
            <div className="max-md:hidden">
                <a className="text-gray-200 p-1 hover:text-gray-500 transition" href="#">/Home</a>
                <a className="text-gray-200 p-1 hover:text-gray-500 transition" href="#">/About</a>
                <a className="text-gray-200 p-1 hover:text-gray-500 transition" href="#">/Projects</a>
                <a className="text-gray-200 p-1 hover:text-gray-500 transition" href="#">/Contact</a>

            </div>
        </div>
    )
}