class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}

let cookieOne = new Cookie("green")
let cookieTwo = new Cookie("blue")

cookieOne.getColor()

/*

class LinkedList {
    constructor(value) {...}
    push(value) {...}
    unshift(value) {...}
    insert(index, value) {...}
    remove(index) {...}
    pop() {...}
    shift() {...}
}

*/