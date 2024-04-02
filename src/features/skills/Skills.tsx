import SectionContainer from "@/components/sections/SectionContainer";
import SkillsContainer from "@/features/skills/components/SkillsContainer";
import { SKILL_SETS } from "@/features/skills/constants/skills-data";
import { isSimpleIcon } from "@/lib/utils";

const Skills = () => {
	return (
		<SectionContainer id={"skills"} title={"Skills"} className={"w-screen"}>
			<div className={"flex flex-col gap-y-10"}>
				{SKILL_SETS.map((skillSet) => (
					<SkillsContainer key={skillSet.title} title={skillSet.title}>
						{skillSet.skills.map((skill) => (
							<SkillsContainer.Item
								key={isSimpleIcon(skill) ? skill.slug : skill}
								iconData={skill}
							/>
						))}
					</SkillsContainer>
				))}
			</div>
		</SectionContainer>
	);
};

export default Skills;
