import { Language, Tech } from "@/constants/technologies";
import WorksContainer, {
	ProjectPosition,
} from "@/features/works/WorksContainer";
import { siFlutter } from "simple-icons";

const Works = () => {
	return (
		<div
			id={"works"}
			className={"flex flex-col items-center justify-center w-screen py-24"}
		>
			<h1 className={"text-4xl font-bold"}>Works</h1>
			<WorksContainer>
				<WorksContainer.Project
					iconText={"2012"}
					imageSrc={[
						{
							src: "/images/placeholder-website.png",
							alt: "This is just a placeholder.",
						},
					]}
					position={ProjectPosition.LEFT}
				>
					<WorksContainer.DevDate startYear={2012} startMonth={2} />
					<WorksContainer.Title title={"Test 1"} />
					<WorksContainer.Description
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper pharetra sem, eget vulputate nunc aliquam vitae. Duis ac aliquam ligula. Vestibulum scelerisque molestie leo ac porta. Cras bibendum urna."
						}
					/>
					<WorksContainer.TechStack techs={[Language.Java]} />
				</WorksContainer.Project>
				<WorksContainer.Project
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
					<WorksContainer.DevDate
						startYear={2020}
						startMonth={10}
						finishYear={2021}
						finishMonth={3}
					/>
					<WorksContainer.Title title={"Test 2"} />
					<WorksContainer.Description
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ultrices libero, ac tempor libero dignissim scelerisque. Sed nec felis vitae purus sollicitudin vulputate vitae quis risus. Mauris consequat, metus id mattis faucibus, tortor lorem tincidunt felis, in maximus quam velit nec arcu. Phasellus sagittis, turpis sit amet condimentum tempus."
						}
					/>
					<WorksContainer.TechStack
						techs={[Language.JavaScript, Tech.React, Tech.TailwindCSS]}
					/>
				</WorksContainer.Project>
				<WorksContainer.Project
					iconText={"2022"}
					imageSrc={[
						{
							src: "/images/placeholder-website.png",
							alt: "This is just a placeholder.",
						},
					]}
					position={ProjectPosition.LEFT}
				>
					<WorksContainer.DevDate
						startYear={2022}
						startMonth={10}
						finishYear={2022}
						finishMonth={12}
					/>
					<WorksContainer.Title title={"Test 3"} />
					<WorksContainer.Description
						description={"This is something test..."}
					/>
					<WorksContainer.TechStack
						techs={[
							Language.TypeScript,
							Tech.React,
							Tech.Next,
							Tech.TailwindCSS,
							Tech.ShadcnUI,
							Tech.Supabase,
						]}
					/>
				</WorksContainer.Project>
			</WorksContainer>
		</div>
	);
};

export default Works;
