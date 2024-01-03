//1.function declaration and call
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  let i=1;
  while(i<=3){      //call the function 3 times
  sayThanks();
  i=i+1;
  }

 // 2.function arguments
 function sayThanks(name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
  }
  sayThanks('Cole');

  //3.default parameter
  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!
  
  //3.return
  