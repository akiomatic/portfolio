import ContactMe from "@/components/contact_me/ContactMe";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Works from "@/components/works/Works";
import About from "@/features/about/About";
import Navbar from "@/features/navbar/Navbar";

export default function Home() {
	return (
		<div className={"flex flex-col items-center text-[#fff] bg-[#0B1215]"}>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Works />
			<ContactMe />
		</div>
	);
}
