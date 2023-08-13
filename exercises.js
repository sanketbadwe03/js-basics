
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

// -----------------Address Obj -------------

function Addr(street,city,zipCode) {
    this.street = street
    this.city = city
    this.zipCode =zipCode
    this.showAddr = function() {
        let log = `
    street = ${this.street}
    city = ${this.city}
    zipCode = ${this.zipCode}
    `
     console.log(log)   

    }
}
function showAddr2(addr) {
    let log = `
    street = ${addr.street}
    city = ${addr.city}
    zipCode = ${addr.zipCode}
    `
    
    console.log(log)
}

const a1 = new Addr("Datta Mandir Road", "Wakad", "411057")
a1.showAddr()
showAddr2(a1)

// -----------------Post Obj -------------
let post = {
    titile : "Haha!",
    details : "Something funny!",
    author : "Me",
    comments : [
        { comment:"Not so funny", author:"My Friend"},
        { comment:"Ugly", author:"Another Friend"},
    ],
    views : 10
}
console.log(post)
