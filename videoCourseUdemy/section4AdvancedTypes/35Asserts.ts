//import assert from "node:assert";

interface Player {
    name: string;
}

const a35 = {};
assertPlayer(a35);
a35.name = 'Dima';

function assertPlayer(obj: unknown): asserts obj is Player {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not player')
}