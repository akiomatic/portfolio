import { INTRO_TEXT } from "@/features/about/constants/text-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";

const About = () => {
	return (
		<div
			id={"about"}
			className={
				"flex flex-col items-center justify-center w-screen xl:w-[1400px] py-24 scroll-mt-12"
			}
		>
			<div className={"text-4xl font-bold mb-12"}>About Me</div>
			<div
				className={cn(
					"flex justify-center items-center gap-14 mx-10",
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
		</div>
	);
};

export default About;
