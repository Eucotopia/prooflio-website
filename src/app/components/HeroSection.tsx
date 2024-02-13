'use client'
import {motion} from "framer-motion";
import Image from "next/image"
import {TypeAnimation} from "react-type-animation";

const HeroSection = () => {

    return (
        <>
            <section>
                <div className={"grid grid-cols-1 sm:grid-cols-12"}>
                    <div className={'col-span-7 place-self-center text-center sm:text-left'}>\
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className={'col-span-8 place-self-center text-center sm:text-left justify-self-start'}
                        >
                            <h1 className={'text-white text-4xl mb-4 font-extrabold sm:text-5xl lg:text-6xl'}>
                                <p className={"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"}>
                                    Hello, I'm{" "}
                                    <TypeAnimation
                                        sequence={[
                                            "Judy",
                                            1000,
                                            "Web Developer",
                                            1000,
                                            "Mobile Developer",
                                            1000,
                                            "UI/UX Designer",
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{fontSize: '1em', display: 'inline-block'}}
                                        repeat={Infinity}
                                    ></TypeAnimation>
                                </p>
                            </h1>
                        </motion.div>

                        <p className={'text-[#ADB7BE] text-lg lg:text-xl mb-6'}>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.Quisquam,voluptatum</p>
                        <div>
                            <button
                                className={'px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-200 via-purple-500 to-pink-500 text-white'}>Hire
                                Me
                            </button>
                            <button
                                className={'px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'}>Download
                                CV
                            </button>
                        </div>
                    </div>

                    <div className={'col-span-5 place-self-center mt-4 lg:text-xl'}>
                        <motion.div
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className={'col-span-8 place-self-center text-center sm:text-left justify-self-start'}
                        >

                            <div className={"rounded-full bg-[#181818] w-[250px] h-[250px] relative"}>
                                <Image src={'/images/hero-image.png'} alt={'hero image'}
                                       height={300}
                                       className={'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'}
                                       width={300}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
)
}
export default HeroSection