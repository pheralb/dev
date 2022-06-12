import { House, TwitterLogo, GitBranch, LinkedinLogo } from "phosphor-react";

const HeaderLinks = [
  {
    id: 1,
    href: "/",
    external: false,
    title: "Home",
    icon: <House size="22" />,
  },
  {
    id: 2,
    href: "https://twitter.com/pheralb_",
    external: true,
    title: "Twitter",
    icon: <TwitterLogo size="22" />,
  },
  {
    id: 3,
    href: "https://github.com/pheralb/",
    external: true,
    title: "Github",
    icon: <GitBranch size="22" />,
  },
  {
    id: 4,
    href: "https://www.linkedin.com/in/pheralb/",
    external: true,
    title: "LinkedIn",
    icon: <LinkedinLogo size="22" />,
  },
];

export default HeaderLinks;
