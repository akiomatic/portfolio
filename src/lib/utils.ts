import { Icon } from "@/constants/enums";
import { type ClassValue, clsx } from "clsx";
import { SimpleIcon } from "simple-icons";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const isSimpleIcon = (icon: SimpleIcon | Icon): icon is SimpleIcon => {
	return typeof icon === "object";
};
