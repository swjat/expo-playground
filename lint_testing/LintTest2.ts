// use lower-case primitives for consistency
const str: String = "foo";
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol("foo");

// use a proper function type
const func: Function = () => 1;

// use safer object types
const lowerObj: object = {};

const capitalObj1: Object = 1;
const capitalObj2: Object = { a: "string" };

const curly1: {} = 1;
const curly2: {} = { a: "string" };
function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}

function asd() {
    const a = 1;
    a = a + 1;

    let b = 1;
    b = "asd";
}

const sum = (x) => x;
sum(3);
