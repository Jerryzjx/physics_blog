import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);

    return (
        <div className="w-full container mx-auto px-10 mb-8 ">
            <div className="border-b-2 border-gray-200 w-full inline-block py-8 my-2">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white ">Jerry's Blog</span>
                    </Link>
                </div>
                <div className=" md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-7 font-semibold text-2xl cursor-pointer hover:text-yellow-300 transition duration-500 ease transform hover:-translate-y-1 ">{category.name}</span></Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
