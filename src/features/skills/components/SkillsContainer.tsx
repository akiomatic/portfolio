import SVGIcon from "@/components/icons/SVGIcon";
import { Icon } from "@/constants/enums";
import Tooltip from "@/features/skills/components/Tooltip";
import { cn, isSimpleIcon } from "@/lib/utils";
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
	iconData: SimpleIcon | Icon;
}

const Item = ({ iconData }: IItemProps) => {
	return (
		<Tooltip title={isSimpleIcon(iconData) ? iconData.title : iconData}>
			<div
				className={cn(
					"relative mx-2.5 transition-all",
					"hover:cursor-pointer hover:scale-125",
					"w-[30px] md:w-[35px] h-[30px] md:h-[35px]",
				)}
			>
				<SVGIcon icon={iconData} className={"fill-black dark:fill-white"} />
			</div>
		</Tooltip>
	);
};

SkillsContainer.Item = Item;

export default SkillsContainer;
