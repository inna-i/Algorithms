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

// console.log(filterAndExtendItems(itemsArray));
// console.log(filterAndExtendItemsReduce(itemsArray));

/**********************************************/
/****************   Task 2   ******************/
/**********************************************/
// calculate the amount of a given symbol in a given string
const inputStr = "Remember, all I'm offering is the truth. Nothing more.";

function calcStringSymbols(str, symbol) {
  const arr = str.split('');
  let amount = 0;

  for(let i=0; i < arr.length; i++) {
    if (arr[i] === symbol) {
      amount += 1;
    } 
  }

  return amount;
}

function calcStringSymbolsWithoutSplit(str, symbol) {
  let amount = 0;

  for(let i=0; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
      amount += 1;
    } 
  }

  return amount;
}

// divide & conquer strategy
function calcStringSymbolsWithDC(str, symbol) {
  let amount = 0;
  const len = str.length;

  for(let i=0; i < len/2; i++) {
    if (str.charAt(i) === symbol) {
      amount += 1;
    }     

    if (str.charAt(len - i - 1) === symbol) {
      amount += 1;
    } 
  }

  return amount;
}


calcStringSymbolsWithDC(inputStr, 'm'); // 4

console.log('calcStringSymbols ', calcStringSymbols(inputStr, 'm'));
console.log('calcStringSymbolsWithoutSplit ', calcStringSymbolsWithoutSplit(inputStr, 'm'));
console.log('calcStringSymbolsWithDC ', calcStringSymbolsWithDC(inputStr, 'm'));

/**********************************************/
/****************   Task 3   ******************/
/**********************************************/
// Reverse array of items
const itemsArrayN = [
    { n: '1' },
    { n: '2' },
    { n: '3' },
    { n: '4' },
    { n: '5' },
];

/**
 * @param {array} items
 * @return {array}
 */
function reverse(items) {
  return items.reduceRight((acc, item) => {
    acc.push(item);
    return acc;
  }, []); 
}

console.log(reverse(itemsArrayN));

/**********************************************/
/****************   Task 4   ******************/
/**********************************************/
// Check if a word is a palindrome
// Palindrome examples:
// anna => anna
// tenent => tenet
/**
 * @param {string} word
 * @return {boolean}
 */

function pallindrome(word) {
    // const reverseWord = word
    //     .split('')
    //     .reverse()
    //     .join(); O(n*3)

    // let reverseWord = '';
    // for(let i= word.length - 1; i >= 0; i--) {
    //     reverseWord += word.charAt(i);
    // } // O(n)

    // divide & conquer
    for (let i = 0; i <= word.length / 2; i++) {
        if(word.charAt(i) !== word.charAt(word.length - 1 - i)) {
            return false;
        } else {
            return true;
        }
    } // O(n/2) => O(n)
}

console.log(pallindrome('anna'));
console.log(pallindrome('react'));
console.log(pallindrome('tenet'));

/**********************************************/
/****************   Task 5   ******************/
/**********************************************/
// Transform and prepare users data that should contain 
// the corresponding city information
//  given data
const usersResp = [
  { name: 'Anna', cityId: '33' },
  { name: 'Taras', cityId: '33' },
];
const citiesResp = [
  { cityId: '30', cityName: 'Kyiv', country: 'Ukraine' },
  { cityId: '33', cityName: 'Lviv', country: 'Ukraine' }
];
 
function prepareUsersData(users, cities) {
  // return users.map(user => {
  //   const cityInfo = cities.find(city => city.cityId === user.cityId);
  //   return { ...user, city: cityInfo };
  // });
  const cityMap = cities.reduce((acc, city) => {
    acc[city.cityId] = city;
    return acc;
  }, {});

  return users.map(user => ({
    ...user,
    city: cityMap[user.cityId]
  }));
}

console.log(prepareUsersData(usersResp, citiesResp));
