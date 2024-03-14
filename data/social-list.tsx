import Discord from "@/app/components/soc/discord";
import Facebook from "@/app/components/soc/facebook";
import LinkedIn from "@/app/components/soc/linkedIn";
import Twitter from "@/app/components/soc/twitter";
import YouTube from "@/app/components/soc/youtube";

export const SocialArray = [
  {
    name: "Twitter",
    url: "https://twitter.com/blazity",
    icon: <Twitter />,
    ariaLabel: "Visit our Twitter",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/blazity/",
    icon: <Facebook />,
    ariaLabel: "Visit our Facebook",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/blazity/",
    icon: <LinkedIn />,
    ariaLabel: "Visit our LinkedIn",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCYDeWaSWiOHn_lUHY-u1VYw/videos",
    icon: <YouTube />,
    ariaLabel: "Visit our Youtube",
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/fyWtyNKmfX",
    icon: <Discord />,
    ariaLabel: "Visit our Discord",
  },
];
