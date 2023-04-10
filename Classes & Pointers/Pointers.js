let obj1 = {
    value: 22
}

// obj2 value will change with obj1 even after it's declared
let obj2 = obj1
// obj2 value = 22
console.log(obj1)
console.log(obj2)

obj1.value = 11

// now obj2 value = 11

let obj3 = {
    value: 57
}

obj2 = obj3

obj1 = obj2