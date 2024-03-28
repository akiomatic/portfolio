import SectionContainer from "@/components/sections/SectionContainer";
import MessageMe from "@/features/contact_me/components/MessageMe";
import { SVGIcon } from "@/lib/helpers";
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
		<SectionContainer
			id={"contact-me"}
			title={"Let's Connect!"}
			className={"w-4/5 lg:w-1/2"}
		>
			{/*<div className={"flex flex-col justify-center items-center mt-12 bg-white backdrop-filter backdrop-blur-md w-3/4 lg:w-2/3 h-full rounded-full bg-opacity-20 border border-white border-opacity-20"}>*/}
			<p className={"text-lg text-center px-12"}>
				Thank you for exploring my portfolio. If I've caught your interest, feel
				free to connect on social media! I'm open to new opportunities and
				collaborations.
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
							<SVGIcon icon={social.icon} />
						</a>
					);
				})}
			</div>
			<p className={"text-lg text-center mt-12"}>
				To get in touch via email, contact me directly at:{" "}
				<a href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS}`}>
					<code className={"text-base px-2 py-0.5 border rounded-md"}>
						{process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS}
					</code>
				</a>
				.
			</p>
			<MessageMe
				className={"mb-8"}
				buttonText={"Send me a message here 👋"}
				title={"Contact Me"}
				description={
					"Thank you again for exploring my portfolio. If there's anything you'd like to discuss, share, or ask, feel free to message me there! I'm looking forward to connecting with you!"
				}
			>
				<p className={"text-sm my-2"}>or</p>
			</MessageMe>
			<p className={"text-lg text-center"}>
				I'm looking forward to connecting with you!
			</p>
		</SectionContainer>
	);
};

export default ContactMe;
