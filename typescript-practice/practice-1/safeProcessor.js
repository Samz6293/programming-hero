"use strict";
function safeProcessor(value) {
    if (typeof value === "string") {
        return `
        The value "${value}" is string
        Uppercase: ${value.toUpperCase()}
        `;
    }
    else if (typeof value === "number") {
        return `
        The value "${value}" is number
        Square: ${value * value}
        `;
    }
    else if (Array.isArray(value)) {
        return `
        The value "${value}" is an array
        Total elements in the array: ${value.length}
        `;
    }
    else {
        return `The value "${value}" is not a string, number or array`;
    }
}
console.log(safeProcessor("Hello, World!"));
console.log(safeProcessor(45));
console.log(safeProcessor([23, 12, 12, 435, 7, 8, 9]));
console.log(safeProcessor({ name: "motin", joke: 123 }));
