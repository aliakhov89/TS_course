// void - функція нічого не повертає

function logId(id: string | number): void {
    console.log(id);
}

const logId1: void = logId('a');

type voidFunction = () => void;

const f1: voidFunction = (): void => {};

const f2: voidFunction = (): boolean => {
    return true
};

const bb = f2();