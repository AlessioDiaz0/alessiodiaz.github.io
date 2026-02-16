import React from 'react'
import ApproachCard from './ApproachCard'

const Approach = () => {
    return (
        <div className="pt-16 pb-16 text-white">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
                My Approach <br />
            </h1>

            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s1.png"
                        name="Simple"
                        description="Focusing on clean code and intuitive interfaces. Stripping away complexity to deliver a seamless user experience."
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s2.png"
                        name="Efficient"
                        description="Optimizing performance and workflows for fast delivery. Smart solutions that save time and computational resources."
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s3.png"
                        name="Reliable"
                        description="Building robust systems with consistent performance. Rigorous testing and best practices ensure your product works as intended."
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s4.png"
                        name="Scalable"
                        description="Planning for the future with modular architectures. Grow your application effortlessly as your user base expands."
                    />
                </div>
            </div>
        </div>
    )
}

export default Approach