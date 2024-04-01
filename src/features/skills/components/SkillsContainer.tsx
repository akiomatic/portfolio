import Tooltip from "@/features/skills/components/Tooltip";
import { Skill } from "@/features/skills/constants/skills-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import { SimpleIcon } from "simple-icons";

interface ISkillsContainerProps {
	children: ReactNode;
	title: string;
}

const SkillsContainer = ({ children, title }: ISkillsContainerProps) => {
	return (
		<div className={cn("flex items-center gap-y-6", "flex-col md:flex-row")}>
			<h2 className={cn("font-bold", "text-xl md:text-2xl md:w-[175px]")}>
				{title}
			</h2>
			<div className={cn("gap-y-6 grid-cols-5", "grid sm:flex")}>
				{children}
			</div>
		</div>
	);
};

interface IItemProps {
	iconData: SimpleIcon | Skill;
}

const isSimpleIcon = (iconData: SimpleIcon | Skill): iconData is SimpleIcon => {
	return "path" in iconData;
};

const Item = ({ iconData }: IItemProps) => {
	return (
		<Tooltip title={iconData.title}>
			<div
				className={cn(
					"relative mx-2.5 transition-all",
					"hover:cursor-pointer hover:scale-125",
					"w-[30px] md:w-[35px] h-[30px] md:h-[35px]",
					isSimpleIcon(iconData) && "fill-black dark:fill-white",
				)}
			>
				{isSimpleIcon(iconData) ? (
					<svg
						role={"img"}
						viewBox={"0 0 24 24"}
						xmlns={"http://www.w3.org/2000/svg"}
					>
						<path d={iconData.path} />
					</svg>
				) : (
					<Image
						src={iconData.url}
						alt={iconData.title}
						className={"object-contain"}
						fill
						sizes="(max-width: 768px) 30px, 35px"
					/>
				)}
			</div>
		</Tooltip>
	);
};

SkillsContainer.Item = Item;

export default SkillsContainer;
