import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const List = ({ children }: Props) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default List;
