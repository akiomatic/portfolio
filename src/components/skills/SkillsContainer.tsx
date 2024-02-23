import Tooltip from "@/components/ui/Tooltip";
import React from "react";
import { SimpleIcon } from "simple-icons";

interface ISkillsContainerProps {
	children: React.ReactNode;
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

interface IItemWithSimpleIconProps {
	iconData: SimpleIcon;
}

const ItemWithSimpleIcon = ({ iconData }: IItemWithSimpleIconProps) => {
	return (
		<Tooltip title={iconData.title}>
			<div className={"w-[40px] h-[40px] fill-[#E5ECF0] mx-2.5"}>
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

interface IItemWithSVG {
	children: React.ReactNode;
	title: string;
}

const ItemWithSVG = ({ children, title }: IItemWithSVG) => {
	return (
		<Tooltip title={title}>
			<div className={"w-[40px] h-[40px] fill-[#E5ECF0] mx-2.5"}>
				{children}
			</div>
		</Tooltip>
	);
};

SkillsContainer.Item = ItemWithSimpleIcon;
SkillsContainer.ItemSVG = ItemWithSVG;

export default SkillsContainer;
