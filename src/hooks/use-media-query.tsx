"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (breakpoint: Breakpoints) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
		setMatches(mediaQuery.matches);

		const handler = (e: MediaQueryListEvent) => {
			setMatches(e.matches);
		};

		mediaQuery.addEventListener("change", handler);

		return () => {
			mediaQuery.removeEventListener("change", handler);
		};
	}, [breakpoint]);

	return matches;
};

export enum Breakpoints {
	sm = 640,
	md = 768,
	lg = 1024,
	xl = 1280,
	"2xl" = 1536,
}
