import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="ml-4 w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className=" bg-tertiary rounded-[20px] py-8 px-6 min-h-[280px] flex flex-col justify-evenly items-center shadow-2xl gap-4"
        >
          <img src={icon}  alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! 👋 I'm a passionate Web Developer with a strong proficiency in
        React, Node.js, CSS, and React Three.js. I specialize in building
        dynamic, user-friendly web applications and crafting seamless user
        experiences.
        <p>Beyond the basics, I have hands-on experience with:</p>
        <p>
          Framer Motion: Bringing interfaces to life with smooth animations.
          RESTful APIs and GraphQL: Designing and integrating scalable backend
          solutions. MongoDB: Managing and optimizing databases for robust
          applications. Tailwind CSS: Rapidly creating responsive and visually
          stunning designs. Version Control (Git/GitHub): Collaborating
          efficiently in diverse team environments. I'm always eager to explore
          cutting-edge technologies and enhance my skills. My mission is to
          deliver impactful web solutions that solve real-world problems and
          resonate with users. When I'm not coding, you’ll probably find me
          exploring the latest tech trends or brainstorming new project ideas.
        </p>
        <p>Let’s build something amazing together! 🚀</p>
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about") ;
