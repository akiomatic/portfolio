import SIIcon from "@/components/icons/SIIcon";
import { cn } from "@/lib/utils";
import { isSimpleIcon } from "@/utils/helpers";
import { Icon } from "@/utils/types";
import Image from "next/image";
import { SimpleIcon } from "simple-icons";

interface ISVGIconProps {
	className?: string;
	icon: SimpleIcon | Icon;
}

const SVGIcon = ({ className, icon }: ISVGIconProps) => {
	if (isSimpleIcon(icon)) {
		return <SIIcon icon={icon} className={className} />;
	}

	return (
		<div className={cn("relative h-6 w-6", className)}>
			<Image src={icon.dark} alt={icon.title} className={"object-fill"} fill />
		</div>
	);
};

export default SVGIcon;
