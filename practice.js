//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  var isTyler = function(name) {
    if (name === "Tyler") {
      return true;
    } else {
        return false;
      }
    };
  
    isTyler("Doug");
    isTyler("Tyler");


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  var getName = function() {
    var result = prompt("What's your name?");
    return result;
  }

  getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  var welcome = function() {
    var name = getName();
    alert("Welcome, " + name);

  }

  welcome();


//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.


  var adder = function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
       sum += arguments[i];
    }
    return sum;
  };

  alert("The Total Number was " + adder(1,2,3,4,5));  
  


//Next Problem



//What is the difference between arguments and parameters?

  Arguments are used when you invoke a function. Parameters are used when defining the function and inside of the function.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

  false
  0
  ""
  null
  undefined
  NaN
  
  You can check if something is falsy  by using an if statement.... 

var checkTruthyFalsy = function(num1, num2){
  if(num1){
    return true;
  }
  return false;
}


//Next Problem



//Create a function called myName that returns your name

  var myName = function(name) {
    return name;
  }

  myName("Doug");

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

  alert(newMyName("bob"));

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  var outerFn = function() {
    return function() {
      return "Doug";
    };
  };

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();
  
//Now invoke innerFn.

  alert(innerFn());