"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28
    text-center sm:mb-40"
    >
      <SectionHeading heading={"My Skills"} />
      <ul
        className="flex flex-wrap justify-center gap-2
      text-lg text-gray-800"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack
          rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
