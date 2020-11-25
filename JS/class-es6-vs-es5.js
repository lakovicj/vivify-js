// classes in ES6


class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

const s = new Shape(1, 3, 3);
console.log(s);

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}

const circle = new Circle(1, 2, 2, 5);
console.log(circle);

// in ES5, classes are made with functions and prototypes
// inhertiance is implemented with prototypes
/*
var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
}

Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

var Circle = function(id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
}

// set parent prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


var c = new Circle(1, 3, 3, 5);
console.log(c);
*/