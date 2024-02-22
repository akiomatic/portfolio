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
					path: Minecraft. I didn't just play it for fun; it gave me a chance to
					create and change a world or a server through coding. While designing
					plugins and altering the game environment, I became deeply engrossed
					in turning ideas into reality in Java. It was a huge eye-opener. The
					ability to solve problems and build things in a digital world sparked
					a real interest in programming for me.
				</div>
				<div>
					Now, I find myself in Canada, pursing my dream to become a front-end
					developer. This field, for me, is the perfect canvas to blend my
					programming skills with my passion for creating intuitive, visually
					compelling user experiences. It's here that I aim to innovate and
					contribute to the digital landscape, inspired by the same curiosity
					that Minecraft ignited in me years ago.
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
