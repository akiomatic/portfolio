import { INTRO_TEXT } from "@/features/about/constants/text-data";
import Markdown from "react-markdown";

const About = () => {
	return (
		<div
			id={"about"}
			className={
				"flex flex-col items-center justify-center w-screen xl:w-[1200px] py-24 scroll-mt-12"
			}
		>
			<div className={"text-4xl font-bold mb-12"}>About Me</div>
			<div className={"text-lg space-y-3 mx-10"}>
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
	);
};

export default About;
