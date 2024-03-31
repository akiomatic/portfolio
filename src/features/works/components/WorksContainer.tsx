import { ReactNode } from "react";

interface IWorksContainerProps {
	children: ReactNode;
}
const WorksContainer = ({ children }: IWorksContainerProps) => {
	return (
		<div
			className={
				"grid grid-cols-1 min-[800px]:grid-cols-2 xl:grid-cols-3 gap-12"
			}
		>
			{children}
		</div>
	);
};

export default WorksContainer;
