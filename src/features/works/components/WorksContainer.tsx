import { Language, Tech } from "@/constants/technologies";
import { getBrandIcon } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import React from "react";

interface IProjectsContainerProps {
	children: React.ReactNode;
}

const WorksContainer = ({ children }: IProjectsContainerProps) => {
	return (
		<div className={"flex flex-col items-center justify-center"}>
			{children}
		</div>
	);
};

export enum ProjectPosition {
	LEFT = "Left",
	RIGHT = "Right",
}

interface IImage {
	src: string;
	alt: string;
}

interface IProjectProps {
	children: React.ReactNode;
	position: ProjectPosition;
	iconText: string;
	imageSrc: Array<IImage>;
}

const Project = ({ children, position, iconText, imageSrc }: IProjectProps) => {
	return (
		<div
			className={cn(
				"relative w-screen py-8 px-8 md:px-16 lg:px-36 xl:px-72 2xl:px-80",
				"even:bg-white even:backdrop-filter even:backdrop-blur-md even:bg-opacity-20",
				"before:absolute  before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-[2px] before:bg-white before:ml-[57px] md:before:m-auto before:rounded-full",
			)}
		>
			<div
				className={cn("hidden md:flex gap-x-6", {
					"flex-row-reverse": position === ProjectPosition.RIGHT,
				})}
			>
				<div
					className={cn(
						"w-[50px] flex-1 grid gap-x-4 pt-4",
						`grid-cols-${imageSrc.length} `,
					)}
				>
					{imageSrc.map((image) => {
						return (
							<div className={"flex justify-center items-center"}>
								<img
									className={"object-cover max-h-[250px]"}
									src={image.src}
									alt={image.alt}
								/>
							</div>
						);
					})}
				</div>
				<div
					className={
						// "flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#E5ECF0] z-10 text-[#0B1215] font-bold"
						"flex items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] border-white bg-gray-900 z-10 font-bold"
					}
				>
					{iconText}
				</div>
				<div className={cn("flex-1 flex flex-col pt-4")}>{children}</div>
			</div>
			<div className={"flex md:hidden"}>
				<div
					className={
						"flex items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] border-white bg-gray-900 z-10"
					}
				>
					{iconText}
				</div>

				<div className={"flex-1 flex flex-col pl-6 pt-4"}>
					<div className={cn("flex-1 flex flex-col", "")}>{children}</div>
					<div
						className={cn(
							"order-1 w-full grid gap-x-4 pt-4",
							`grid-cols-${imageSrc.length}`,
						)}
					>
						{imageSrc.map((image) => {
							return (
								<div className={"flex justify-center items-center"}>
									<img
										className={"object-cover max-h-48"}
										src={image.src}
										alt={image.alt}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

interface IUncompletedDevDate {
	className?: string;
	startYear: number;
	startMonth: number;
}

interface ICompletedDevDate extends IUncompletedDevDate {
	finishYear: number;
	finishMonth: number;
}

type IDevDate = IUncompletedDevDate | ICompletedDevDate;

const isCompletedDevDate = (date: IDevDate): date is ICompletedDevDate => {
	return "finishYear" in date && "finishMonth" in date;
};

const DevDate = (date: IDevDate) => {
	return (
		<div className={cn("flex text-sm", date.className)}>
			{date.startYear}/{date.startMonth}
			{isCompletedDevDate(date)
				? ` - ${
						date.startYear !== date.finishYear ? `${date.finishYear}/` : ""
				  }${date.finishMonth}`
				: null}
		</div>
	);
};

interface ITitle {
	className?: string;
	title: string;
}

const Title = ({ className, title }: ITitle) => {
	return <h2 className={cn("text-2xl font-bold", className)}>{title}</h2>;
};

interface IDescription {
	className?: string;
	description: string;
}

const Description = ({ className, description }: IDescription) => {
	return <p className={cn("flex-1 pt-2", className)}>{description}</p>;
};

interface ITechStack {
	className?: string;
	techs: Array<Language | Tech>;
}

const TechStack = ({ className, techs }: ITechStack) => {
	return (
		<div className={cn("flex items-center flex-wrap gap-x-4 pt-8", className)}>
			{techs.map((tech) => (
				<div className={"w-6 h-6 fill-white"}>{getBrandIcon(tech)}</div>
			))}
		</div>
	);
};

WorksContainer.Project = Project;
WorksContainer.DevDate = DevDate;
WorksContainer.Title = Title;
WorksContainer.Description = Description;
WorksContainer.TechStack = TechStack;

export default WorksContainer;
