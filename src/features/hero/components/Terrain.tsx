"use client";

import {
	BlockType,
	ORE_PIECES,
} from "@/features/hero/constants/minecraft-blocks";
import {
	BLOCK_SIZE,
	generateTerrain,
} from "@/features/hero/utils/terrain-generation";
import { getColorForBlock } from "@/features/hero/utils/terrain-generation-helpers";
import useDeviceSize from "@/hooks/use-device-size";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const drawBlock = (
	ctx: CanvasRenderingContext2D,
	block: BlockType,
	x: number,
	y: number,
) => {
	const startX = x * BLOCK_SIZE;
	const startY = y * BLOCK_SIZE;

	if (block.toString().includes("ORE")) {
		drawOre(ctx, startX, startY, block);
	} else {
		ctx.fillStyle = getColorForBlock(block);
		ctx.fillRect(startX, startY, BLOCK_SIZE, BLOCK_SIZE);
	}
};

const drawTerrain = async (
	ctx: CanvasRenderingContext2D,
	cols: number,
	rows: number,
) => {
	const terrain = await generateTerrain(cols, rows);
	terrain.forEach((row, y) => {
		row.forEach((block, x) => {
			drawBlock(ctx, block, x, y);
		});
	});
};

const drawOre = (
	ctx: CanvasRenderingContext2D,
	startX: number,
	startY: number,
	blockType: BlockType,
) => {
	// Basic block configuration
	ctx.fillStyle = getColorForBlock(BlockType.STONE);
	ctx.fillRect(startX, startY, BLOCK_SIZE, BLOCK_SIZE);

	// Scale factors for drawing the ore within the block
	const blockWidth = 200;
	const blockHeight = 200;
	const scaleX = BLOCK_SIZE / blockWidth;
	const scaleY = BLOCK_SIZE / blockHeight;

	ctx.fillStyle = getColorForBlock(blockType);

	// Draw each ore piece scaled and positioned within the block
	for (const { x, y, width, height } of ORE_PIECES) {
		ctx.fillRect(
			startX + x * scaleX,
			startY + y * scaleY,
			width * scaleX,
			height * scaleY,
		);
	}
};

export const Terrain = () => {
	const ref = useRef<HTMLCanvasElement>(null);
	const [width, height] = useDeviceSize();
	const [scope, animate] = useAnimate();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!ref.current) return;

		const canvas = ref.current;
		const ctx = canvas.getContext("2d");

		// If the canvas is not supported, return.
		if (!ctx) return;

		// Set the canvas width and height to the window width and height.
		const width = canvas.width;
		const height = canvas.height;

		// Calculate the number of rows and columns based on the block size and canvas size.
		const rows = height / BLOCK_SIZE;
		const cols = width / BLOCK_SIZE;

		if (cols > 0 && rows > 0) {
			drawTerrain(ctx, cols, rows).then(() => {
				animate("canvas", { opacity: [0, 1] }, { duration: 0.5 });
			});
		}
	}, [width, height, animate]);

	return (
		<div ref={scope}>
			{width === null || height === null ? (
				<p className={"h-screen w-screen bg-pink-100"}>Loading...</p>
			) : (
				<canvas
					ref={ref}
					width={width}
					height={height}
					className={cn(
						"transition-all duration-500 w-full h-full after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-pink-300 brightness-90 dark:brightness-50",
					)}
				/>
			)}
		</div>
	);
};
