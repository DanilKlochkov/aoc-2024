const solution = (data: string): number => {
    const pairs = data.split("\n").map(l => l.split(/\s+/));
    const list2 = pairs.map(p => Number(p[1]));
    return pairs.map(p => Number(p[0]))
        .map(num => num * list2.filter(it => it == num).length)
        .reduce((acc, num) => acc + num, 0);
}

export default solution;