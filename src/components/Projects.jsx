import { motion } from "framer-motion"; // Importing motion for animations
import { PROJECTS } from "../constants"; // Importing project constants
import { Link } from "react-router-dom"; // Importing Link for navigation

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
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
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* Project Content: Title, Description, Technologies */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              variants={contentVariants}
              transition={{ duration: 1, delay: index * 0.4 }}
            >
              <h6 className="mb-2 text-lg font-bold"> {/* Increased font size */}
                <a
                  href={project.Link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h6>

              <h7 className="mb-2 font-semibold text-blue-500">
                {project.link}
              </h7>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies */}
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
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

export default Projects;
