import { Button } from "@/components/ui/button";
import { ISection } from "@/features/navbar/Navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface INavbarItemsProps {
	children: ReactNode;
}

const NavbarItems = ({ children }: INavbarItemsProps) => {
	return (
		<div className={"flex justify-center items-center sm:space-x-3"}>
			{children}
		</div>
	);
};

interface INavbarItemProps {
	section: ISection;
}

const NavbarItem = ({ section }: INavbarItemProps) => {
	return (
		<Button
			className={cn(
				"h-full py-1 rounded-full transition-all font-normal",
				"hover:bg-gray-500/20 sm:hover:bg-gray-500/30 dark:hover:bg-white/20 dark:sm:hover:bg-white/30",
				"sm:bg-gray-500/20 dark:sm:bg-white/20",
				"text-sm sm:text-base",
				"text-black dark:text-white",
				"px-4",
			)}
			asChild
		>
			<Link href={`#${section.targetId}`}>
				<>
					<p className={"block sm:hidden"}>{section.name.split(" ")[0]}</p>
					<p className={"hidden sm:block"}>{section.name}</p>
				</>
			</Link>
		</Button>
	);
};

NavbarItems.Item = NavbarItem;

export default NavbarItems;
