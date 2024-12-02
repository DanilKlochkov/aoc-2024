import {isSorted, isValidDiffer} from "./shared.ts";

const solution = (data: string): number => {
    const levels = data.split("\n").map(l => l.trim().split(/\s+/).map(Number));

    return levels
        .filter(isSorted)
        .filter(isValidDiffer)
        .length;
}

export default solution;