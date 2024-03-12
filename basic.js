//  -----------  Data type
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

//  ------------   String function

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)


// charCodeAt - return unique number 
// let text = "Ram";
// let char = text.charCodeAt(0);
// console.log(char)

// const name = "VISHAL";
// let letter = name[2]; //The bracked notation [] returns an indexed element from a string
// console.log(letter)
// // const name = "W3Schools";
// // let letter = name.at(2);The at() method returns an indexed element from a string
// console.log(letter)


//  string compare base on regulare expression
// const P = 'The jay shri ram, jay shri ram It';
// const R = /[A-Z]/g;
// const F = P.match(R);
// console.log(F);


// slice
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);  // index 7 to  13 print 
// let part = text.slice(7);  // 7 index to all key are print 
// let part = text.slice(-12,-6);  // count from last index and 12 index to reverse 6 character print
// console.log(part)


//  ---- toUppercase
//  ---- toLowerCase


//  --- concat
// let t1 = "Hello";
// let t2 = "World!";
// let t3 = t1.concat(" ",t2); // join to string
// console.log(t3)


// ---- trim
// trim() // remove both side space
// trimStart() // Remove starting space
// trimEnd() // Remove last psace


//  ---- padStart()
// let text = "5";
// text = text.padStart(8,"0"); // padStart to sevent time print 0 and 8 time print 5
// text = text.padStartEnd(8,"0") // first add 0 and last add 8
// text = text.padStartStart(8,"0") 


//  ---- repeat()
//  ---- replace()
//  --- split()
//  ---- valueOf() // print value 




// ----- string search

// let text = "Please locate where 'locate' occurs!";
// indexOf()
// let index = text.lastIndexOf("locate", 15); // index 15 to search
// let index = text.search("'locate'"); // return which index to start given string
// console.log(index) 