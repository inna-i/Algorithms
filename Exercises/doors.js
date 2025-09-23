function doors(arr) {
    const people = 100;
    const copiedArr = [...arr];
    for (let i = 1; i <= people; i++) {
        for(let j = i; j < copiedArr.length; j += i) {
            copiedArr[j] = !copiedArr[j];
        }
    }

    for(let i = 1; i < copiedArr.length; i++) {
        if(copiedArr[i]) console.log(i);
    }
} // arr = [false] * 100

const ar = new Array(101).fill(false);
doors(ar);

//  1  2  3  4  5  6  7  8  9  10
//  x  x  x  x  x  x  x  x  x  x
//     x     x     x     x     x
//        x        x        x
//           x           x  
//              x              x
//                 x
//                    x
//                       x 
//                          x
//                             x
