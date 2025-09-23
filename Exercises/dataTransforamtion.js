/**
 * Keep only, when a > 3
 * Add a new field sum = a + b
 * @param {object[]} data
 * @return {object[]}
 */
function filterAndExtendItems(data) {
    // return data
    //     .filter(el => el.a > 3)
    //     .map(el => ({...el, sum: el.a + el.b }))
    // O(n*2)

    return data.reduce((acc, { a, b }) => {
        if(a > 3) {
            acc.push({ a, b, sum: a + b})
        }

        return acc;
    }, []) // O(n)
}

const itemsArray = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
    { a: 41, b: 1 },
    { a: 0, b: 4 }
  ];
  
console.log(filterAndExtendItems(itemsArray))