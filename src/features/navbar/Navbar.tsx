import NavbarContainer from "@/features/navbar/components/NavbarContainer";
import NavbarItems from "@/features/navbar/components/NavbarItems";
import Link from "next/link";

export interface ISection {
	name: string;
	targetId: string;
}

const sections: Array<ISection> = [
	{ name: "About Me", targetId: "about" },
	{ name: "Skills", targetId: "skills" },
	{ name: "Works", targetId: "works" },
	{ name: "Contact Me", targetId: "contact-me" },
];

const Navbar = () => {
	return (
		<nav
			className={
				"fixed top-0 left-0 h-[60px] w-full flex justify-center items-center mt-8 z-50"
			}
		>
			<NavbarContainer>
				<NavbarContainer.HomeLink>
					<Link href={"/"}>akiomatic</Link>
				</NavbarContainer.HomeLink>
				<NavbarItems>
					{sections.map((section) => {
						return (
							<NavbarItems.Item key={section.targetId} section={section} />
						);
					})}
				</NavbarItems>
			</NavbarContainer>
		</nav>
	);
};

export default Navbar;
