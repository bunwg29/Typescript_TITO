/* Widening mean that we expand type of particular variable */

const a = "hello"; // TypeScript infers the type of `a` as "hello" (literal type)
let b = a;         // The type of `b` is expanded to `string`

const c = 42;      // The type of `c` is 42 (literal type)
let d = c;         // The type of `d` is expanded to `number`
