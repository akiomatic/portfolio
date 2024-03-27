import { INTRO_TEXT } from "@/features/about/constants/text-data";
import Markdown from "react-markdown";

const About = () => {
	return (
		<div
			id={"about"}
			className={
				"flex flex-col items-center justify-center w-screen xl:w-[1200px] py-24"
			}
		>
			<div className={"text-4xl font-bold"}>About Me</div>
			<div className={"text-lg mt-12 space-y-5 mx-10"}>
				<Markdown
					components={{
						strong: (props) => {
							const { node, ...rest } = props;
							return <strong className={"text-lime-300"} {...rest} />;
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
