import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function InputHead(){
    return(
        <div className="flex border-b border-gray-200 p-3 space-x-3">
                <img className='rounded-full cursor-pointer hover:brightness-95 h-20 w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&s" alt='user-image'  />
                <div className="w-full divide-y divide-gray-300">
                    {/* Text Area Div */}
                    <div className="">
                        <textarea className="w-full border-none focus:ring-0 text-lg tracking-wide min-h-[50px] text-gray-700 placeholder-gray-700" rows="2" placeholder="What's Happening"/>
                    </div>

                    <div className="flex justify-between items-center pt-2.5">
                        {/* Emoji div */}
                        <div className="flex">
                            <PhotographIcon className=" hoverEffect p-2 "/>
                            <EmojiHappyIcon className=" hoverEffect p-2"/>
                        </div>
                        <button className="text-white bg-blue-500 h-10 font-bold shadow-md hover:brightness-95 w-20 rounded-full disabled:opacity-50" >Tweet</button>
                    </div>
                </div>
        </div>
    );
}