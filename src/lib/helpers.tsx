import { Language, Tech } from "@/constants/technologies";
import {
	SimpleIcon,
	siDart,
	siFirebase,
	siFlutter,
	siJavascript,
	siNextdotjs,
	siReact,
	siShadcnui,
	siSupabase,
	siTailwindcss,
	siTypescript,
} from "simple-icons";

export const getBrandIcon = (brand: Language | Tech) => {
	switch (brand) {
		case Language.Dart:
			return getSVGIcon(siDart);
		case Language.JavaScript:
			return getSVGIcon(siJavascript);
		case Language.TypeScript:
			return getSVGIcon(siTypescript);
		case Tech.Flutter:
			return getSVGIcon(siFlutter);
		case Tech.React:
			return getSVGIcon(siReact);
		case Tech.Next:
			return getSVGIcon(siNextdotjs);
		case Tech.TailwindCSS:
			return getSVGIcon(siTailwindcss);
		case Tech.ShadcnUI:
			return getSVGIcon(siShadcnui);
		case Tech.Firebase:
			return getSVGIcon(siFirebase);
		case Tech.Supabase:
			return getSVGIcon(siSupabase);
		case Language.Java:
			return (
				<svg
					className={"pointer-events-none"}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 502.632 502.632"
				>
					<title>Java</title>
					<path
						d="M240.864,269.894c0,0-28.02-53.992-26.985-93.445c0.755-28.193,64.324-56.062,89.281-96.529
			C328.074,39.431,300.054,0,300.054,0s6.234,29.077-10.376,59.147c-16.609,30.113-77.914,47.779-101.749,99.679
			S240.864,269.894,240.864,269.894z"
					/>
					<path
						d="M345.741,105.869c0,0-95.494,36.347-95.494,77.849c0,41.545,25.928,55.027,30.113,68.509
			c4.142,13.525-7.269,36.347-7.269,36.347s37.361-25.95,31.105-56.062c-6.234-30.113-35.29-39.475-18.659-69.544
			C296.646,142.799,345.741,105.869,345.741,105.869z"
					/>
					<path
						d="M230.51,324.748c88.246-3.149,120.43-30.997,120.43-30.997
			c-57.076,15.553-208.654,14.539-209.711,3.128c-1.014-11.411,46.701-20.773,46.701-20.773s-74.721,0-80.955,18.68
			C100.74,313.467,142.328,327.833,230.51,324.748z"
					/>
					<path
						d="M358.187,368.494c0,0,86.369-18.421,77.827-65.338c-10.354-57.119-70.58-24.936-70.58-24.936
			s42.602,0,46.722,25.928C416.32,330.098,358.187,368.494,358.187,368.494z"
					/>
					<path
						d="M315.628,343.601c0,0-21.765,5.716-54.013,9.34c-43.228,4.853-95.494,1.014-99.657-6.256
			c-4.098-7.269,7.269-11.411,7.269-11.411c-51.921,12.468-23.512,34.233,37.339,38.418c52.158,3.559,129.791-15.574,129.791-15.574
			L315.628,343.601z"
					/>
					<path
						d="M181.738,388.943c0,0-23.555,0.669-24.936,13.137c-1.359,12.382,14.496,23.512,72.65,26.964
			c58.133,3.451,98.988-15.898,98.988-15.898l-26.295-15.962c0,0-16.631,3.494-42.236,6.946
			c-25.626,3.473-78.173-2.783-80.243-7.593C177.553,391.682,181.738,388.943,181.738,388.943z"
					/>
					<path
						d="M407.994,445.005c8.995-9.707-2.783-17.321-2.783-17.321s4.142,4.853-1.337,10.376
			c-5.544,5.522-56.084,19.349-137.061,23.512c-80.955,4.163-168.856-7.615-171.639-17.99
			c-2.696-10.376,45.018-18.659,45.018-18.659c-5.522,0.69-71.96,2.071-74.074,20.082c-2.071,17.968,29.056,32.507,153.67,32.507
			C344.339,477.491,399.042,454.647,407.994,445.005z"
					/>
					<path
						d="M359.568,485.817c-54.682,11.044-220.734,4.077-220.734,4.077s107.919,25.626,231.109,4.185
			c58.888-10.268,62.318-38.763,62.318-38.763S414.25,474.708,359.568,485.817z"
					/>
				</svg>
			);
		default:
			return (
				<svg
					className={"pointer-events-none"}
					viewBox="0 0 1000 1000"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Unknown</title>
					<path d="M432 775h133v129H432V775zM539 87q-67-10-129 12-60 21-104 67t-62 107q-6 19 .5 37t22 29.5T302 351h13q20 0 35.5-12.5T374 306q16-45 59.5-70.5t92.5-15 79.5 48T632 353q-1 31-24 60-15 17-56 50-30 25-44 38-24 23-40 46l-2 5q-10 16-17 33l-3 6-1 4q-7 20-10 33-3 18-3 41h133q0-19 5-34 4-10 14-28l3-6q8-14 19-26l2-2q10-12 22-23l25-23q37-34 53-53 27-31 40-65 16-41 14-93-7-57-38.5-106.5t-79.5-82T539 87z" />
				</svg>
			);
	}
};

export const getSVGIcon = (icon: SimpleIcon) => {
	return (
		<svg
			className={"pointer-events-none"}
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>{icon.title}</title>
			<path d={icon.path} />
		</svg>
	);
};
