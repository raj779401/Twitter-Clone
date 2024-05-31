import { SearchIcon } from "@heroicons/react/solid";

export default function SearchWidget() {
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
        </div>
    );
}
