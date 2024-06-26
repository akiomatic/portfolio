import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ISectionContainerProps {
	id?: string;
	title: string;
	className?: string;
	children: ReactNode;
}

const SectionContainer = ({
	id,
	title,
	className,
	children,
}: ISectionContainerProps) => {
	return (
		<div
			id={id}
			className={cn(
				"flex flex-col items-center justify-center py-24 scroll-mt-12",
				className,
			)}
		>
			<h1 className={cn("font-bold mb-12", "text-3xl md:text-4xl")}>{title}</h1>
			{children}
		</div>
	);
};

export default SectionContainer;
