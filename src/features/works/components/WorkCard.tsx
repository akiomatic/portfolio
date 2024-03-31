import SVGIcon from "@/components/icons/SVGIcon";
import { Button } from "@/components/ui/button";
import { Work } from "@/features/works/constants/works-data";
import { cn } from "@/lib/utils";
import { Icon } from "@/utils/types";
import {
	ExternalLinkIcon,
	GitHubLogoIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import { SimpleIcon } from "simple-icons";

interface IImageSectionProps {
	image: string;
	team?: boolean;
}
const ImageSection = ({ image, team }: IImageSectionProps) => (
	<div className="relative w-full h-full flex justify-center items-center">
		<Image
			key={image}
			src={image}
			alt="Sample image"
			fill
			sizes="100vw"
			className="object-cover rounded-lg"
		/>
		{team && (
			<p className="absolute top-3 right-3 rounded-full bg-black/70 text-sm px-3 py-1">
				Team
			</p>
		)}
	</div>
);

interface ITechStackProps {
	techStack: Array<SimpleIcon | Icon>;
}
const TechStack = ({ techStack }: ITechStackProps) => (
	<div className="flex gap-x-4 mt-4 fill-white">
		{techStack.map((tech) => (
			<SVGIcon key={tech.title} icon={tech} className="w-[20px] h-[20px]" />
		))}
	</div>
);

interface IOverviewProps {
	date: string | number;
	title: string;
	overview: string;
}

const Overview = ({ date, title, overview }: IOverviewProps) => (
	<>
		<p className="text-sm mt-4">{date}</p>
		<h3 className="text-xl font-semibold">{title}</h3>
		<div className="flex-1 text-white mt-2 overflow-hidden">
			<Markdown
				components={{
					em: ({ node, ...rest }) => {
						return <em className={"not-italic text-amber-300"} {...rest} />;
					},
					strong: ({ node, ...rest }) => {
						return <strong className={"font-normal text-lime-300"} {...rest} />;
					},
				}}
			>
				{overview}
			</Markdown>
		</div>
	</>
);

interface IActionLinksProps {
	id: string;
	github?: string;
	website?: string;
	video?: string;
}
const ActionLinks = ({ id, github, website, video }: IActionLinksProps) => (
	<div className="flex justify-between items-center mt-4">
		<div className="flex gap-x-2">
			{github && (
				<Button variant={"secondary"} size={"icon"} asChild>
					<Link href={github} target="_blank" rel="noopener noreferrer">
						<GitHubLogoIcon className="w-5 h-5" />
					</Link>
				</Button>
			)}
			{website && (
				<Button variant={"secondary"} size={"icon"} asChild>
					<Link href={website} target="_blank" rel="noopener noreferrer">
						<ExternalLinkIcon className="w-5 h-5" />
					</Link>
				</Button>
			)}
			{video && (
				<Button variant={"secondary"} size={"icon"} asChild>
					<Link href={video} target="_blank" rel="noopener noreferrer">
						<VideoIcon className="w-5 h-5" />
					</Link>
				</Button>
			)}
		</div>
		<Button variant={"secondary"} asChild>
			<p>Learn more</p>
		</Button>
	</div>
);

interface IWorkCardProps {
	work: Work;
}

const WorkCard = ({ work }: IWorkCardProps) => {
	const {
		id,
		date,
		team,
		title,
		overview,
		image,
		techStack,
		github,
		website,
		video,
	} = work;

	return (
		<div
			className={cn(
				"rounded-lg p-8 grid grid-rows-3 w-[325px] h-[525px] text-white backdrop-blur-lg shadow-[20px_20px_40px_-12px_rgba(0,0,0,0.3)] bg-gray-50/10 border-gray-500/40 transition-all duration-300",
				"hover:scale-105",
			)}
		>
			<ImageSection image={image} team={team} />
			<div className="flex flex-col row-span-2">
				<TechStack techStack={techStack} />
				<Overview date={date} title={title} overview={overview} />
				<ActionLinks id={id} github={github} website={website} video={video} />
			</div>
		</div>
	);
};

export default WorkCard;
