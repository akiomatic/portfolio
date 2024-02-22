const About = () => {
	return (
		<div
			id={"about"}
			className={
				"flex flex-col items-center justify-center w-screen xl:w-[1200px] py-24"
			}
		>
			<div className={"text-4xl font-bold"}>About Me</div>
			<div className={"mt-12 space-y-5 mx-10"}>
				<div>
					In 2015, I came across a game that significantly influenced my career
					path: <span className={"text-lime-300"}>Minecraft</span>. I didn't
					just play it for fun; it gave me a chance to{" "}
					<span className={"text-lime-300"}>create</span> and{" "}
					<span className={"text-lime-300"}>change</span> a world or a server{" "}
					<span className={"text-lime-300"}>through coding</span>. While
					designing <span className={"text-lime-300"}>plugins</span> and
					altering the game environment, I became deeply engrossed in{" "}
					<span className={"text-lime-300"}>
						turning ideas into reality in Java
					</span>
					. It was a huge eye-opener. The ability to solve problems and build
					things in a digital world sparked a real interest in programming for
					me.
				</div>
				<div>
					Now, I find myself in Canada, pursing my dream to become a{" "}
					<span className={"text-lime-300"}>front-end developer</span>. This
					field, for me, is the perfect canvas to blend my programming skills
					with my passion for creating{" "}
					<span className={"text-lime-300"}>intuitive</span>,{" "}
					<span className={"text-lime-300"}>visually compelling</span> user
					experiences. It's here that I aim to{" "}
					<span className={"text-lime-300"}>innovate</span> and{" "}
					<span className={"text-lime-300"}>contribute</span> to the digital
					world, inspired by the same{" "}
					<span className={"text-lime-300"}>curiosity</span> that Minecraft
					ignited in me years ago.
				</div>
				<div>
					By the way, in my free time, I still play Minecraft and enjoy Animal
					Crossing, which helps me relax and fuel my creativity in unexpected
					ways.
				</div>
			</div>
		</div>
	);
};

export default About;
