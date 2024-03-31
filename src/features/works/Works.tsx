import SectionContainer from "@/components/sections/SectionContainer";
import WorkCard from "@/features/works/components/WorkCard";
import WorksContainer from "@/features/works/components/WorksContainer";
import { WORKS_DATA } from "@/features/works/constants/works-data";

const Works = () => {
	return (
		<SectionContainer id={"works"} title={"Works"} className={"w-screen"}>
			<WorksContainer>
				{WORKS_DATA.map((work) => {
					return <WorkCard key={work.id} work={work} />;
				})}
			</WorksContainer>
		</SectionContainer>
	);
};

export default Works;
