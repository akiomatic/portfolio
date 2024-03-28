export enum BlockType {
	DIRT = "DIRT",
	GRASS = "GRASS",
	STONE = "STONE",
	LEAVES = "LEAVES",
	WOOD = "WOOD",
	BEDROCK = "BEDROCK",
	COAL_ORE = "COAL_ORE",
	IRON_ORE = "IRON_ORE",
	DIAMOND_ORE = "DIAMOND_ORE",
}

export const ORE_PIECES = [
	{ x: 30, y: 30, width: 20, height: 20 },
	{ x: 70, y: 30, width: 40, height: 20 },
	{ x: 150, y: 30, width: 20, height: 40 },
	{ x: 130, y: 50, width: 20, height: 20 },
	{ x: 70, y: 70, width: 40, height: 20 },
	{ x: 50, y: 90, width: 100, height: 20 },
	{ x: 130, y: 110, width: 20, height: 20 },
	{ x: 30, y: 130, width: 20, height: 40 },
	{ x: 70, y: 130, width: 40, height: 20 },
	{ x: 90, y: 150, width: 20, height: 20 },
	{ x: 130, y: 150, width: 40, height: 20 },
] as const;
