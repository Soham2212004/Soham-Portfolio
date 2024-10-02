import { motion } from "framer-motion"; // Importing motion for animations
import { CONTACT } from "../constants";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons
import profile from "../assets/s.jpg";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const emailVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Title Animation */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left md:pr-8">
          {/* Name Animation */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold"
          >
            Soham Soni
          </motion.h1>

          {/* Title Animation */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            transition={{ duration: 1.4 }}
            className="text-xl text-gray-600 mb-4"
          >
            AI/ML Intern
          </motion.p>

          {/* Horizontal Line */}
          <div className="border-b border-gray-300 mb-4"></div>

          <div className="flex flex-col items-start text-left">
            {/* Address with Icon */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.2 }}
              className="my-2 flex items-center"
            >
              <FaMapMarkerAlt className="mr-2 text-purple-500" /> {CONTACT.address}
            </motion.div>

            {/* Phone Number with Icon */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              transition={{ duration: 1, delay: 0.4 }}
              className="my-2 flex items-center"
            >
              <FaPhoneAlt className="mr-2 text-purple-500" /> {CONTACT.phoneNo}
            </motion.div>

            {/* Email with Icon */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={emailVariants}
              transition={{ duration: 1, delay: 0.6 }}
              href={`mailto:${CONTACT.email}`}
              className="my-2 flex items-center hover:text-purple-500"
            >
              <FaEnvelope className="mr-2 text-purple-500" /> {CONTACT.email}
            </motion.a>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
  <motion.img
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    src={profile} // Update with the correct path
    alt="Soham Soni"
    className="w-80 h-80 rounded-full object-cover" // Very large size
  />
</div>

      </div>

      {/* Download CV Button */}
      <motion.a
        initial="hidden"
        whileInView="visible"
        variants={emailVariants}
        transition={{ duration: 1, delay: 0.8 }}
        href="https://drive.google.com/uc?export=download&id=1E25k_KbCWIvB77GeVtR31TNhnTzvfNxO"
        className="mt-8 inline-block rounded-full bg-purple-500 px-8 py-2 text-white hover:bg-purple-700 mx-auto"
      >
        Download CV
      </motion.a>
    </div>
  );
};

export default Contact;
