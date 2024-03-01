import Link from "next/link";

interface ISection {
	name: string;
	targetId: string;
}

const sections: Array<ISection> = [
	{ name: "About Me", targetId: "about" },
	{ name: "Skills", targetId: "skills" },
	{ name: "Projects", targetId: "projects" },
	{ name: "Contact Me", targetId: "contact-me" },
];

const Header = () => {
	return (
		<nav
			className={
				"fixed top-0 left-0 h-[60px] w-full flex justify-center items-center mt-8"
			}
		>
			<div
				className={
					"bg-white backdrop-filter backdrop-blur-md w-3/4 lg:w-2/3 h-full rounded-full bg-opacity-20 border border-white border-opacity-20 flex items-center justify-between px-6"
				}
			>
				<div className={"flex"}>
					<Link href={"/"}>akiomatic</Link>
				</div>
				<div className={"flex space-x-4"}>
					{sections.map((section) => {
						return (
							<div
								key={section.targetId}
								className={
									"h-full p-1 px-4 bg-white rounded-full bg-opacity-20"
								}
							>
								<Link href={`#${section.targetId}`}>{section.name}</Link>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Header;
