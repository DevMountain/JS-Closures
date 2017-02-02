/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */

// Code Here

//Once you do that, invoke inner.

//Code Here










/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


var callFriend = function(name) {
  var friend = name
  function dial(number) {
    return 'Calling ' + friend + ' at ' + number
  }
  return dial
}

/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns the dial function.
Create a callJake function that when invoked with '435-555-9248' returns 'Calling Jake at 435-555-9248'
in your console. */

  //Code Here









/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here

//Uncomment this once you make your function
//   var count = makeCounter();
//   count(); // 1
//   count(); // 2
//   count(); // 3
//   count(); // 4










/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. */

function counterFactory(value) {

  // Code here.


  return {
  }
}


counter = counterFactory(10);










/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname){

  var welcomeText = 'You\'re doing awesome, keep it up ';

  // code message function here.


  //Uncommment this to return the value of your invoked message function
  //return message();

}

motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob










/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the return create a publicMethod property that is a function that
invokes privateMethod. After you create the privateMethod. Invoke it by calling
module.publicMethod(); outside the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: 'Utah'
  };

  var privateMethod = function(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  };

  // Anything that is being returned is made public and can be invoked from
	// outside our lexical scope

  return {
    // Code here.
  };

})();

// Uncomment this after you create your public method
//   module.publicMethod();










/******************************************************************************\
	#Black Diamond
\******************************************************************************/

/****** INSTRUCTIONS ******/
/* 
In timeOutCounter we have a for loop that will iterate as long as i is less than or equal
to 5. We want to console.log(i) so that it logs each value of i ( 0 then 1 then 2
then 3, etc) at the desired interval. However, because each call to logCounter occurs after
the loop has executed, the value of i has changed before the console.log executes. Run this 
code in your console to see the output.

Fix the code below to log the desired output.   
*/

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(logCounter, i * 1000)
  }

  function logCounter() {
    console.log(i)
  }
}
timeOutCounter();