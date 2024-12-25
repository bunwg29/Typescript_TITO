/* Subtype and Supertype in TypeScript */
type SubType = {
    a: 1 | 2 | 3;
};

type SuperType = {
    a: number;
};

let subType: SubType = { a: 1 }; // Correct 

let superType: SuperType = { a: 1 }; // Correct

// let subType: SubType = { a: 4 }; // Error

// let superType: SuperType = { a: 100 }; // Correct


