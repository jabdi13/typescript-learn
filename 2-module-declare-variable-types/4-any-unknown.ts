// Any type
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

// Unknown type
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown

// Types assertion
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
    // (<string>randomValue).toUpperCase();
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}