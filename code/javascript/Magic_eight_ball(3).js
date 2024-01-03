//                              MAGIC EIGHT BALL
/*In this project we will build a Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.
*/
let userName='Jane';//user can enter the username
userName?console.log(`Hello, ${userName}!`):console.log('Hello!'); //Hello, name! or Hello!
let userQuestion='How\'s the news today';
console.log(userQuestion); //print 'What do you wanna know?'
let randomNumber=Math.floor(Math.random()*8); //get a random no. btw 0-7. floor fn ensures it is down to 7
let eightBall=randomNumber;
switch(eightBall){
  case 0:console.log('It is certain');break;
  case 1:console.log('It is deadly so');break;
  case 2:console.log('Reply hazy try again');break;
  case 3:console.log('Cannot predict now');break;
  case 4:console.log('Do not count on it');break;
  case 5:console.log('My sources say no');break;
  case 6:console.log('Outlook not so good');break;
  case 7:console.log('Signs point to yes');break;
}
//whichever random number we get,it chooses from among the eight responses.
