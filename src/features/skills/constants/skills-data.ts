import {
	SimpleIcon,
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
	siPostman,
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

export interface Skill {
	title: string;
	url: string;
}

interface SkillSet {
	title: string;
	skills: Array<SimpleIcon | Skill>;
}

export const SKILL_SETS: Array<SkillSet> = [
	{
		title: "Languages",
		skills: [
			{ title: "Java", url: "/icons/icon-java-dark.svg" },
			siDart,
			siHtml5,
			siCss3,
			siSass,
			siJavascript,
			siTypescript,
		],
	},
	{
		title: "Front-End",
		skills: [
			siFlutter,
			siReact,
			siNextdotjs,
			siAstro,
			siJquery,
			siBootstrap,
			siTailwindcss,
			siShadcnui,
		],
	},
	{
		title: "Back-End",
		skills: [
			siNodedotjs,
			siHono,
			siMysql,
			siSupabase,
			siFirebase,
			siAmazondynamodb,
			siAwslambda,
		],
	},
	{
		title: "Tools",
		skills: [
			siGit,
			siGithub,
			siFigma,
			siPostman,
			siVercel,
			siVisualstudiocode,
			siWebstorm,
		],
	},
];
