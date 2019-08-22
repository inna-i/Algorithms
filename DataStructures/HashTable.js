const WEIRD_NUMBER = 23;

function hash(str, limit = 53) {
    let result = 0;

    for(let i=0; i < Math.min(str.length, 100); i++) {
        result += (str.charCodeAt(i) - 96) * WEIRD_NUMBER;
    }

    return Math.abs(result % limit);
}


class HashTable {
    constructor() {
        this.array = new Array(10);
    }

    set(key, value) {
        const keyHash = hash(key, this.array.length);
        
        if(!this.array[keyHash]) {
            this.array[keyHash] = [];
        }
        const bucket = this.array[keyHash];
        bucket.push([key, value]);
    }

    get(key) {
        const keyHash = hash(key, this.array.length);
        const bucket = this.array[keyHash];

        for(let i = 0; i < bucket.length; i++) {
            const entries = bucket[i];
            if (entries[0] === key) {
                return entries[1];
            }
        }
            
        return;
    }

    keys() {
        const result = [];

        for (let i = 0; i < this.array.length; i++) {
            if(this.array[i]) {
                this.array[i].forEach(entry => {
                    result.push(entry[0]);
                });
            }
        }

        return result;
    }
}


const test = new HashTable();

test.set('black', '#000');
test.set('white', '#fff');
test.set('red', '#f00');
test.set('blue', '#00f');
test.set('green', '#0f0');

console.log(test);

console.log(test.get('green'));
console.log(test.get('black'));
console.log(test.get('red'));
console.log(test.get('white'));
console.log(test.keys());