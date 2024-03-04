import Image from "next/image";
import Link from "next/link";
const Hero = () => {
	return (
		<div
			className={
				"h-screen w-full flex justify-center items-center flex-col-reverse md:flex-row lg:space-x-20 p-10 lg:p-0 gap-y-16"
			}
		>
			<div
				className={
					"flex flex-col items-center md:items-start text-center md:text-start w-[500px]"
				}
			>
				<h1 className={"text-6xl"}>
					Hello, I'm <span className={"text-lime-200 font-bold"}>Akio</span>!
				</h1>
				<h2 className={"text-3xl pt-2"}>A Front-End Developer</h2>
				<p className={"text-lg pt-6 text-current/60"}>
					I'm Akio Osawa, a passionate programmer since 2016,{" "}
					<Link
						href={"#about"}
						className={
							"drop-shadow-3xl shadow-white font-semibold text-lime-200 cursor-pointer"
						}
					>
						inspired by Minecraft
					</Link>
					.
				</p>
				{/*<div className={"flex w-full my-5"}>*/}
				{/*	<div>I'm</div>*/}
				{/*	<div className={"text-[120px] leading-none ml-auto"}>Akio</div>*/}
				{/*	<div className={"self-end pb-4"}>,</div>*/}
				{/*</div>*/}
				{/*<div className={"self-end"}>*/}
				{/*	a <span className={"text-lime-300"}>Minecraft-inspired</span>*/}
				{/*</div>*/}
				{/*<div className={"self-end"}>Front-End Developer</div>*/}
			</div>
			<Image
				src={"/images/placeholder-icon.webp"}
				alt={"Placeholder icon"}
				width={300}
				height={300}
				className={"rounded-full"}
			/>
		</div>
	);
};

export default Hero;
