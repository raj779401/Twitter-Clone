import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import { ChartBarIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Post({ post }) {
    return (
        <div className="border-b border-grey p-3 flex items-start space-x-3">
            {/* User Image */}
            <img src={post.userImg} alt={`${post.name}'s profile picture`} className="w-12 h-12 rounded-full" />

            {/* Post Content */}
            <div className="flex-1">
                {/* Post Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <h4 className="font-bold">{post.name}</h4>
                        <span className="text-sm text-grey">@{post.username}</span>
                        <span className="text-sm text-grey">· {post.time}</span>
                    </div>
                    <DotsHorizontalIcon className="h-5 text-grey" />
                </div>

                {/* Post Text */}
                <p className="text-sm mt-2">{post.text}</p>

                {/* Optional: Post Image */}
                {post.userImg && (
                    <div className="mt-2">
                        <Image src={post.userImg} alt="" width={500} height={500} className="rounded-lg" />
                    </div>
                )}

                {/* Post Icons */}
                <div className="flex items-center justify-between mt-2 text-grey">
                   <ChatIcon className=" hoverEffect  "/>
                   <TrashIcon className="hoverEffect"/>
                   <HeartIcon className="hoverEffect"/>
                   <ShareIcon className="hoverEffect"/>
                   <ChartBarIcon className="hoverEffect"/>
                </div>
            </div>
        </div>
    );
}
