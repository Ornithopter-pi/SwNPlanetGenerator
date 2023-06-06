function rollDie(sides: number, minimum = 1): number {
    return Math.floor(Math.random() * (sides - minimum) + minimum);
}

function coinFlip(): boolean {
    return Boolean(rollDie(1, 0));
}
export { rollDie, coinFlip };