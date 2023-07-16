
/**
 * Objects
 */

const circle = {
    // properties:
    radius : 1,
    isVisible : true,
    // other objects
    location : {
        x: 1,
        y: 1
    },
    // member functions
    draw: function() {
        console.log('Inside draw!')
    }


};

circle.draw();


/**
 * Factory Functions
 * Used to create number of objects of the same type.. hence its a factory of objects
 */

function createCircle(radius) {
    return {
        radius,     // Equivalent to radius : radius
        draw() {
            console.log('From factorys draw! R= '+radius)
        }
    }
}
const c1 = createCircle(20)
c1.draw()

/**
 * Constructor Functions
 * Similar to java, we use 'new' keyword to create objects
 * unlike factory functions naming, we dont use camle case.. we use Pascal case instead.
 * no need of "return". That happens implicitly
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('From cunstructors draw! R= '+this.radius)
    }
}
const cir = new Circle(25);     // 'new' here does 3 things. 1. create an empty js object (e.g. x= {})
                                                        //  2. assign property/values from 'this' keyword used in constructor
                                                        //  3. return a ref that points this new obj
cir.draw()


/**
 * Dynamic nature of Objs in JS
 * we can add, remove additional properties or functions to objects in js.
 * */
cir.color = 'red'
c1.name = 'factoryCreatedcircle'
console.log('Printing dynamic properties..', cir.color, c1.name)        // Can't use [] to refer these!

cir.print = function () {
    console.log('Printing from dynamic func')
}
cir.print()

// we can also dynamically delete these properties.

delete cir.radius
delete cir.color
cir.draw()