type TCheck = {data: string[][], canDo: boolean}

const solution = (data: string): number => {
    return data.matchAll(/(mul\((\d+),(\d+)\)|do\(\)|don't\(\))/ig)
        .reduce((acc, it: string[]) => {
            if (it[1] == "don't()") {
                return {data: acc.data, canDo: false};
            } else if (it[1] == "do()") {
                return {data: acc.data, canDo: true};
            } else if (acc.canDo) {
                return {data: [...acc.data, it], canDo: true};
            } else {
                return acc
            }
        }, {data: [], canDo: true} as TCheck)
        .data
        .map(it => Number(it[2]) * Number(it[3]))
        .reduce((acc, it) => acc + it, 0);
}

export default solution;