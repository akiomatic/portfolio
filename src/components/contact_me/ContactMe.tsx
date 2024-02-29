import MessageMe from "@/components/contact_me/MessageMe";
import { getSVGIcon } from "@/lib/helpers";
import React from "react";
import {
	SimpleIcon,
	siDevdotto,
	siGithub,
	siLinkedin,
	siX,
} from "simple-icons";

interface ISocial {
	name: string;
	link: string;
	icon: SimpleIcon;
}

const socials: Array<ISocial> = [
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/akiomatic/",
		icon: siLinkedin,
	},
	{ name: "GitHub", link: "https://github.com/akiomatic", icon: siGithub },
	{ name: "X", link: "https://twitter.com/akiomatic", icon: siX },
	{ name: "Dev.to", link: "https://dev.to/akiomatic", icon: siDevdotto },
];

const ContactMe = () => {
	return (
		<div
			id={"contact-me"}
			className={
				"flex flex-col items-center justify-center w-4/5 lg:w-2/3  py-24"
			}
		>
			<h1 className={"text-4xl font-bold"}>Let's Connect!</h1>
			{/*<div className={"flex flex-col justify-center items-center mt-12 bg-white backdrop-filter backdrop-blur-md w-3/4 lg:w-2/3 h-full rounded-full bg-opacity-20 border border-white border-opacity-20"}>*/}
			<p className={"text-lg text-center mt-12 px-12"}>
				Thank you for exploring my portfolio. If I've caught your interest, feel
				free to connect on social media or message me here! I'm open to new
				opportunities and collaborations.
			</p>
			<div className={"flex pt-8 gap-x-8"}>
				{socials.map((social) => {
					return (
						<a
							key={social.name}
							href={social.link}
							target={"_blank"}
							rel={"noopener noreferrer"}
							className={
								"flex items-center justify-center w-[30px] h-[30px] fill-[#E5ECF0]"
							}
						>
							{getSVGIcon(social.icon)}
						</a>
					);
				})}
			</div>
			<MessageMe />
		</div>
	);
};

export default ContactMe;
