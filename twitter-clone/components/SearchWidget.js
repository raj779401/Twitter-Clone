'use client';
import { SearchIcon } from "@heroicons/react/solid";
import News from "./News";
import { useState } from "react";


export default function SearchWidget({newsResult}) {
    const [articleNum ,setArticleNum] =useState(3);
    function incArticle(){
        setArticleNum(articleNum+3);
    
    }
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className="w-full xl:w-[85%] sticky top-0 bg-white py-1.5 z-50">
                <div className="flex items-center rounded-full p-3 bg-red-500 relative">
                    <SearchIcon className="h-5 z-50 text-gray-500" />
                    <input
                        className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg w-full"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-3 w-[90%] xl:w-[75%]">
                <h2 className="font-bold text-xl px-6">What's Happening</h2>
                {newsResult.slice(0,articleNum).map((news)=>(
                   <News key={news.title} news={news}/>
                ))} 
                <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={incArticle}>Show More</button>
            </div>
           
        </div>
    );
}
