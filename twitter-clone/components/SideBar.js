import Image from 'next/image';
import SideBarItemMenu from './SideBarItemMenu';
import {  HomeIcon } from '@heroicons/react/solid';
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline';
export default function SideBar() {
    return (
        <div className='hidden sm:flex flex-col p-2 items-start fixed h-full'>
            {/* Twitter Logo */}

            <div className='hoverEffect p-0 xl:p-1 hover:bg-blue-100'>
                <Image  className='rounded-full'
                    src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" 
                    width={50} 
                    height={50} 
                    alt="Twitter Logo"

                />
            </div>

            {/* SideBar Items */}

            <div className='mt-4 mb-2.5 xl:items-start'>
                <SideBarItemMenu text="Home" Icon={HomeIcon} active />
                <SideBarItemMenu text="Explore" Icon={HashtagIcon} />
                <SideBarItemMenu text="Notifications" Icon={BellIcon} />
                <SideBarItemMenu text="Messages" Icon={InboxIcon} />
                <SideBarItemMenu text="Bookmarks" Icon={BookmarkIcon} />
                <SideBarItemMenu text="List" Icon={ClipboardIcon} />
                <SideBarItemMenu text="Profile" Icon={UserIcon} />
                <SideBarItemMenu text="More" Icon={DotsCircleHorizontalIcon} />
            </div>

            {/* Tweet Button */}

            <button className='bg-blue-400 w-56 h-12 rounded-full shadow-md hover:brightness-90 text-white font-bold text-lg hidden xl:inline m-a '>Tweet</button>

            {/* Mini Profile */}

            <div className='hoverEffect text-gray-800  flex justify-center items-center  xl:justify-start mt-8 space-x-2 leading-5 xl:ml-24' >
                
                <Image className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuXVl1Pew5GJfXuoPEsLmSA-5fG-CerC-SA&s" alt='user-image' width={80} height={80}/>
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>Raj Singh</h4>
                    <p className='text-gray-500'>@singhraj</p>
                </div>
                <DotsCircleHorizontalIcon className='h-6 hidden xl:inline' />
            </div>
            
        </div>
    );
}
