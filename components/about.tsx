"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I ventured into the world of web development through a coding bootcamp, where I discovered a genuine passion for problem-solving. Proficient in <span className="font-medium"> React.js, Next.js, Node.js, MongoDB, and more,</span> I specialize in turning concepts into immersive digital experiences. My knack for creativity and constant exploration of new technologies drive my commitment to enhancing the digital landscape.

      </p>
      <p>
        Beyond coding, my interests extend to playing table tennis and watching movies. Embracing a continuous learning mindset. As I eagerly seek a position as a software developer, I am enthusiastic about contributing my skills to innovative projects and bringing ideas to life through collaborative <span className="font-medium"> problem-solving.</span>
      </p>

    </motion.section>
  );
}