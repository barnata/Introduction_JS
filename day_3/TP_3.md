#TP 3
##Introduction to AJAX and asynchronous programming and anonymous functions

Hi everyone, today is great day to talk about the most important things of JS... The Asynchronous functions and Ajax calls. but before let's recap things we've seen before :
- How to make functions, write variables, and other primitive stuff of JS you need to know
- Manipulate Javascript files and inclusions
- Manipulate the DOM (wich for me require to be worked (#MayBecomeTP4))

## This make no sense... You told us that a function like every needed a name
Hell yeah .. I remember talking about it... but you'll learn that most people, those who programming with JS technologie doesn't write functions like we've made anynore, because in JS, you have to remember that a variable can be anything at anytinme
For exemple, you can make thoses things
```javascript
	var a;
	a = 12;
	console.log(a); // prints 12
	a = "Hello World !"';
	console.log(a); // prints Hello World
	a = 12.4e132;
	console.log(a)// prints 0.0000000[...]124132
	a = function(arg_1, arg_2) {
	  console.log(arg_1);
	  if(typeof arg_2 == "string") {
	  	    console.log("args_2 is a string !!!");
	  }else throw new Error("args_2 must be a string");
	}
	console.log(a); // prints [function Function]
	console.log(a(2,"Hello"))// prints undifined then 2 and args_2 is a string !!!
```