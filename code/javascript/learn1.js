//                           INTRO TO JAVASCRIPT
//                          ----------------------

//1-Datatypes and console print

console.log('JavaScript');      //string-"" or ''
console.log(2011);              //number
console.log('Woohoo! I love to code! #codecademy');     //string
console.log(20.49);             //number
/*
Datatypes:  string,number,BigInt,symbol,Boolean,null,undefined,object */

//2-Arithmetic operation

console.log(3.5+110);
console.log(2023-1969);
console.log(65/240);
console.log(0.2708*100);
console.log(45%9);

//3-String Concatenation

console.log('Hello'+"World");
console.log('Hello'+' '+"World");

//4-Properties

//1.Length
console.log('Teaching the world how to code'.length);

//5-Methods

//1.uppercase      2.startswith     3.trim     4.split     5.replace    6.repeat
console.log('Codecademy'.toUpperCase());
console.log('Codecademy'.startsWith('C')); //true
console.log('    Remove whitespace   '.trim()); //removes space on both ends.Extra:(trimStart(),trimEnd())
console.log('Mary had a little lamp'.split(' ',3)); //split(seperator,count) output:['Mary','had','a']
console.log('Mary had a little lamp'.split('',3)); //out:['M','a','r']
console.log('Mary had a little lamp'.split('a',3)); //out:['M','ry h','d']
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]); // Expected output: "fox"
console.log('Consigliere '.replace('sigliere',' artist')); //out:con artist Extra:replaceAll()
const myword = 'happy! ';
console.log(`I am feeling very ${myword.repeat(3)}`);

//6-Built in Objects

console.log(Math.floor(Math.random()*100)); //show random no. from 0-100,floor is to make it a roundoff number and no decimal
console.log(Math.ceil(43.8)); //returns the smallest integer greater than or equal to a decimal number.
console.log(Number.isInteger(2017));