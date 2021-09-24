function compareFunction(fn1, fn2, n = 1) {
  console.time("Fn1");
  for(let i =0 ; i < n; i++) {
     fn1;
  }
  console.timeEnd("Fn1");
  console.time("Fn2");
  for(let i =0 ; i < n; i++) {
      fn2;
  }
   console.timeEnd("Fn2"); 
}


/**********************************************/
/****************   Task 1   ******************/
/**********************************************/
// filter an array of objects and keep only items,
// where a > 5 and extend them with a new field sum = a + b
const itemsArray = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
    { a: 41, b: 1 },
    { a: 0, b: 4 }
];
  
function filterAndExtendItems(array) {
  return array
    .filter(item => item.a > 5)
    .map(item => ({ ...item, sum: item.a + item.b }));
}

function filterAndExtendItemsReduce(array) {
  return array
    .reduce((acc, item) => {
      if (item.a > 5) {
        acc.push({ ...item, sum: item.a + item.b })
      }

      return acc;
    }, []);
}


compareFunction(
  filterAndExtendItems(itemsArray),
  filterAndExtendItemsReduce(itemsArray),
  1
);


/**********************************************/
/****************   Task 2   ******************/
/**********************************************/
// calculate the amount of a given symbol in a given string
const inputStr = "Remember, all I’m offering is the truth. Nothing more.";

function calcStringSymbols(str, symbol) {
  const arr = str.split('');
  let count = 0;

  for(let i=0; i < arr.length; i++) {
    if (arr[i] === symbol) {
      count += 1;
    } 
  }

  return count;
}

function calcStringSymbolsWithoutSplit(str, symbol) {
  let count = 0;

  for(let i=0; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
      count += 1;
    } 
  }

  return count;
}

compareFunction(
  calcStringSymbols(inputStr, 'm'),
  calcStringSymbolsWithoutSplit(inputStr, 'm'),
  1
);


/**********************************************/
/****************   Task 3   ******************/
/**********************************************/
// call a given callback function with different config, based on a given product type
const config = {
    audio: {
      id: 1,
      type: 'playlist',
    },
    video: {
      id: 2,
      format: '4k',
    },
    book: {
      id: 3,
      store: 'yakaboo',    
    },
    podcast: {
      id: 4,
      online: true,    
    },
};



function getProductConfig(type, cb) {
  switch(type) {
    case 'book':
      return cb({
        id: 3,
        store: 'yakaboo',
      });
    case 'audio':
      return cb({
        id: 1,
        type: 'playlist',
      });
    case 'video':
      return cb({
        id: 2,
        format: '4k',
      });
    case 'podcast':
      return cb({
        id: 4,
        online: true,    
      });
    default:
      return cb({});
  }
}


function getProductConfigObj(type, cb) {
  return cb(config[type] || {});
}
 

compareFunction(
  getProductConfig('book', (conf) => conf),
  getProductConfigObj('book', (conf) => conf),
  1
);

