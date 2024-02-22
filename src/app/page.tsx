import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
	return (
		<div className={"flex flex-col items-center text-[#E5ECF0] bg-[#0B1215]"}>
			<Header />
			<Hero />
		</div>
	);
}
