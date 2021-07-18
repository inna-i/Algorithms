const n = 36;
const res = [];

for (let x = 1; x < n; x++) {
    for (let y = 1; y < n; y++) {
        for (let z = 1; z < n; z++) {
            if (x * y * z === n) {
                res.push({
                    x,
                    y,
                    z,
                    sum: x+y+z,
                })
            }
        }
    }
}

const cache = res.reduce((acc, item) => {
    if (acc[item.sum] !== undefined) {
        acc[item.sum] = acc[item.sum] + 1;
    } else {
        acc[item.sum] = 1;
    }
    return acc;
} , {})


console.log(res);
console.log(cache);