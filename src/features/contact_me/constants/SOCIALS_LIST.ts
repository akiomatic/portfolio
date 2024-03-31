import { ISocial } from "@/features/contact_me/utils/types";
import { siDevdotto, siGithub, siLinkedin, siX } from "simple-icons";

export const SOCIALS_LIST: Array<ISocial> = [
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/akiomatic/",
		icon: siLinkedin,
	},
	{ name: "GitHub", link: "https://github.com/akiomatic", icon: siGithub },
	{ name: "X", link: "https://twitter.com/akiomatic", icon: siX },
	{ name: "Dev.to", link: "https://dev.to/akiomatic", icon: siDevdotto },
];
