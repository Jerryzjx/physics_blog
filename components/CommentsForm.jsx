import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

    useEffect(() => {
        setLocalStorage(window.localStorage);
        const initalFormData = {
            name: window.localStorage.getItem('name'),
            email: window.localStorage.getItem('email'),
            storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
        };
        setFormData(initalFormData);
    }, []);

    const onInputChange = (e) => {
        const { target } = e;
        if (target.type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.checked,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
            }));
        }
    };

    const handlePostSubmission = () => {
        setError(false);
        const { name, email, comment, storeData } = formData;
        if (!name || !email || !comment) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };

        if (storeData) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
        }

        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {
                    if (!storeData) {
                        formData.name = '';
                        formData.email = '';
                    }
                    formData.comment = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-9 pb-10 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Comment !</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
                <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
                    <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
                </div>
            </div>
            {error && <p className="text-lg text-red-500">Warning: All fields are mandatory</p>}
            <div className="mt-8">
                <button type="button" onClick={handlePostSubmission}>
                    <a href="#_"
                       className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-pink-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span
                            className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-pink-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
                        <span
                            className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
                        <span
                            className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Post Comment</span>
                    </a>
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
            </div>
        </div>
    );
};

export default CommentsForm;
