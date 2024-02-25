import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
	return (
		<div className={"flex flex-col items-center text-[#E5ECF0] bg-[#0B1215]"}>
			<Header />
			<Hero />
			<About />
			<Skills />
			<Projects />
		</div>
	);
}
