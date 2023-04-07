// Still O(n^2) because you're using the same variable

function logItems(n) {
    // O(n^2)
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

    // O(n)
    for (let k = 0; k < n; k++) {
        console.log(k)
    }

}

// O(n^2) + O(n) = O(n^2 + n) * simplify by dropping the non-dominant
// O(n^2 + n) = O(n^2)
logItems(10)
