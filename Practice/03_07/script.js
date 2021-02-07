/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const suitcase = {
    name: "My Suitcase",
    color: "silver",
    wheelNum: 4,
    size: {
        width: 24,
        height: 38,
        length: 52,
    },
    zipperlock: false,
    lockzipper: function (zipperStatus) {
        this.zipperlock = zipperStatus;
    },
    rodOut: false,
    pullRod: function (rodStatus) {
        this.rodOut = rodStatus;
    },
};

console.log("The suitcase object:", suitcase);
console.log("The size value:", suitcase.size);

var query = "wheelNum";
console.log("The wheelNum value:", suitcase[query]);

