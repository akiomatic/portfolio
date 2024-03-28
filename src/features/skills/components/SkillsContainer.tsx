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
			<h2 className={"text-xl md:text-2xl font-bold md:w-[175px]"}>{title}</h2>
			<div className={"grid grid-cols-5 gap-y-6 sm:flex"}>{children}</div>
		</div>
	);
};

interface IItemProps {
	iconData: SimpleIcon | Skill;
}

const isSkill = (iconData: SimpleIcon | Skill): iconData is Skill => {
	return !("path" in iconData);
};

const Item = ({ iconData }: IItemProps) => {
	if (isSkill(iconData)) {
		return (
			<Tooltip title={iconData.title}>
				<div
					className={cn(
						"relative mx-2.5 transition-all",
						"hover:cursor-pointer hover:scale-125",
						"w-[30px] md:w-[35px] h-[30px] md:h-[35px]",
					)}
				>
					<Image
						src={iconData.url}
						alt={iconData.title}
						className={"object-contain"}
						fill
						sizes="(max-width: 768px) 30px, 35px"
					/>
				</div>
			</Tooltip>
		);
	}

	return (
		<Tooltip title={iconData.title}>
			<div
				className={cn(
					"relative mx-2.5 fill-white transition-all",
					"hover:cursor-pointer hover:scale-125",
					"w-[30px] md:w-[35px] h-[30px] md:h-[35px]",
				)}
			>
				<svg
					role={"img"}
					viewBox={"0 0 24 24"}
					xmlns={"http://www.w3.org/2000/svg"}
				>
					<path d={iconData.path} />
				</svg>
			</div>
		</Tooltip>
	);
};

SkillsContainer.Item = Item;

export default SkillsContainer;
