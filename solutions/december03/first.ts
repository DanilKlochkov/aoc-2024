const solution = (data: string): number => {
    return data.matchAll(/mul\((\d+),(\d+)\)/ig)
        .map(it => Number(it[1]) * Number(it[2]))
        .reduce((acc, it) => acc + it, 0);
}

export default solution;