
// Swapping
let a = 'red'
let b = 'blue'

let c = b;
b = a;
a = c;
console.log('a ='+a)
console.log('b ='+b)

// -----------------Max of 2 numbers -------------

function maxNum(a,b) {
    /* if( a >= b) {
        return a
    } else {
        return b
    }*/
    
    return (a>b) ? a : b

}
console.log(maxNum(15,5))