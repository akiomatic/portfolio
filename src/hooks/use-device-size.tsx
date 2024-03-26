"use client";

import { useEffect, useState } from "react";

const useDeviceSize = () => {
	const [width, setWidth] = useState<number | null>(0);
	const [height, setHeight] = useState<number | null>(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);

		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return [width, height];
};

export default useDeviceSize;
