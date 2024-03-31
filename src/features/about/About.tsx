import SectionContainer from "@/components/sections/SectionContainer";
import { INTRO_TEXT } from "@/features/about/constants/text-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";

const About = () => {
	return (
		<SectionContainer
			id={"about"}
			title={"About Me"}
			className={"w-screen max-w-[1400px]"}
		>
			<div
				className={cn(
					"flex justify-center items-center gap-14 px-12",
					"flex-col lg:flex-row",
					"text-base md:text-lg",
				)}
			>
				<Image
					src={"/images/placeholder-icon.webp"}
					alt={"A selfie of me"}
					width={250}
					height={250}
					priority
					className={"rounded-full"}
				/>
				<div className={"flex-1 space-y-3"}>
					<Markdown
						components={{
							em: ({ node, ...rest }) => {
								return <em className={"not-italic text-amber-300"} {...rest} />;
							},
							strong: ({ node, ...rest }) => {
								return <strong className={"text-lime-300"} {...rest} />;
							},
							h2: ({ node, ...rest }) => {
								return (
									<h2
										className={
											"text-xl md:text-2xl font-semibold [&:not(:first-child)]:pt-6"
										}
										{...rest}
									/>
								);
							},
						}}
					>
						{INTRO_TEXT}
					</Markdown>
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
