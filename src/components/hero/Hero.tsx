"use client";

import Image from "next/image";
import { useState } from "react";

const Hero = () => {
	const [isHovering, setIsHovering] = useState(false);

	const inspirationText = isHovering ? "How?" : "inspired by Minecraft";

	return (
		<div
			className={
				"h-screen w-full flex justify-center items-center bg-[#0B1215] space-x-20"
			}
		>
			<div className={"flex flex-col items-start w-[500px]"}>
				<h1 className={"text-6xl"}>
					Hello, I'm <span className={"text-lime-200 font-bold"}>Akio</span>!
				</h1>
				<h2 className={"text-3xl pt-2"}>A Front-End Developer</h2>
				<p className={"text-lg pt-6 text-white/60"}>
					I'm Akio Osawa, a passionate programmer since 2016,{" "}
					<span
						className={
							"drop-shadow-3xl shadow-white font-semibold text-lime-200 cursor-pointer"
						}
					>
						inspired by Minecraft
					</span>
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
