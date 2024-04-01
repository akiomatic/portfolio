import SVGIcon from "@/components/icons/SVGIcon";
import SectionContainer from "@/components/sections/SectionContainer";
import { Button } from "@/components/ui/button";
import MessageMe from "@/features/contact_me/components/MessageMe";
import { SOCIALS_LIST } from "@/features/contact_me/constants/SOCIALS_LIST";
import { ISocial } from "@/features/contact_me/utils/types";
import { cn } from "@/lib/utils";
import { EnvelopeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const SocialButton = ({ social }: { social: ISocial }) => (
	<Button size={"icon"}>
		<Link href={social.link} target={"_blank"} rel={"noopener noreferrer"}>
			<SVGIcon
				icon={social.icon}
				className={"w-5 h-5 fill-white dark:fill-black"}
			/>
		</Link>
	</Button>
);

const DirectInquiryButton = () => (
	<Button size={"icon"} className={"ml-2"}>
		<a href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS}`}>
			<EnvelopeOpenIcon className={"w-5 h-5"} />
		</a>
	</Button>
);

const ContactMe = () => {
	return (
		<SectionContainer
			id={"contact-me"}
			title={"Let's Connect!"}
			className={cn("px-12", "w-screen lg:w-[1000px]", "text-base md:text-lg")}
		>
			<p className={"text-center"}>
				Thank you for exploring my portfolio. If I've caught your interest, feel
				free to connect on social media! I'm open to new opportunities and
				collaborations.
			</p>
			<div className={"flex py-8 gap-x-8"}>
				{SOCIALS_LIST.map((social) => (
					<SocialButton key={social.name} social={social} />
				))}
			</div>
			<p className={"flex justify-center items-center text-center"}>
				For direct inquiries:
				<DirectInquiryButton />
			</p>
			<MessageMe
				title={"Contact Me"}
				description={
					"Thank you again for exploring my portfolio. If there's anything you'd like to discuss, share, or ask, feel free to message me there! I'm looking forward to connecting with you!"
				}
			>
				<Button className={cn("font-semibold mt-2", "md:text-base")}>
					Or send a direct message
					<Pencil1Icon className={"w-5 h-5 ml-2"} />
				</Button>
			</MessageMe>
		</SectionContainer>
	);
};

export default ContactMe;
