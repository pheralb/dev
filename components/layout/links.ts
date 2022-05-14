import { Cube, GitBranch, House, TwitterLogo } from "phosphor-react";
import { FiBox, FiGithub } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

const HeaderLinks = [
  {
    id: 1,
    href: "/",
    external: false,
    title: "Browse",
    icon: House,
  },
  {
    id: 2,
    href: "https://twitter.com/pheralb_",
    external: true,
    title: "Twitter",
    icon: TwitterLogo,
  },
  {
    id: 3,
    href: "https://github.com/pheralb/svgl/",
    external: true,
    title: "Github",
    icon: Cube,
  },
];

export default HeaderLinks;
