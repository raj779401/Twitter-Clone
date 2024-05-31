import { SparklesIcon } from "@heroicons/react/outline";


export default function Feed(){
    return(
        <div className="xl:ml-[370px] border-l border-r border-grey xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center px-3 py-3 sticky border-b border-grey top-0 justify-between h-[60px]">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer" >Home</h2>
                <div className="hoverEffect  ">
                    <SparklesIcon className="h-5"/>
                </div>
            </div>
        </div>
    );
}