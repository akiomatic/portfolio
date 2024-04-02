import { Icon } from "@/constants/enums";
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

interface SkillSet {
	title: string;
	skills: Array<SimpleIcon | Icon>;
}

export const SKILL_SETS: Array<SkillSet> = [
	{
		title: "Languages",
		skills: [
			Icon.Java,
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
