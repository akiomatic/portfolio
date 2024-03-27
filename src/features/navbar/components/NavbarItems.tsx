import { ISection } from "@/features/navbar/Navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface INavbarItemsProps {
	children: ReactNode;
}

const NavbarItems = ({ children }: INavbarItemsProps) => {
	return <div className={"flex sm:space-x-4"}>{children}</div>;
};

interface INavbarItemProps {
	section: ISection;
}

const NavbarItem = ({ section }: INavbarItemProps) => {
	return (
		<div
			className={cn(
				"h-full py-1 px-4 rounded-full transition-all",
				"hover:bg-white hover:bg-opacity-20 sm:hover:bg-opacity-30",
				"sm:bg-white sm:bg-opacity-20",
			)}
		>
			<Link href={`#${section.targetId}`}>
				<>
					<p className={"block sm:hidden"}>{section.name.split(" ")[0]}</p>
					<p className={"hidden sm:block"}>{section.name}</p>
				</>
			</Link>
		</div>
	);
};

NavbarItems.Item = NavbarItem;

export default NavbarItems;
