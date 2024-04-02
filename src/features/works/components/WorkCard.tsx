import SVGIcon from "@/components/icons/SVGIcon";
import { Button } from "@/components/ui/button";
import { Work } from "@/features/works/constants/works-data";
import { cn, isSimpleIcon } from "@/lib/utils";
import {
	ExternalLinkIcon,
	GitHubLogoIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface IGlobalProps {
	work: Work;
}

const ImageSection = ({ work }: IGlobalProps) => {
	const { image, team } = work;

	return (
		<div className="relative w-full h-full flex justify-center items-center">
			<Image
				key={image}
				src={image}
				alt="Sample image"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover rounded-lg"
			/>
			{team && (
				<p className="absolute top-3 right-3 rounded-full bg-gray-200/70 dark:bg-black/70 text-sm px-3 py-1">
					Team
				</p>
			)}
		</div>
	);
};

const TechStack = ({ work }: IGlobalProps) => {
	const { techStack } = work;

	return (
		<div className="flex gap-x-4 mt-4">
			{techStack.map((tech) => (
				<SVGIcon
					key={isSimpleIcon(tech) ? tech.slug : tech}
					icon={tech}
					className="w-[20px] h-[20px] fill-black dark:fill-white"
				/>
			))}
		</div>
	);
};

const Overview = ({ work }: IGlobalProps) => {
	const { date, title, overview } = work;

	return (
		<>
			<p className="text-sm mt-4">{date}</p>
			<h2 className="text-xl font-semibold">{title}</h2>
			<div className="flex-1 mt-2 overflow-hidden">
				<Markdown
					components={{
						em: ({ node, ...rest }) => {
							return (
								<em
									className={"not-italic text-violet-900 dark:text-amber-300"}
									{...rest}
								/>
							);
						},
						strong: ({ node, ...rest }) => {
							return (
								<strong
									className={"font-normal text-purple-700 dark:text-lime-300"}
									{...rest}
								/>
							);
						},
					}}
				>
					{overview}
				</Markdown>
			</div>
		</>
	);
};

const ActionLinks = ({ work }: IGlobalProps) => {
	const { id, github, website, video, content } = work;

	return (
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
			<Button
				className={cn(
					"disabled:pointer-events-auto disabled:cursor-not-allowed",
				)}
				disabled={!content}
				asChild={!!content}
			>
				{!content ? (
					"Coming soon..."
				) : (
					<Link href={`/work/${id}`}> Learn more</Link>
				)}
			</Button>
		</div>
	);
};

const WorkCard = ({ work }: IGlobalProps) => {
	return (
		<div
			className={cn(
				"rounded-lg p-8 grid grid-rows-3 w-[325px] h-[525px] text-black dark:text-white backdrop-blur-lg shadow-[20px_20px_40px_-12px_rgba(0,0,0,0.3)] bg-gray-50/10 border-gray-500/40 transition-all duration-300",
				"hover:scale-105",
			)}
		>
			<ImageSection work={work} />
			<div className="flex flex-col row-span-2">
				<TechStack work={work} />
				<Overview work={work} />
				<ActionLinks work={work} />
			</div>
		</div>
	);
};

export default WorkCard;
