import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    icon: string,
    name: string,
    description: string
}

const ApproachCard = ({ icon, description, name }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group [perspective:1000px] h-[300px] w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative h-full w-full rounded-2xl transition-all duration-300 [transform-style:preserve-3d]"
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ duration: 0.15, ease: "circOut" }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] flex flex-col items-center justify-center p-8 bg-[#130f2a] rounded-2xl border border-gray-800 shadow-xl group-hover:border-blue-500/50 transition-colors duration-300">
                    <div className="p-4 bg-gray-900/50 rounded-full border border-gray-700">
                        <Image src={icon} alt={name} width={60} height={60} className="object-contain" />
                    </div>
                    <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200 text-center tracking-tight">
                        {name}
                    </h1>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-md rounded-2xl border border-blue-500/40 shadow-2xl">
                    <h2 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">{name}</h2>
                    <p className="text-gray-200 text-center text-sm md:text-base leading-relaxed italic">
                        "{description}"
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default ApproachCard