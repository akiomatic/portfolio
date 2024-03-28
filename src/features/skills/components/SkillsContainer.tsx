import Tooltip from "@/features/skills/components/Tooltip";
import { Skill } from "@/features/skills/constants/skills-data";
import Image from "next/image";
import { ReactNode } from "react";
import { SimpleIcon } from "simple-icons";

interface ISkillsContainerProps {
	children: ReactNode;
	title: string;
}

const SkillsContainer = ({ children, title }: ISkillsContainerProps) => {
	return (
		<div className={"flex items-center"}>
			<h1 className={"text-3xl font-bold w-[200px]"}>{title}</h1>
			<div className={"flex"}>{children}</div>
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
				<div className={"w-[40px] h-[40px] mx-2.5"}>
					<Image
						src={iconData.url}
						alt={iconData.title}
						className={"object-contain"}
						width={40}
						height={40}
					/>
				</div>
			</Tooltip>
		);
	}

	return (
		<Tooltip title={iconData.title}>
			<div className={"w-[40px] h-[40px] fill-white mx-2.5"}>
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
