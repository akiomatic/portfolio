import SkillsContainer from "@/components/skills/SkillsContainer";
import { JavaIcon } from "@/utils/icons";
import React from "react";
import {
	siAmazondynamodb,
	siAstro,
	siAwslambda,
	siBootstrap,
	siCss3,
	siDart,
	siFigma,
	siFirebase,
	siFlutter,
	siGit,
	siGithub,
	siHono,
	siHtml5,
	siJavascript,
	siJquery,
	siMysql,
	siNextdotjs,
	siNodedotjs,
	siReact,
	siSass,
	siShadcnui,
	siSupabase,
	siTailwindcss,
	siTypescript,
	siVercel,
	siVisualstudiocode,
	siWebstorm,
} from "simple-icons";

const Skills = () => {
	return (
		<div
			id={"skills"}
			className={"flex flex-col items-center justify-center w-screen py-24"}
		>
			<h1 className={"text-4xl font-bold"}>Skills</h1>
			<div className={"flex flex-col gap-y-10 mt-12"}>
				<SkillsContainer title={"Languages"}>
					<SkillsContainer.ItemSVG title={"Java"}>
						<JavaIcon />
					</SkillsContainer.ItemSVG>
					<SkillsContainer.Item iconData={siDart} />
					<SkillsContainer.Item iconData={siHtml5} />
					<SkillsContainer.Item iconData={siCss3} />
					<SkillsContainer.Item iconData={siSass} />
					<SkillsContainer.Item iconData={siJavascript} />
					<SkillsContainer.Item iconData={siTypescript} />
				</SkillsContainer>
				<SkillsContainer title={"Front-End"}>
					<SkillsContainer.Item iconData={siFlutter} />
					<SkillsContainer.Item iconData={siReact} />
					<SkillsContainer.Item iconData={siNextdotjs} />
					<SkillsContainer.Item iconData={siAstro} />
					<SkillsContainer.Item iconData={siJquery} />
					<SkillsContainer.Item iconData={siBootstrap} />
					<SkillsContainer.Item iconData={siTailwindcss} />
					<SkillsContainer.Item iconData={siShadcnui} />
				</SkillsContainer>
				<SkillsContainer title={"Back-End"}>
					<SkillsContainer.Item iconData={siNodedotjs} />
					<SkillsContainer.Item iconData={siHono} />
					<SkillsContainer.Item iconData={siMysql} />
					<SkillsContainer.Item iconData={siSupabase} />
					<SkillsContainer.Item iconData={siFirebase} />
					<SkillsContainer.Item iconData={siAmazondynamodb} />
					<SkillsContainer.Item iconData={siAwslambda} />
				</SkillsContainer>
				<SkillsContainer title={"Tools"}>
					<SkillsContainer.Item iconData={siGit} />
					<SkillsContainer.Item iconData={siGithub} />
					<SkillsContainer.Item iconData={siFigma} />
					<SkillsContainer.Item iconData={siVercel} />
					<SkillsContainer.Item iconData={siVisualstudiocode} />
					<SkillsContainer.Item iconData={siWebstorm} />
				</SkillsContainer>
			</div>
		</div>
	);
};

export default Skills;
