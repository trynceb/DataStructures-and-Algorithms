// Still O(n) because it uses the same variable

function logItems(n) {
    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    // O(n)
    for(let j = 0; j < n; j++) {
        console.log(j)
    }
}

// O(n) + O(n) = O(2n) *drop the constant
// O(2n) = O(n)
logItems(3)