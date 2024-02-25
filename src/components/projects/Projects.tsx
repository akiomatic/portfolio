import ProjectsContainer, {
	ProjectPosition,
} from "@/components/projects/ProjectsContainer";
import { Language, Tech } from "@/constants/technologies";
import { siFlutter } from "simple-icons";

const Projects = () => {
	return (
		<div
			id={"projects"}
			className={"flex flex-col items-center justify-center w-screen py-24"}
		>
			<h1 className={"text-4xl font-bold"}>Projects</h1>
			<ProjectsContainer>
				<ProjectsContainer.Project
					iconText={"2012"}
					imageSrc={[
						{
							src: "/images/placeholder-website.png",
							alt: "This is just a placeholder.",
						},
					]}
					position={ProjectPosition.LEFT}
				>
					<ProjectsContainer.DevDate startYear={2012} startMonth={2} />
					<ProjectsContainer.Title title={"Test 1"} />
					<ProjectsContainer.Description
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper pharetra sem, eget vulputate nunc aliquam vitae. Duis ac aliquam ligula. Vestibulum scelerisque molestie leo ac porta. Cras bibendum urna."
						}
					/>
					<ProjectsContainer.TechStack techs={[Language.Java]} />
				</ProjectsContainer.Project>
				<ProjectsContainer.Project
					iconText={"2020"}
					imageSrc={[
						{
							src: "/images/placeholder-phone.png",
							alt: "This is just a placeholder.",
						},
						{
							src: "/images/placeholder-phone.png",
							alt: "This is just a placeholder.",
						},
					]}
					position={ProjectPosition.RIGHT}
				>
					<ProjectsContainer.DevDate
						startYear={2020}
						startMonth={10}
						finishYear={2021}
						finishMonth={3}
					/>
					<ProjectsContainer.Title title={"Test 2"} />
					<ProjectsContainer.Description
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ultrices libero, ac tempor libero dignissim scelerisque. Sed nec felis vitae purus sollicitudin vulputate vitae quis risus. Mauris consequat, metus id mattis faucibus, tortor lorem tincidunt felis, in maximus quam velit nec arcu. Phasellus sagittis, turpis sit amet condimentum tempus."
						}
					/>
					<ProjectsContainer.TechStack
						techs={[Language.JavaScript, Tech.React, Tech.TailwindCSS]}
					/>
				</ProjectsContainer.Project>
				<ProjectsContainer.Project
					iconText={"2022"}
					imageSrc={[
						{
							src: "/images/placeholder-website.png",
							alt: "This is just a placeholder.",
						},
					]}
					position={ProjectPosition.LEFT}
				>
					<ProjectsContainer.DevDate
						startYear={2022}
						startMonth={10}
						finishYear={2022}
						finishMonth={12}
					/>
					<ProjectsContainer.Title title={"Test 3"} />
					<ProjectsContainer.Description
						description={"This is something test..."}
					/>
					<ProjectsContainer.TechStack
						techs={[
							Language.TypeScript,
							Tech.React,
							Tech.Next,
							Tech.TailwindCSS,
							Tech.ShadcnUI,
							Tech.Supabase,
						]}
					/>
				</ProjectsContainer.Project>
			</ProjectsContainer>
		</div>
	);
};

export default Projects;
