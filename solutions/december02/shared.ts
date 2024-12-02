export const isValidDiffer = (l: number[]): boolean => l.every((num, index) =>
    index < l.length - 1
        ? Math.abs(num - l[index + 1]) > 0 && Math.abs(num - l[index + 1]) < 4
        : true)

export const isSorted = (l: number[]): boolean =>
    l.reduce((acc, value, index) => acc && ((index < l.length - 1) ? value > l[index + 1] : true), true)
    || l.reduce((acc, value, index) => acc && (index < l.length - 1 ? value < l[index + 1] : true), true)