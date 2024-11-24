"use client";

import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import {IoCloseOutline} from "react-icons/io5";

const ContactUsModal = ({isFrom}: {isFrom: string}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const waMsg = "Hi, I would like to know more about your services."
    const waNumber = "917352646691"

    return (
        <div>
            {/* Button to Open Modal */}
            {isFrom === "mobile_nav" ?
                <p className="mt-4 font-normal" onClick={toggleModal}>
                    Contact Us
                </p> : isFrom === "main" ? <button
                    onClick={toggleModal}
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#080853,45%,#1e3631,55%,#080853)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110 ease-in-out">
                    Connect with us
                </button> : <button
                    className="bg-[#080853] text-white font-normal text-base px-5 py-1 rounded-3xl"
                    onClick={toggleModal}
                >
                    Contact Us
                </button>
            }

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-11/12 max-w-md relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4 text-center text-black">Contact Us</h2>
                        <div className="flex justify-around items-center space-x-4">
                            {/* Email Icon */}
                            <Link
                                href="mailto:hkmotionmedia@gmail.com"
                                className="flex flex-col items-center text-gray-700 hover:text-gray-900"
                            >
                                <FaEnvelope className="text-4xl" />
                                <p className="mt-2 text-sm">Email</p>
                            </Link>
                            {/* WhatsApp Icon */}
                            <Link
                                href={`https://wa.me/${waNumber}?text=${encodeURI(waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-green-500 hover:text-green-600"
                            >
                                <FaWhatsapp className="text-4xl" />
                                <p className="mt-2 text-sm">WhatsApp</p>
                            </Link>
                        </div>
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            <IoCloseOutline size={40} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUsModal;
