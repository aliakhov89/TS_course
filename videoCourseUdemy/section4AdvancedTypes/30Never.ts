function generateError (message: string) : never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) {}
}

