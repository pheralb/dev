import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import Tap from "@/animations/tap";

type Props = {
  title: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  borderWidth?: string;
};

const IconBtns = ({ title, icon, onClick, borderWidth }: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const color = useColorModeValue("gray.900", "gray.100");
  return (
    <Tap>
      <Tooltip
        label={title}
        aria-label={title}
        borderWidth="1px"
        borderRadius="5px"
        bg={bg}
        color={color}
      >
        <IconButton
          aria-label={title}
          variant="ghost"
          icon={icon}
          borderWidth={borderWidth}
          onClick={onClick}
          _focus={{ boxShadow: "none", border: 0 }}
        />
      </Tooltip>
    </Tap>
  );
};

export default IconBtns;
