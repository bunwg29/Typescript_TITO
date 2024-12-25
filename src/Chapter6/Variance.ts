/* Variance contains: Covariant, Contravariant, Invariant*/

type Animal = { name: string };
type Dog = { name: string; breed: string };

let animal: Animal = { name: "Generic Animal" };
let dog: Dog = { name: "Buddy", breed: "Golden Retriever" };

// Covariant: Type is assignable to a type with the same or a more specific property
animal = dog; // Valid

console.log(animal); // { name: 'Buddy', breed: 'Golden Retriever' }


