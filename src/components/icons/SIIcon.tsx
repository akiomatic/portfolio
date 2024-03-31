import { cn } from "@/lib/utils";
import { SimpleIcon } from "simple-icons";

interface ISIIconProps {
	icon: SimpleIcon;
	className?: string;
}

const SIIcon = ({ icon, className }: ISIIconProps) => {
	return (
		<div className={cn("h-6 w-6", className)}>
			<svg
				className={"pointer-events-none"}
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>{icon.title}</title>
				<path d={icon.path} />
			</svg>
		</div>
	);
};

export default SIIcon;
