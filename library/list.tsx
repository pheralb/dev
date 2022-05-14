import { motion } from "framer-motion";

type Props = {
  key: number;
  children: React.ReactNode;
};

const List = ({ key, children }: Props) => {
  return (
    <motion.li
      variants={{
        hidden: (i: number) => ({
          opacity: 0,
          y: -50 * i,
        }),
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.05,
          },
        }),
      }}
      initial="hidden"
      animate="visible"
      key={key}
    >
      {children}
    </motion.li>
  );
};

export default List;
