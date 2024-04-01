import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface INavbarContainerProps {
	children: ReactNode;
}

const NavbarContainer = ({ children }: INavbarContainerProps) => {
	return (
		<div
			className={cn(
				"h-full flex items-center rounded-full border backdrop-blur-lg shadow-[20px_20px_40px_-12px_rgba(0,0,0,0.3)]",
				"w-full min-[380px]:w-11/12 lg:w-3/4 xl:w-2/3",
				"px-5 md:px-6",
				"justify-center sm:justify-between",
				"text-sm sm:text-base",
				"text-black dark:text-white",
				" bg-white/40 dark:bg-gray-50/10 border-black/40 dark:border-gray-500/40",
			)}
		>
			{children}
		</div>
	);
};

interface IHomeLinkProps {
	children: ReactNode;
}

const HomeLink = ({ children }: IHomeLinkProps) => {
	return <div className={"hidden sm:flex"}>{children}</div>;
};

NavbarContainer.HomeLink = HomeLink;

export default NavbarContainer;
