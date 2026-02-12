"use client"
import React from 'react'
import { BiEnvelope, BiLogoWhatsapp, BiMap, BiPhone } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text content */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Let's get in touch!
                    </h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Reach out to me today and let's discuss how I can help you achieve your goals.
                    </p>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">
                                +39 3513782733
                            </p>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiLogoWhatsapp className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">
                                +1 (209) 914-3402
                            </p>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">
                                alessio.diaz0@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">
                                Rome, Italy
                            </p>
                        </div>
                    </div>
                    {/* social icons */}
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
                        </div>
                        <FaLinkedinIn className="text-white w-6 h-6" />
                    </div>
                </div>
                {/* form */}
                <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-3.5 bg-[#363659] text-white placeholder:text-white/70 outline-none rounded-md w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 py-3.5 mt-4 bg-[#363659] text-white placeholder:text-white/70 outline-none rounded-md w-full"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="px-4 py-3.5 mt-4 bg-[#363659] placeholder:text-white/70 h-[14rem] resize-none text-white outline-none rounded-md w-full"
                    />
                    <button className="mt-6 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
                        Send Message
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Contact