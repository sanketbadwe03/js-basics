
console.log('From the js file!');

let name1 = 'Sanket';
let name2 = "B";
console.log(name1);
console.log(name2);

const interestRate = 0.5
// interestRate = 1  ==> thorws error!
console.log(interestRate);

//---------------------Types:----------------------------------------------------
let name = "someName"
let age = 30
let isApproved = true
let fName = undefined
let sName = null

//--------------------Object-------------------------------------------------
let person = {
    pName: 'Sanket',
    age: 30
};

person[age] = 32;

//--------------------Arrays-------------------------------------------------
let selectedColors = ['red','green'];
selectedColors[3] = 10;     // ===> since selectedColors[2] is not defined, it will create the array as ['red', 'green', empty, 10] with 4 objs!


//--------------------Functions-------------------------------------------------
function greet(name) {
    console.log('Hello ' + name)
}

greet('Sanket');

//--------------------Operaters-------------------------------------------------
console.log(1 === 1); // ==> Strict equality. checks Type + Value
console.log('1' === 1); // returns false
console.log('1' == 1);  // Doesnt care about type, just the value. It will also conver types implicitely. returns true.
console.log(true == 1)  // returns true since 1 will be converted to bolean 1 i.e. true.

/**  "Falsy" velues in JS:
*   undefined
*   null
*   0
*   false
*   '' i.e. empty string
*   NaN
*/

/** Anything that it not falsy is Truthy. */

/** So, by above logic below is how operators will work with non-boolean values */
console.warn('Lets see some falsy or truthy!')
false || true // ==> Returns true
false || 'Delhi' // ==> Returns Delhi. Since its a truthy value, it will return that value.
false || 1      //  ==> Returns the truthy value 1.
