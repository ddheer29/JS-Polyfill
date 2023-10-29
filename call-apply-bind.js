let car = {
    color: "Red",
    company: "Ferrari",
}

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`)
}

// purchaseCar.call(car, "₹", 10000000);

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "This not callback")
    }
    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car, "₹", 10000000);

Function.prototype.myApply = function (context = {}, args) {
    if (typeof this !== 'function') {
        throw new Error(this + "This not callback")
    }
    if (!Array.isArray(args)) {
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }
    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car, ["₹", 10000000]);

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable")
    }
    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

const output = purchaseCar.myBind(car);
console.log(output("₹", 10000000))