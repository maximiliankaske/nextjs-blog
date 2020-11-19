import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  label: string;
}
const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      {label}
    </motion.button>
  );
};

export default Button;
