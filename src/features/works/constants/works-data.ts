import { JavaIcon } from "@/constants/external-icons";
import { Icon } from "@/utils/types";
import {
	SimpleIcon,
	siAmazondynamodb,
	siAndroidstudio,
	siAwslambda,
	siCss3,
	siDart,
	siFirebase,
	siFlutter,
	siFramer,
	siGoogleappsscript,
	siGooglesheets,
	siHono,
	siHtml5,
	siJavascript,
	siLine,
	siNextdotjs,
	siReact,
	siRss,
	siShadcnui,
	siSupabase,
	siTailwindcss,
	siTypescript,
	siZapier,
} from "simple-icons";

export interface Work {
	id: string;
	date: number | string;
	team: boolean;
	title: string;
	overview: string;
	image: string;
	techStack: Array<SimpleIcon | Icon>;
	github?: string;
	website?: string;
	video?: string;
}

export const WORKS_DATA: Array<Work> = [
	{
		id: "1",
		date: "2020/4 - 2021/2",
		team: true,
		title: "Test App",
		overview:
			"An _Android app_ for students to **receive notifications** from their school, **solve quizzes**, and get to **know about the school**.",
		image: "/images/placeholder-website.png",
		techStack: [JavaIcon, siAndroidstudio, siFirebase, siZapier, siRss],
		video: "https://www.youtube.com/watch?v=6Ov1b9fMk4o",
	},
	{
		id: "2",
		date: "2022/6 - 7",
		team: false,
		title: "Stock manager",
		overview:
			"A _Line bot_ with Google Sheets to **automate** the process of **stock analysis**.",
		image: "/images/placeholder-website.png",
		techStack: [siJavascript, siGoogleappsscript, siGooglesheets, siLine],
		github: "https://www.github.com",
		video: "https://www.youtube.com/watch?v=6Ov1b9fMk4o",
	},
	{
		id: "3",
		date: "2023/1 - 4",
		team: false,
		title: "Campus App",
		overview:
			"A all-in-one _cross-platform mobile app_ for students to **receive personalized notifications**, **check their announcements**, and more.",
		image: "/images/placeholder-website.png",
		techStack: [siDart, siFlutter],
		video: "https://www.youtube.com/watch?v=6Ov1b9fMk4o",
	},
	{
		id: "4",
		date: "2023/10",
		team: false,
		title: "Mario",
		overview: "A _website_ for a fictional plumber **to showcase his work**.",
		image: "/images/placeholder-website.png",
		techStack: [siHtml5, siCss3, siJavascript],
		github: "https://www.github.com",
		website: "https://www.example.com",
	},
	{
		id: "5",
		date: "2023/11",
		title: "Codear",
		team: false,
		overview: "A _website_ for a fictional developer **to showcase his work**.",
		image: "/images/placeholder-website.png",
		techStack: [
			siJavascript,
			siReact,
			siNextdotjs,
			siTailwindcss,
			siHono,
			siAwslambda,
			siAmazondynamodb,
		],
		github: "https://www.github.com",
		website: "https://www.example.com",
	},
	{
		id: "6",
		date: "2023/11 -",
		team: true,
		title: "Tascurator",
		overview: "A _website_ for a fictional developer **to showcase his work**.",
		image: "/images/placeholder-website.png",
		techStack: [
			siTypescript,
			siReact,
			siNextdotjs,
			siTailwindcss,
			siShadcnui,
			siSupabase,
		],
		github: "https://www.github.com",
		website: "https://www.example.com",
	},
	{
		id: "7",
		date: "2024/2 - 3",
		team: false,
		title: "Portfolio",
		overview: "A _website_ for a fictional developer **to showcase his work**.",
		image: "/images/placeholder-website.png",
		techStack: [
			siTypescript,
			siReact,
			siNextdotjs,
			siTailwindcss,
			siFramer,
			siShadcnui,
		],
		github: "https://www.github.com",
		website: "https://www.example.com",
	},
];
