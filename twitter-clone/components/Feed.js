import { SparklesIcon } from "@heroicons/react/outline";
import InputHead from "./InputHead";
import Post from "./Post";

export default function Feed() {
   const posts = [
    {
        id: '1',
        username: 'singhraj',
        name: 'raj-singh',
        userImg: 'https://images.unsplash.com/photo-1716847214733-7d5be565400b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
        text: 'nice photo',
        time: '2 hours ago'
    },
    {
        id: '2',
        username: 'singhhappy',
        name: 'happy-singh',
        userImg: 'https://images.unsplash.com/photo-1716845186236-7c68fc2a57b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        text: 'nice ',
        time: '2 days ago'
    },
    {
        id: '3',
        username: 'johndoe',
        name: 'john-doe',
        userImg : 'https://images.unsplash.com/photo-1716995164712-a5a4e72a8d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D',
        text: 'lovely day!',
        time: '3 hours ago'
    },
    {
        id: '4',
        username: 'janedoe',
        name: 'jane-doe',
        userImg :'https://images.unsplash.com/photo-1716927856017-ec6dd4e4021e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        text: 'beautiful sunset',
        time: '5 hours ago'
    },
    {
        id: '5',
        username: 'alicewonder',
        name: 'alice-wonderland',
        userImg : 'https://images.unsplash.com/photo-1716369414814-ff2eb72ff659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D',
        text: 'had a great time hiking today!',
        time: '8 hours ago'
    },
    {
        id: '6',
        username: 'markj',
        name: 'mark-johnson',
        userImg : 'https://images.unsplash.com/photo-1717023048597-57c18375783f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D',
        text: 'coffee time!',
        time: '10 hours ago'
    },
    {
        id: '7',
        username: 'maryp',
        name: 'mary-poppins',
        userImg : 'https://plus.unsplash.com/premium_photo-1676517030094-3a49a6d598e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDJ8fHxlbnwwfHx8fHw%3D',
        text: 'reading a new book!',
        time: '12 hours ago'
    },
    {
        id: '8',
        username: 'charliebrown',
        name: 'charlie-brown',
        userImg : 'https://images.unsplash.com/photo-1716702131412-eeb1bc8a14c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fHw%3D',
        text: 'just watched a great movie!',
        time: '1 day ago'
    },
    {
        id: '9',
        username: 'lucasw',
        name: 'lucas-williams',
        userImg :'https://plus.unsplash.com/premium_photo-1671111266225-68b2ad19c292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDJ8fHxlbnwwfHx8fHw%3D',
        text: 'working on a new project!',
        time: '2 days ago'
    },
    {
        id: '10',
        username: 'emmaw',
        name: 'emma-watson',
        userImg : 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D',
        text: 'had a wonderful dinner!',
        time: '3 days ago'
    },
    {
        id: '11',
        username: 'johns',
        name: 'john-smith',
        userImg :'https://images.unsplash.com/photo-1716583731424-45c32c2ad63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fHw%3D',
        text: 'exploring the city',
        time: '4 days ago'
    },
    {
        id: '12',
        username: 'sarahk',
        name: 'sarah-kim',
        userImg:'https://images.unsplash.com/photo-1716600650689-e3e69802078f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D',
        text: 'new recipe experiment!',
        time: '5 days ago'
    }
];


    return (
        <div className="xl:ml-[370px] border-l border-r border-grey xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center px-3 py-3 sticky border-b border-grey top-0 justify-between h-[60px] bg-white z-10">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect p-2">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <InputHead />
            {posts.map((post) =>
                <Post key={post.id} post={post} />
            )}
        </div>
    );
}
