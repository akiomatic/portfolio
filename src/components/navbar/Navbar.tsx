import { cn } from "@/lib/utils";
import Link from "next/link";

interface ISection {
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
			<div
				className={cn(
					"h-full flex items-center rounded-full border backdrop-blur-lg shadow-[20px_20px_40px_-12px_rgba(0,0,0,0.3)] bg-gray-50/10 border-gray-500/40",
					"w-full min-[380px]:w-11/12 lg:w-3/4 xl:w-2/3",
					"px-5 md:px-6",
					"justify-center sm:justify-between",
				)}
			>
				<div className={"hidden sm:flex"}>
					<Link href={"/"}>akiomatic</Link>
				</div>
				<div className={"flex sm:space-x-4"}>
					{sections.map((section) => {
						return (
							<div
								key={section.targetId}
								className={cn(
									"h-full py-1 px-4 rounded-full transition-all",
									"hover:bg-white hover:bg-opacity-20 sm:hover:bg-opacity-30",
									"sm:bg-white sm:bg-opacity-20",
								)}
							>
								<Link href={`#${section.targetId}`}>
									<>
										<p className={"block sm:hidden"}>
											{section.name.split(" ")[0]}
										</p>
										<p className={"hidden sm:block"}>{section.name}</p>
									</>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
