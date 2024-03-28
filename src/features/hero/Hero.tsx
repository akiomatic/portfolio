"use client";

import { Button } from "@/components/ui/button";
import { Terrain } from "@/features/hero/components/Terrain";
import { SVGIcon } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { siGithub, siLinkedin } from "simple-icons";

const Hero = () => {
	const [isNight, setIsNight] = useState(true);
	return (
		<div
			className={cn(
				"h-screen w-full flex justify-center items-center flex-col-reverse md:flex-row bg-gradient-to-br transition-all duration-500 lg:p-0 gap-y-16",
				!isNight
					? "from-[#90dffe] to-[#38a3d1]"
					: "from-[#202020] to-[#111119]",
			)}
		>
			<div
				className={
					"before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-20 before:backdrop-blur"
				}
			>
				<Terrain isNight={isNight} />
			</div>
			<div
				className={cn(
					"absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-16 z-30",
					"p-8 lg:p-0",
				)}
			>
				<div className={"flex flex-col justify-center items-center"}>
					<div
						className={
							"flex flex-col justify-center items-start bg-gradient-to-br bg-clip-text from-amber-400 via-lime-300 to-emerald-300 gap-y-2"
						}
					>
						<h1
							className={cn(
								"font-bold text-transparent tracking-tighter gap-y-4",
								"text-5xl sm:text-6xl lg:text-7xl flex flex-col sm:inline-block",
							)}
						>
							Hello! <span>I'm Akio.</span>
						</h1>
						<h2
							className={cn(
								"font-semibold mt-4 tracking-tighter",
								"text-xl min-[730px]:text-2xl lg:text-3xl",
							)}
						>
							I am a{" "}
							<span className={"text-transparent"}>front-end developer</span>,{" "}
							<div className={"flex sm:inline-block pt-2 min-[730px]:pt-0"}>
								<Link
									href={"#about"}
									className={"drop-shadow-3xl cursor-pointer"}
								>
									inspired by{" "}
									<span className={"text-transparent font-bold"}>
										Minecraft
									</span>
								</Link>
								.
							</div>
						</h2>
						<div
							className={
								"flex justify-center items-center gap-x-6 mt-8 tracking-tight"
							}
						>
							<Button
								variant={"secondary"}
								className={"text-base rounded-full"}
								asChild
							>
								<Link href={"#contact-me"} className={"flex"}>
									<p>Contact me here</p>
									<ArrowRightIcon className={"ml-2"} />
								</Link>
							</Button>
							<Button
								variant={"secondary"}
								size={"icon"}
								className={"rounded-full flex items-center justify-center"}
							>
								<Link
									href={"https://www.linkedin.com/in/akiomatic/"}
									className={"w-full h-full p-2.5"}
									target={"_blank"}
									rel={"noopener noreferrer"}
								>
									<SVGIcon icon={siLinkedin} />
								</Link>
							</Button>
							<Button
								variant={"secondary"}
								size={"icon"}
								className={"rounded-full flex items-center justify-center"}
							>
								<Link
									href={"https://www.github.com/akiomatic"}
									className={"w-full h-full p-2.5"}
									target={"_blank"}
									rel={"noopener noreferrer"}
								>
									<SVGIcon icon={siGithub} />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
