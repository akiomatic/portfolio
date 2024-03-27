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
					"flex justify-center items-center gap-x-14 gap-y-14",
					"flex-col md:flex-row",
					"mx-10",
				)}
			>
				<Image
					src={"/images/placeholder-icon.webp"}
					alt={"Selfie"}
					width={256}
					height={256}
					priority
					className={"rounded-full"}
				/>
				<div className={"flex-1 text-lg space-y-3"}>
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
											"text-2xl font-semibold [&:not(:first-child)]:pt-6"
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
