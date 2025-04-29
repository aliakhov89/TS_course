// void - функція нічого не повертає

function logId(id: string | number): void {
    console.log(id);
}

const logId1 = logId('a');

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => {
    return true
};

const b = f2();