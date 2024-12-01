"use client";

import React from 'react'
import SectionHeading from '@/components/section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChartBar } from 'react-icons/fa';
import VisitCounter from './visit-counter';

export default function PersonalInformation() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>Personal Information</SectionHeading>
            <div className="flex flex-col items-start sm:items-center gap-4 mt-6 text-lg">
                <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-500 text-xl" />
                    <span className="font-medium">09452576820</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-red-500 text-xl" />
                    <a href="mailto:celsopdev@gmail.com" className="text-blue-500 underline">
                        celsopdev@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-green-500 text-xl" />
                    <span className="font-medium">Suba, Argao, Cebu 6021</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaChartBar className="text-gray-800 text-xl" /><VisitCounter />
                </div>
            </div>
        </motion.section>
    );
}
