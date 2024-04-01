import About from "@/features/about/About";
import ContactMe from "@/features/contact_me/ContactMe";
import Hero from "@/features/hero/Hero";
import Navbar from "@/features/navbar/Navbar";
import Skills from "@/features/skills/Skills";
import Works from "@/features/works/Works";

export default function Home() {
	return (
		<div
			className={
				"flex flex-col items-center text-black dark:text-white bg-[#C4C4C4] dark:bg-[#272727]"
			}
		>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Works />
			<ContactMe />
		</div>
	);
}
