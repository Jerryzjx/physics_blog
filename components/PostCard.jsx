import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader, graphCMSVideoLoader } from '../util';

const PostCard = ({ post }) => (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
        <div className="relative h-full overflow-hidden shadow-md pb-72 mb-6 lg:pb-[500px]">
            <img src={post.featuredImage.url} alt="" className=" object-top absolute h-full w-full object-cover shadow-lg rounded-lg " />
        </div>

        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <Image
                    unoptimized
                    loader={grpahCMSImageLoader}
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                />
                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
        <p className="text-center text-xl text-gray-700 font-normal px-4 lg:px-20 mb-8">
            {post.excerpt}
        </p>
        <div className="text-center">
            <Link href={`/post/${post.slug}`}>
                <a href="#_"
                   className="relative inline-flex items-center justify-center p-4 px-9 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-pink-600 rounded-full shadow-md group">
     <span
         className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-600 group-hover:translate-x-0 ease">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
     </span>
                    <span
                        className="absolute flex items-center justify-center w-full h-full text-pink-600 transition-all duration-300 transform group-hover:translate-x-full ease text-lg">Read More</span>
                    <span className="relative invisible text-lg">Read More</span>
                </a>
            </Link>
        </div>
    </div>
);

export default PostCard;
