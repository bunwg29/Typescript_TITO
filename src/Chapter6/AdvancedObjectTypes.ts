/* keyof */
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"

/* typeof */
const person = { name: "Alice", age: 25 };
type PersonType = typeof person; // { name: string; age: number }

/* Record Types*/
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: Record<Weekday, Day> = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
};

type RolePermissions = Record<"admin" | "user" | "guest", string[]>; // => key: admin, user, guest, type: string[]
const permissions: RolePermissions = {
    admin: ["create", "delete"],
    user: ["read", "update"],
    guest: ["read"],
};

/* Mapped Types */ // => say that nextsDays is an object with a key for each Weekday, and a value is a Day
let nextDays: { [ K in Weekday ]: Day } = {
    Mon: 'Sun',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
};










