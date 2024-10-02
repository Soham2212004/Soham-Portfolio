import { motion } from "framer-motion"; // Importing motion for animations
import { EXPERIENCES } from "../constants";

// Define animation variants for the title, left, and right sections
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const leftToRightVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const rightToLeftVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Title Animation */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left Section: Year */}
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={leftToRightVariants}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <p className="mb-2 text-sm text-purple-100">{experience.year}</p>
            </motion.div>

            {/* Right Section: Role, Company, Description, Technologies */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              variants={rightToLeftVariants}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {experience.description}
              </p>

              {/* Technologies */}
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
