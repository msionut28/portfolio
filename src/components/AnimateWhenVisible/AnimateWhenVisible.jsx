import { motion } from "framer-motion";

const AnimateWhenVisible = ({ children, delay }) => {
  return (
    <motion.div
      initial="notInViewport"
      whileInView="inViewport"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      variants={{
        inViewport: { opacity: 1, scale: 1 },
        notInViewport: { opacity: 0, scale: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWhenVisible;
