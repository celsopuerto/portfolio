"use client";

import Image from 'next/image'
import React from 'react'
import Profile from '@/public/profile.jpg';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaMapMarkerAlt } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center flex-col">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Image
                        src={Profile}
                        alt="Celso portrait"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>

                <motion.span
                    className="absolute bottom-0 right-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    👋
                </motion.span>
            </div>
            <div className="mt-4 flex items-center text-gray-600 dark:text-white/70">
                <motion.div
                    className="mr-2 text-red-500 dark:text-white-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: 0.2,
                    }}
                >
                    <FaMapMarkerAlt />
                </motion.div>

                <motion.p
                    className="text-lg font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.4,
                    }}
                >
                    PH
                </motion.p>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            Hello, I'm <span className="font-bold">Celso.</span> I'm an{" "}
            <span className="font-bold">aspiring full-stack developer,</span> {" "}
            <span className="font-bold"> I'm still a student. I enjoy building </span>
            <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">Django REST Framework</span> and {" "}<span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
        >
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}/></Link>

            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href="/CelsoMahilomPuertoJuniorResume.pdf" download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>

            <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/celsopuerto" target="_blank">
                <BsLinkedin />
            </a>

            <a className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://github.com/celsopuerto" target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}