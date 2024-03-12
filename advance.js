//  ------ Array

const e = ['Ram', 'Karan', 'Vihsal'];

// console.log(e.join());
// console.log(e.join(''));
// console.log(e.join('-'));

// for loop
// for(i=0;i<e.length;i++){
// console.log(e)
// console.log(e[i])
// }

// // forEach
// e.forEach((i)=> console.log(i))

// e.push("smit")
// console.log(e)

// length()  // give array length


//  ---- Array method
// length()
// toString()
// push()
// join()
// pop()
// concat // combine to array


// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)


// splice function
//  e.splice(2, 0, "mohan", "meet");
//  console.log(e)


// slice function
// const s = e.slice(1,3)
// console.log(s)


// indexOf function give position
//  includes function return boolean expression given value is in array or not

// const arr1 = [1, 2, 1];
// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
// console.log(result);

// print index
// for( const key of e.keys()){
//     console.log(key)
// }



// const array1 = [1, 2, 3, 4, 5];
// let sum = 0

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => { console.log(currentValue, "current"); console.log(accumulator, "Accu"); sum = currentValue + accumulator; console.log(sum, "sum"); return sum; },
//     initialValue,
// );

// for (let i = 0; i < array1.length; i++ ) {
//     sum += array1[i];
//   }

// console.log(sum)
// console.log(sumWithInitial);




//   find min max value with spread operator
// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 40];

//     let minValue = Math.min(...Arr);
//     let maxValue = Math.max(...Arr);

//     console.log("element" + minValue);
//     console.log("element" + maxValue);
// }

// findMinMax()



// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
//   console.log(new Food('cheese', 5).name);



// ----------- OOP

// Defining object
// let person = {
// 	first_name: 'Mukul',
// 	last_name: 'Latiyan',

// 	//method
// 	getFunction: function () {
// 		return (`The name of the person is
// 		${person.first_name} ${person.last_name}`)
// 	},

// 	//object within object
// 	phone_number: {
// 		mobile: '12345',
// 		landline: '6789'
// 	}
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);


// Using a constructor
// function person(first_name, last_name) {
// 	this.first_name = first_name;
// 	this.last_name = last_name;
// }
// // Creating new instances of person object
// let person1 = new person('Mukul', 'Latiyan');
// let person2 = new person('Rahul', 'Avasthi');

// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);



// Defining class using
// class Vehicle {
// 	constructor(name, maker, engine) {
// 		this.name = name;
// 		this.maker = maker;
// 		this.engine = engine;
// 	}
// 	getDetails() {
// 		return (`The name of the bike is ${this.name}.`)
// 	}
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());


// Encapsulation example
// class person {
// 	constructor(name, id) {
// 		this.name = name;
// 		this.id = id;
// 	}
// 	add_Address(add) {
// 		this.add = add;
// 	}
// 	getDetails() {
// 		console.log(`Name is ${this.name},
// 		Address is: ${this.add}`);
// 	}
// }

// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();



// Abstraction example
// function person(fname, lname) {
// 	let firstname = fname;
// 	let lastname = lname;

// 	let getDetails_noaccess = function () {
// 		return (`First name is: ${firstname} Last
// 			name is: ${lastname}`);
// 	}

// 	this.getDetails_access = function () {
// 		return (`First name is: ${firstname}, Last
// 			name is: ${lastname}`);
// 	}
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());



// Inheritance example
// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// method to return the string
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		// super keyword for calling the above
// 		// class constructor
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()},
// 		Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());





//  Array with object


// let myArr = [
//     {
//         studenName: "jack",
//         studenClass: 6,
//         studenSection: "a"
//     },
//     {
//         studenName: "tom1",
//         studenClass: 6,
//         studenSection: "a"
//     },
//     {
//         studenName: "tom2",
//         studenClass: 6,
//         studenSection: "a"
//     },
//     {
//         studenName: "tom3",
//         studenClass: 6,
//         studenSection: "a"
//     }

// ];

// console.log(myArr[1]);
// console.log(myArr.constructor);
// myArr.map((value) => {
//     for (let property in value) {
//         console.log(`${property}: ${value[property]}`);
//     }
// });


// let myObject = {
//     studenName: "ram",
//     studenClass: 6,
//     studenSection: "a"
// };

// myArr.push(myObject)

// myArr.splice(1, 1)
// console.log(myArr)


// var removeByAttr = function (arr, attr, value) {
//     var i = arr.length;
//     while (i--) { //3 2 1 arr[2]
//         // console.log(arguments)
//         if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {

//             // arr.splice(i, 1);

//         }
//     }
//     return arr;
// }

// var arr = [{ id: 1, name: 'serdar' }, { id: 2, name: 'alfalfa' }, { id: 3, name: 'joe' }];
// // console.log(arr)
// // console.log(removeByAttr(arr, 'id', 1))

// removeByAttr(arr, 'name', 'joe');



// sort Array

// const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
// console.log(arr)

// const sortWithReduce = arr => {
//     return arr.reduce((acc, val) => {
//         // console.log(acc)
//         // console.log(val)
//         let ind = 0;

//         while (ind < arr.length && val < arr[ind]) {
//             ind++;
//             console.log(ind)
//             // console.log(ind)
//         }
//         acc.splice(ind, 0, val);
//         return acc;
//     }, []);
// };
// console.log(sortWithReduce(arr));


// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//     console.log(a, "A value")
//     console.log(b, "B value");

//     return a - b
// });



// Array with loop

var fruits = ["apple", "banana", "cherry", "date"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

// fruits.forEach((fruits) => {
//     console.log(fruits)
// })

// var people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// for (var person of people) {
//     console.log(person)
//     for (var key in person) {
//         // console.log(key)
//         console.log(key + ": " + person[key]);
//     }
// }



// Promisee and try_catch

// function printMe() {
//     console.log('print me');
// }

// setTimeout(printMe, 2000);


// function printMe() {
//     console.log('print me');
// }

// function test() {
//     console.log('test');
// }

// setTimeout(printMe, 2000);
// test();

let promise = new Promise(function (resolve, reject) {
    const x = "ram";
    const y = "ram"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    then(function () {
        console.log('middle value, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });



// call function
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

const a = person.fullName.call(person1, "Oslo", "Norway");
// console.log(a)


// apply() function same as call but you give argument as array





const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Freeze the object
const newUser = Object.seal(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);


// const user = {
// 	username: 'AzureDiamond',
// 	password: 'hunter2'
// };

// // Seal the object
// const newUser = Object.seal(user);
// console.log(Object.seal)

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);