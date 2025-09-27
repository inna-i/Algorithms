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
  { a: 0, b: 4 },
];

function filterAndExtendItems(items) {
  return items
    .filter((item) => item.a > 5)
    .map((item) => ({ ...item, sum: item.a + item.b })); // O (n + n) => O(n)
}

function filterAndExtendItemsReduce(items) {
  return items.reduce((acc, item) => {
    const { a, b } = item;
    if (a <= 5) return acc;

    acc.push({ a, b, sum: a + b }); // push -> O(1)

    return acc;
  }, []); // O(n)
}
// student's version
function addNumbers(a, b) {
  return a + b;
}
function filterAndExtend(arr) {
  let res = [];
  arr.forEach((item) => {
    if (item.a > 5) {
      const sum = addNumbers(item.a, item.b);
      res.push({ a, b, sum });
    }
  });
  return res;
}

// console.log(filterAndExtendItems(itemsArray));
// console.log('filterAndExtendItems2 result: ', filterAndExtendItemsReduce(itemsArray));
// console.log('filterAndExtendItems2 result: ', filterAndExtendItems2(itemsArray));
// console.log(filterAndExtendItemsReduce(itemsArray));

/**********************************************/
/****************   Task 2   ******************/
/**********************************************/
// calculate the amount of a given symbol in a given string
const inputStr = 'Remember, all I'm offering is the truth. Nothing more.';
function calcStringSymbols(str, symbol) {
  const array = str.split('');

  return array.reduce((acc, item) => {
    if (item === symbol) {
      acc += 1;
    }

    return acc;
  }, 0);
}

function calcStringSymbolsWithoutSplit(str, symbol) {
  let amount = 0;
  for (let i = 0; i < str.length; i++) {
    if (symbol === str[i]) {
      amount++;
    }
  }

  return amount;
}
// student's version
function calcStringSymbolsWithoutSplit_v(str, symbol) {
  if (str.length) {
    const _l = str.filter((char) => char !== symbol);
    return _l.length;
  } else {
    return 0;
  }
}

// divide & conquer strategy
function calcStringSymbolsWithDC(str, symbol) {
  let amount = 0;
  const len = str.length;

  for (let i = 0; i < Math.ceil(len / 2); i++) {
    if (str[i] && symbol === str[i]) {
      amount++;
    }
    if (str[len - i - 1] && symbol === str[len - i - 1]) {
      amount++;
    }
  }

  // [1, 2, 3, 4, 5] => pivot 3
  // len = 5
  // for => 3 itterations
  //
  // 1 2 3
  // 5 4
  return amount;
}

function calcStringSymbolsM(str, symbol) {
  let result = 0;

  for (let i = 0; i < str.length / 2; i++) {
    if (typeof str[i] !== 'undefined' && str[i] === symbol) {
      result++;
    }

    if (
      typeof str[str.length - i] !== 'undefined' &&
      str[str.length - i] === symbol
    ) {
      result++;
    }
  }

  return result;
}

// calcStringSymbolsWithDC(inputStr, 'm'); // 4
// console.log('calcStringSymbols ', calcStringSymbols(inputStr, 'l'));
// console.log('calcStringSymbolsWithoutSplit ', calcStringSymbolsWithoutSplit(inputStr, 'l'));
// console.log('calcStringSymbolsWithDC ', calcStringSymbolsWithDC(inputStr, 'l'));
// console.log('calcStringSymbolsM ', calcStringSymbolsM(inputStr, 'm'));

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
  }, []); // O(n)
}
// version 2
function noReverse(items) {
  let result = [];
  for (let i = items.length; i > 0; i--) {
    result.push(items[i]);
  }
  return result;
}

// console.log(reverse(itemsArrayN));

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
	// Version 1
  // const reverseWord = word
  //     .split('')
  //     .reverse()
  //     .join(''); O(n*3)

	// Version 2
  // let reverseWord = '';
  // for (let i = word.length - 1; i >= 0; i--) {
  //   reverseWord += word.charAt(i); // O(1)
  // } // O(n)

  // Version 3: divide & conquer
  for (let i = 0; i <= word.length / 2; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    } else {
      return true;
    }
  } // O(n/2) => O(n)
}

// console.log(pallindrome('anna'));
// console.log(pallindrome('react'));
// console.log(pallindrome('tenet'));

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
  { cityId: '33', cityName: 'Lviv', country: 'Ukraine' },
];

function prepareUsersData(users, cities) {
	// Version 1
  // return users.map(user => {
  //   const cityInfo = cities.find(city => city.cityId === user.cityId);
  //   return { ...user, city: cityInfo };
  // });

	// Verion 2: create cities Map (object [id]: cityName)
  const cityMap = cities.reduce((acc, city) => {
    acc[city.cityId] = city;
    return acc;
  }, {});

  return users.map((user) => {
    const city = cityMap[user.cityId];

    return {
      ...user,
      cityName: city.cityName,
      country: city.country,
    };
  }); // O (n*n) => O(n^2) => O(n + n) => O(n)
}

console.log(prepareUsersData(usersResp, citiesResp));
