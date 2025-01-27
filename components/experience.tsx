'use client'

import React from 'react'
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData, certificationsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image from next/image

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme === 'light' ?"#f3f4f6" : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : '0.4rem solid rgba(255, 255, 255, 0.5)',
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: theme === 'light' ? "white" : 'rgba(255, 255, 255, 0.15)',
                    fontSize: "1.5rem",
                  }}
                >
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">
                        <FaMapMarkerAlt className="inline-block mr-1 mb-1" />
                        {item.location}
                    </p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>

      {/* CERTIFICATES */}
      <div className="certifications-wall mt-16">
        {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              whileHover={{ scale: 1.1 }} // Zoom effect on hover
              transition={{ type: "spring", stiffness: 300 }} // Smooth transition
            >
                <div className="certification-image">
                    {/* Display the certificate image using Next.js Image */}
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      className="certification-image border-2 border-black rounded-lg"
                      width={500}  // Adjust width as needed
                      height={300} // Adjust height as needed
                      objectFit="contain" // Maintains image aspect ratio
                    />
                </div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
                {cert.credentialLink !== "" ? (
                    <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                      View Credential
                    </a>
                ) : (
                    <a href="#"></a>
                )}
            </motion.div>
        ))}
      </div>
    </section>
  );
}
