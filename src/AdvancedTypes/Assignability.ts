/* Principle defines that a type is assignable to another type if it has the same or a subset of properties. */

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 1, y: 2, z: 3 };

point2D = point3D; // Valid because Point2D has all the properties of Point3D

// point3D = point2D; // Error because Point2D does not have all the properties of Point3D
