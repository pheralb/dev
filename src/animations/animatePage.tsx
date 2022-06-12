import { motion } from "framer-motion";

type Props = {
  key: string;
  children: React.ReactNode;
};

const List = ({ key, children }: Props) => {
  return (
    <motion.div
      key={key}
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
