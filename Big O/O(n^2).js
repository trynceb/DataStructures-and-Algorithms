// Loop within a Loop
// * not efficient

function logItems(n) {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

}

logItems(10)