// Running two different variables

// O(a + b)
function logItems(a, b) {
    // O(a)
    for (let i = 0; i < a; i++) {
        console.log(i)
    }

    // O(b)
    for(let j = 0; j < b; j++) {
        console.log(j)
    }
}

// O(a) + O(b) = O(a + b) * most simplified version

function logItems(a, b) {
    for (let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) {
            console.log(i, j)
        }
    }
}

// This becomes O(a * b)
logItems(10)