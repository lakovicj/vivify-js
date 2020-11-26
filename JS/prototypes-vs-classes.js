// ES6 - Classes

class Character {
    constructor(x, y) {
        if (this.constructor == Character) {
            throw new Error("Abstract class can't be instantiated.");
        }
        this.x = x;
        this.y = y;
        Character.incCounter();
    }

    static counter = 0;

    static incCounter() {
        this.counter += 1;
    }

    static getCount() {
        return this.counter;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    getLocation() {
        console.log(`(${this.x}, ${this.y})`);
    }
}

class PlayerCharacter extends Character {
    constructor(x, y) {
        super(x, y);
    }
}

class NonPlayerCharacter extends Character {
    constructor(x, y) {
        super(x, y);
    }
}


let pc = new PlayerCharacter(2, 2);
pc.getLocation();
pc.setLocation(3, 3);
pc.getLocation();

let pc2 = new PlayerCharacter(5, 5);
console.log(Character.getCount());


// ES5
var CharacterES5 = function(x, y) {
    if (this.constructor == CharacterES5) {
        throw new Error("Abstract class can't be instantiated.");
    }
    this.x = x;
    this.y = y;
    CharacterES5.incCounter();
}

CharacterES5.counter = 0;
CharacterES5.incCounter = function() {
    this.counter += 1;
}

CharacterES5.prototype.getLocation = function() {
    console.log(`(${this.x}, ${this.y})`);
}

CharacterES5.prototype.setLocation = function(x, y) {
    this.x = x;
    this.y = y;
}

var PlayerCharacterES5 = function(x, y) {
    CharacterES5.call(this, x, y);
}

PlayerCharacterES5.prototype = Object.create(CharacterES5.prototype);
PlayerCharacterES5.prototype.constructor = PlayerCharacterES5;

var NonPlayerCharacterES5 = function(x, y) {
    CharacterES5.call(this, x, y);
}

NonPlayerCharacterES5.prototype = Object.create(CharacterES5.prototype);
NonPlayerCharacterES5.prototype.constructor = NonPlayerCharacterES5;


npc = new NonPlayerCharacterES5(5, 5);
npc.getLocation();
npc.setLocation(6, 6);
npc.getLocation();
console.log(CharacterES5.counter);
npc2 = new CharacterES5(2, 2);