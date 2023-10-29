// Polyfill of map

let arr = [11, 12, 13, 14, 15]

Array.prototype.myMap = function (cb) {
    let tmp = [];
    for (let i = 0; i < this.length; i++) {
        tmp.push(cb(this[i], i, this));
    }
    return tmp;
}

const output1 = arr.myMap((num, i, arr) => {
    return num * 3;
})

console.log(output1)

Array.prototype.myFilter = function (cb) {
    let tmp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            tmp.push(this[i]);
        }
    }
    return tmp;
}

const output2 = arr.myFilter((num, i, arr) => {
    return num > 13;
})

console.log(output2)


Array.prototype.myReduce = function (cb, initialVal) {
    var accumulator = initialVal
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator;
}

const output3 = arr.myReduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(output3)