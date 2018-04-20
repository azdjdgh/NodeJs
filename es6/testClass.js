class Person {
    constructor() {
        this.name = "jack";
        this.age = 18;
    }

    toString() {
        return "name:" + this.name + "  age:" + this.age;
    }

    static testStaticMethod() {
        return "static";
    }
}

Person.prototype.getName = function () {
    console.log(this.name);
};

console.log(Person.testStaticMethod());
let person = new Person();
person.getName();
console.log(person.name);
console.log(person.age);
console.log(person.toString());

//TODO: 测试Promise

var testPromise = function (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms, "111111");
    });
};

testPromise(2000).then((value) => {
    console.log("success:" + value);
}, (value) => {
    console.log('error:' + value);
});