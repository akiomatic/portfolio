import { BlockType } from "@/features/hero/constants/minecraft-blocks";
import {
	generateOreVein,
	generateTree,
} from "@/features/hero/utils/terrain-generation-helpers";

export const BLOCK_SIZE = 25;

const GRASS_LEVEL_RATIO = 0.75;
const BEDROCK_LEVEL_RATIO = 0.9;
const ORE_VEIN_MIN = 20;
const ORE_VEIN_MAX = 30;
const ORE_VEIN_SIZE_MIN = 1;
const ORE_VEIN_SIZE_MAX = 5;
const TREE_COUNT = 3;

const SLOPE = 1.25;

const generateLayer = (
	terrain: BlockType[][],
	x: number,
	grassLevel: number,
	height: number,
) => {
	const BEDROCK_START_LEVEL = Math.floor(height * BEDROCK_LEVEL_RATIO);
	const randomDirtLevel = Math.floor(Math.random() * 2) + 3;
	for (let y = grassLevel; y < height; y++) {
		if (y === grassLevel) {
			terrain[y][x] = BlockType.GRASS;
		} else if (y < grassLevel + randomDirtLevel) {
			terrain[y][x] = BlockType.DIRT;
		} else if (y < Math.floor(height * BEDROCK_LEVEL_RATIO)) {
			terrain[y][x] = BlockType.STONE;
		} else {
			terrain[y][x] = BlockType.BEDROCK;
		}

		if (y >= BEDROCK_START_LEVEL) {
			if (y < BEDROCK_START_LEVEL + 1 && Math.random() > 0.3) {
				terrain[y][x] = BlockType.STONE;
			}
			if (y < BEDROCK_START_LEVEL + 2 && Math.random() > 0.7) {
				terrain[y][x] = BlockType.STONE;
			}
		}
	}
};

const generateForests = (
	terrain: BlockType[][],
	ceils: number[],
	width: number,
) => {
	for (let i = 0; i < TREE_COUNT; i++) {
		const randomX = Math.floor(Math.random() * width);
		const randomY = ceils[randomX] - 1;
		if (randomY >= 0) {
			generateTree(terrain, randomX, randomY);
		}
	}
};

const generateOreVeins = (
	terrain: BlockType[][],
	width: number,
	height: number,
) => {
	const oreVeinCount = Math.floor(
		Math.random() * (ORE_VEIN_MAX - ORE_VEIN_MIN) + ORE_VEIN_MIN,
	);
	for (let i = 0; i < oreVeinCount; i++) {
		const veinSize = Math.floor(
			Math.random() * (ORE_VEIN_SIZE_MAX - ORE_VEIN_SIZE_MIN) +
				ORE_VEIN_SIZE_MIN,
		);
		const startX = Math.floor(Math.random() * width);
		const stones = terrain
			.map((row, y) => (row[startX] === BlockType.STONE ? y : null))
			.filter((y) => y !== null);
		const startY = stones[Math.floor(Math.random() * stones.length)];
		if (startY != null) {
			generateOreVein(
				terrain,
				BlockType.IRON_ORE,
				height,
				startX,
				startY,
				veinSize,
			);
		}
	}
};

export const generateTerrain = async (width: number, height: number) => {
	const terrain: BlockType[][] = [];
	for (let y = 0; y < height; y++) terrain[y] = [];
	const ceils = [];

	let grassLevel = Math.floor(height * GRASS_LEVEL_RATIO);

	for (let x = 0; x < width; x++) {
		const delta = Math.floor(Math.random() * SLOPE);
		if (grassLevel - delta > 0) {
			grassLevel -= delta;
		}

		ceils.push(grassLevel);
		generateLayer(terrain, x, grassLevel, height);
	}

	generateForests(terrain, ceils, width);
	generateOreVeins(terrain, width, height);

	return terrain;
};
