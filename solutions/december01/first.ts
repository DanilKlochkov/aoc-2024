const solution = (data: string): number => {
    const pairs = data.split("\n").map(l => l.split(/\s+/));
    const list1 = pairs.map(p => Number(p[0])).sort();
    return pairs.map(p => Number(p[1]))
        .sort()
        .map((num, i) => Math.abs(num - list1[i]))
        .reduce((acc, num) => acc + num, 0);
}

export default solution;