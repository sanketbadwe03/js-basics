/**
 * Arrays Basics
 */

const numbers = [4,5]

// add element at the end
numbers.push(6,7,8)
console.log("Added at the end = "+numbers)

// add at the start
numbers.unshift(1,2,3)
console.log("Added at the start = "+numbers)

// Add (delete) in the middle
numbers.splice(2, 0, "a", "b")
console.log("Added in between = "+numbers)

// Finding element from array
let ptr = numbers.indexOf(5)
//also
ptr = numbers.lastIndexOf(5)

if(numbers.indexOf(5) != -1)
console.log("Present!")

if(numbers.includes(5))
console.log("Present! from a cleaner method!")

/**
 * Finding an object from array
 */

const courses = [
    {id:1, name:"firstCource"},
    {id:2, name:"secCource"},
    {id:3, name:"anyCource"},
]

let a = courses.find(c => getCource(c))
console.log("Finding course ="+ a)

a = courses.findIndex(c => getCource(c))
console.log("index is ="+ a)

function getCource(cource) {
    if(cource.id == 2 && cource.name=="secCource")
        return true;
    return false;
}

/**
 * combining arrays using slice operator
 */

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

// speciaaly useful if we want to add additional elements
let combined = [...arr1, "a", ...arr2, "b"]

// easy to create a copy of an array
let cpy = [...arr1] //easy to visualize
let cpy2 = [arr1]
console.log("with Spread operato ="+cpy)
console.log("without Spread operato ="+cpy2)

/**
 * Iterating an array
 */

// option 1
for(let n of arr1)
    console.log(n)

// option 2
arr1.forEach(n => console.log(n))

/**
 * Sorting array of custom objects
 */

courses.sort((a,b) => comparatorFunction(a,b))
console.log(courses)

function comparatorFunction(first,second) {
    if(first.name < second.name)
        return -1
    else if(first.name > second.name)
        return 1
    else
        return 0

}