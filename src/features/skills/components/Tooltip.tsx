import {
	Tooltip as TooltipComponent,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface ITooltipProps {
	children: React.ReactNode;
	title: string;
}

const Tooltip = ({ children, title }: ITooltipProps) => {
	return (
		<TooltipProvider delayDuration={0}>
			<TooltipComponent>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className={"mb-1 rounded-full"}>
					<p>{title}</p>
				</TooltipContent>
			</TooltipComponent>
		</TooltipProvider>
	);
};

export default Tooltip;
