//                              CONTROL FLOW STATEMENTS

//1.if
if (true){
    console.log('It is true!');
}
else{
    console.log('Not true!');
}

//2.comparison operators
let hungerLevel=7;
if(hungerLevel===7){        //===,!==,<,>,<=,>=
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!')
}

//3.logical operators
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood==='sleepy' && tirednessLevel>8){
  console.log('time to sleep');             //wont print
}
else if(mood==='sleepy' || tirednessLevel>8){
  console.log('not bed time yet');          //will print
}
let sleepy=true;
console.log(!sleepy);      //print true

//4.true/false-conditional
let wordCount = 9;
if (wordCount) {
  console.log("Great! You've started your work!");  //prints, bcoz wordcount value is valid&true
}
else {
    console.log('Better get to work!'); //when wordcount=0 / Nan / ""/''/null/undefined ,then value is false
}

//4.shortcut
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
console.log(defaultName); // Prints: Stranger

            //                     OR

let usernam = '';
let defaultNam = usernam || 'Stranger'; //Or checks the left-hand condition first always,thus taking username if present as defaultname
console.log(defaultNam); // Prints: Stranger

//5.Ternary operatoR
username?console.log(username):console.log('Stranger'); //if username present,prints it else prints 'stranger'

//6.switch
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':console.log('You get the gold medal!');break;
  case 'second place':console.log('You get the silver medal!');break;
  case 'third place':console.log('You get the bronze medal!');break;
  default:console.log('No medal awarded.');break;
}

//