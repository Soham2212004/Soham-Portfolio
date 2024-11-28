import { motion } from "framer-motion"; // Importing motion for animations
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDocker } from "react-icons/si"; // Docker icon
import { SiExpress } from "react-icons/si"; // Express.js icon
import { SiPython } from "react-icons/si"; // Python icon
import { AiOutlineRobot } from "react-icons/ai"; // AI icon (robot)
import { SiFirebase } from "react-icons/si"; // Firebase icon
import { SiGooglecloud } from "react-icons/si"; // Google Cloud icon
import { SiFlutter } from "react-icons/si"; // Flutter icon
import { SiGit } from "react-icons/si"; // Git icon
import { FaReact } from "react-icons/fa"; // React icon
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaGolang } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";

const Technologies = () => {
  // Define an array for the technologies and their configurations
  const technologies = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js", direction: "left" },
    { icon: <TbBrandNextjs className="text-7xl" />, name: "Next.js", direction: "right" },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js", direction: "left" },
    { icon: <SiExpress className="text-7xl text-gray-700" />, name: "Express.js", direction: "right" },
    { icon: <SiPython className="text-7xl text-yellow-500" />, name: "Python", direction: "left" },
    { icon: <GiArtificialIntelligence className="text-7xl text-blue-400" />, name: "AI & ML", direction: "right" },
    { icon: <SiFirebase className="text-7xl text-yellow-600" />, name: "Firebase", direction: "left" },
    { icon: <SiGooglecloud className="text-7xl text-blue-500" />, name: "Google Cloud", direction: "right" },
    { icon: <VscAzure className="text-7xl text-orange-500" />, name: "Azure", direction: "left" },
    { icon: <FaAws className="text-7xl text-orange-500" />, name: "AWS", direction: "right" },
    { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB", direction: "left" },
    { icon: <SiDocker className="text-7xl text-blue-500" />, name: "Docker", direction: "right" },
    { icon: <FaGolang className="text-7xl text-orange-500" />, name: "GoLang", direction: "left" },
    { icon: <SiFlutter className="text-7xl text-blue-400" />, name: "Flutter", direction: "right" },
    { icon: <SiGit className="text-7xl text-orange-500" />, name: "Git", direction: "left" },
    { icon: <FaReact className="text-7xl text-blue-400" />, name: "React", direction: "right" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Animated Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Icon Grid with Animation */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileInView={{ x: 0, opacity: 1 }}
            initial={{
              x: tech.direction === "left" ? -100 : 100,
              opacity: 0,
            }}
            transition={{ duration: 1.5, delay: index * 0.1 }} // Adds a staggered animation effect
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
            <p className="text-center mt-2">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
