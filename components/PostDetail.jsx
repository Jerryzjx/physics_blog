import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index} className="display: inline-block">{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<b key={index} className="display: inline-block text-orange-500">{text}</b>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index} className="display: inline-block">{text}</u>);
            }
        }

        switch (type) {
            case 'heading-two':
                return <h2 key={index} className="text-2xl font-bold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'link':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'blockquote':
                return <blockquote key={index} className="mb-8 font-bold text-lg indent-2 backdrop-blur-xl shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</blockquote>;
            case 'heading-four':
                return <h4 key={index} className="text-lg mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'heading-five':
                return <h5 key={index} className="text-lg font-light mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
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
                            className="video-js"
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
                    <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
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
