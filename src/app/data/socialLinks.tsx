import {
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../components/icons/SocialIcons";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/akbarwjyy",
    icon: <GithubIcon />,
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/akbarwijaya/",
    icon: <GitlabIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akbar-wijaya/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akbarwjyaa_/",
    icon: <InstagramIcon />,
  },
];
