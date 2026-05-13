function wait() {
    return undefined;
}

async function asyncWait() {
    return undefined;
}

function validSyncLoop() {
    while (true) {
        wait();
        break;
    }
}

async function validAsyncLoop() {
    while (true) {
        await asyncWait();
        break;
    }
}

function test() {
    while (true) {
        break;
    }
}

async function test2() {
    wait();
}

function test3() {
    asyncWait();
}

async function test4() {
    asyncWait();
}

function validSyncLoop2(a: string) {
    a = "asd";
}
