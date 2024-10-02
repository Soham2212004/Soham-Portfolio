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

// Icon variants for animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
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
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React.js Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center mt-2">React.js</p>
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
          <p className="text-center mt-2">Next.js</p>
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <p className="text-center mt-2">Node.js</p>
        </motion.div>

        {/* Express.js Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-700" />
          <p className="text-center mt-2">Express.js</p>
        </motion.div>

        {/* Python Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-yellow-500" />
          <p className="text-center mt-2">Python</p>
        </motion.div>

        {/* AI Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GiArtificialIntelligence className="text-7xl text-blue-400" />
          <p className="text-center mt-2">AI & ML</p>
        </motion.div>

        {/* Firebase Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-7xl text-yellow-600" />
          <p className="text-center mt-2">Firebase</p>
        </motion.div>

        {/* Google Cloud Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" // Updated class here
        >
          <SiGooglecloud className="text-7xl text-blue-500" />
          <p className="text-center mt-2">Google Cloud</p>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscAzure className="text-7xl text-orange-500" />
          <p className="text-center mt-2">Azure</p>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-orange-500" />
          <p className="text-center mt-2">AWS</p>
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p className="text-center mt-2">MongoDB</p>
        </motion.div>

        {/* Docker Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-500" />
          <p className="text-center mt-2">Docker</p>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGolang className="text-7xl text-orange-500" />
          <p className="text-center mt-2">GoLang</p>
        </motion.div>

        {/* Flutter Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlutter className="text-7xl text-blue-400" />
          <p className="text-center mt-2">Flutter</p>
        </motion.div>

        {/* Git Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-orange-500" />
          <p className="text-center mt-2">Git</p>
        </motion.div>

        {/* React Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-blue-400" />
          <p className="text-center mt-2">React</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
