import { BlockType } from "@/constants/minecraft-blocks";
import { tree } from "@/constants/minecraft-trees";

export const getColorForBlock = (blockType: BlockType): string => {
	switch (blockType) {
		case BlockType.DIRT:
			return "#835d3a";
		case BlockType.GRASS:
			return "#7c9e56";
		case BlockType.STONE:
			return "#999999";
		case BlockType.LEAVES:
			return "#A0722D";
		case BlockType.WOOD:
			return "#7c9e56";
		case BlockType.BEDROCK:
			return "#4a4a4a";
		case BlockType.COAL_ORE:
			return "hsl(0, 0%, 10%)";
		case BlockType.IRON_ORE:
			return "hsl(23,44%,76%)";
		case BlockType.DIAMOND_ORE:
			return "hsl(173,87%,69%)";
	}
};

export const generateOreVein = (
	terrain: BlockType[][],
	ore: BlockType,
	height: number,
	startX: number,
	startY: number,
	veinSize: number,
) => {
	// Randomly determine the shape of the vein by generating offsets for each block in the vein

	const offsets = [[0, 0]];
	for (let i = 0; i < veinSize; i++) {
		const offsetX = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
		const offsetY = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
		offsets.push([offsetX, offsetY]);
	}

	// Fill in the blocks in the vein with the ore block type
	for (const [offsetX, offsetY] of offsets) {
		const x = startX + offsetX;
		const y = startY + offsetY;

		// Ensure the block is within the bounds of the terrain
		// if (x >= 0 && x < terrain[0].length && y >= 0 && y < terrain.length) {
		if (terrain[y] === undefined || terrain[y][x] === undefined) return;
		if (terrain[y][x] !== BlockType.STONE) return;

		terrain[y][x] = getOre(startY / height);
		// }
	}
};

const getOre = (y: number): BlockType => {
	if (y >= 0.87) return BlockType.DIAMOND_ORE;
	return Math.random() > 0.75 ? BlockType.COAL_ORE : BlockType.IRON_ORE;
};

export const generateTree = (
	terrain: BlockType[][],
	rootX: number,
	rootY: number,
) => {
	const treeStructure = tree.toReversed();
	const baseIndex = 2;
	const indices = treeStructure[0].map((_, i) => i - baseIndex);

	terrain[rootY + 1][rootX] = BlockType.DIRT;

	treeStructure.forEach((row, yIndex) => {
		row.forEach((block, xIndex) => {
			const terrainX = rootX + indices[xIndex];
			const terrainY = rootY - yIndex;
			// Ensure the coordinates are within the terrain boundaries
			if (
				terrainY >= 0 &&
				terrainY < terrain.length &&
				terrainX >= 0 &&
				terrainX < terrain[terrain.length - 1].length
			) {
				if (block === 1) {
					// Tree trunk
					terrain[terrainY][terrainX] = BlockType.WOOD;
				} else if (block === 2) {
					// Leaves
					terrain[terrainY][terrainX] = BlockType.LEAVES;
				}
			}
		});
	});
};
