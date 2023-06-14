"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//string
var fullName = "sonu";
console.log("Hi" + " " + "".concat(fullName));
// number
var num = 10;
num = 20;
console.log(num);
// arrays
var arr = [1, 2, 3];
var arr1 = [20, 30, 40, 50];
console.log(arr[2]);
console.log(arr1[3]);
// tuple
var tuple1 = [40, "Bye"];
tuple1 = [30, "Helooo"];
console.log(tuple1);
// enum
var fruits;
(function (fruits) {
    fruits[fruits["banana"] = 5] = "banana";
    fruits[fruits["manago"] = 6] = "manago";
})(fruits || (fruits = {}));
//it give the index
//  let fr: fruits = fruits.banana
//  console.log(fr)
// if i want the name then do below
var frname = fruits[6];
console.log(frname);
//  unknown
var un = 3;
console.log(un);
//  any
var an = 9;
an = 'any value';
an = true;
//  void
// union types
// functions 
function foo() {
    console.log('am from foo method');
}
foo();
function foo1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(foo1(20));
function userget(userdetails) {
    console.log(userdetails.firstName + " " + userdetails.lastName + " " + userdetails.Id);
}
userget({
    firstName: 'sonu',
    lastName: 'patel',
    Id: 101
});
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hi from Greet Method ".concat(this.empName));
    };
    return Employee;
}());
var emp = new Employee('Jannuuuuu');
// let n=emp.greet();
// console.log(n);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(adminname) {
        return _super.call(this, adminname) || this;
    }
    Admin.prototype.freet = function (n1, n2) {
        return n1 + n2;
    };
    return Admin;
}(Employee));
var ad = new Admin('Bunnys');
console.log(ad.empName);
console.log(ad.freet(25, 35));
console.log(ad.greet());
