import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index} className="display: inline">{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<b key={index} className="inline-flex display: inline bg-yellow-200 rounded-3xl">{text}</b>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index} className="decoration-pink-600 display: inline ">{text}</u>);
            }
        }


        switch (type) {
            case 'heading-one':
                return <div className="flex flex-row display: inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 display: inline-block items-center justify-center mt-2 mr-1 group-hover: text-pink-600 motion-safe:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h1 key={index} className="text-3xl font-bold underline-offset-8 decoration-pink-500 display: block mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1></div>;
            case 'heading-two':
                return <div className="flex flex-row display: inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 display: inline-block items-center justify-center mt-2 mr-1 group-hover: text-pink-600 motion-safe:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <h2 key={index} className="text-3xl font-bold underline-offset-8 decoration-pink-500 display: block mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2></div>;
            case 'heading-three':
                return <h3 key={index} className="text-2xl underline-offset-4 font-semibold mb-4 display: inline-block">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'block-quote':
                return <blockquote className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-8 mt-5 p-4 bg-teal-300 rounded-lg bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-lg">
                    <p key={index} className="text-2xl text-indigo-900">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
                </blockquote>;
            case 'heading-four':
                return <h4 key={index} className="underline-offset-4 text-lg display: inline-block mb-4 ">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'heading-five':
                return <div className="shadow-[5px_5px_0px_0px_rgba(0,128,128)] border-2 border-[rgba(0,128,128)] mb-8 p-4 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-lg display: inline-block"> <h5 key={index} className="text-2xl font-semibold ">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5></div>;
            case 'heading-six':
                return <div className="flex flex-row display: inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 display: inline-block items-center justify-center mr-1 group-hover: text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <h6 key={index} className="text-xl font-semibold underline-offset-4 decoration-pink-500 display: block mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6></div>;
            case 'image':
                return (
                    <div className="hidden md:flex items-center justify-center lg:mb-2 mt-2 lg:w-auto items-center">
                    <img className="rounded-2xl items-center"
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                    </div>
                );
            case 'video':
                return (
                    <div className="hidden md:flex items-center justify-center lg:mb-2 mt-2 lg:w-auto items-center">
                        <video
                            id="my-player"
                            className="video-js rounded-2xl"
                            controls
                            preload="auto"
                            >
                            <source src={obj.src} type="video/mp4"/>
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a
                                web browser that
                                <a href="https://videojs.com/html5-video-support/" target="_blank">
                                    supports HTML5 video
                                </a>
                            </p>
                        </video>

                    </div>
                );


            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex items-center justify-center w-full mb-5 mt-5">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <img
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
                    <h1 className="mb-8 text-4xl font-semibold">{post.title}</h1>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>

        </>
    );
};

export default PostDetail;
