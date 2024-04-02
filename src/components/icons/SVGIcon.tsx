import JavaIcon from "@/assets/icons/java.svg";
import SIIcon from "@/components/icons/SIIcon";
import { Icon } from "@/constants/enums";
import { cn, isSimpleIcon } from "@/lib/utils";
import { SimpleIcon } from "simple-icons";

interface ISVGIconProps {
	className?: string;
	icon: SimpleIcon | Icon;
}

const SVGIcon = ({ className, icon }: ISVGIconProps) => {
	if (!isSimpleIcon(icon)) {
		switch (icon) {
			case Icon.Java:
				return <JavaIcon className={cn("h-6 w-6", className)} />;
			default:
				return null;
		}
	}

	return <SIIcon icon={icon} className={className} />;
};

export default SVGIcon;
