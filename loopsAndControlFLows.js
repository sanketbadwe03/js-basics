

/***
 * For..In Loop
 * To display properties of a class*/

const person = {
    name : "sanket",
    age : 30
}

// To ddisplay all the properties, even if ew dont know what the properties are called in a object:
for(let key in person) {
    console.log(key, person[key])       // because an obj is essentially a key-value pair
}


// to display contents of Array
const colors = ['red','green','blue']

for (let index in colors) {
    console.log(colors[index])
}


/***
 * For..Of
 * Unlike For..In, this one hols an element itself from the array (and not the index)
 */
for (let color of colors) {
    console.log(color)
}
    
