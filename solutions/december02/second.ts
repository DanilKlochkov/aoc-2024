import {isSorted, isValidDiffer} from "./shared.ts";

const solution = (data: string): number => {
    const levels = data.split("\n").map(l => l.trim().split(/\s+/).map(Number));

    return levels
        .filter(l => {
            if (!isSorted(l) || !isValidDiffer(l)) {
                return l.some((_, index) => {
                    const modified = [...l.slice(0, index), ...l.slice(index + 1)];
                    return isSorted(modified) && isValidDiffer(modified)
                })
            }
            return true;
        })
        .length;
}

export default solution;