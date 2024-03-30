import { Icon } from "@/utils/types";
import { SimpleIcon } from "simple-icons";

export const isSimpleIcon = (icon: SimpleIcon | Icon): icon is SimpleIcon => {
	return (icon as SimpleIcon).svg !== undefined;
};
