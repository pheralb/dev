import { IoHomeOutline, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";

const HeaderLinks = [
  {
    id: 1,
    href: "/",
    external: false,
    title: "Home",
    icon: <IoHomeOutline size="22" />,
  },
  {
    id: 2,
    href: "https://twitter.com/pheralb_",
    external: true,
    title: "Twitter",
    icon: <FiTwitter size="22" />,
  },
  {
    id: 3,
    href: "https://github.com/pheralb/",
    external: true,
    title: "Github",
    icon: <IoLogoGithub size="22" />,
  },
  {
    id: 4,
    href: "https://www.linkedin.com/in/pheralb/",
    external: true,
    title: "LinkedIn",
    icon: <IoLogoLinkedin size="22" />,
  },
];

export default HeaderLinks;
