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
	a = "Hello World !";
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
This exemple may help you to hopefully understand some things better ! So now, you know how to write down an anonymous function, remember this, because you may need it in a few weeks.

##Ok, then what is aynchronous programming
The second thing I wanna talk about today is the that JS programming is known because of it's own way of programming, I mean it's not like JAVA wich is an Object Oriented Programming way, it a functionnal, it means that anything in JS is related to a function, for exemple, if you want to change someting you may need a function, if you want to get a specific value or structure you need a function, in fact, at eveytime you need a function !!!
In asynchronous functionnal progreamming (as i like to call AFP), you need to make first anonymous functions that can be called when work is done by the first one.

##WHAT is asynchronous
At the IUT, and in so many other programming language you have learned, you used to write code that needed the previous one to be finished before beeing exectuted, and that's what we call synchronous programming ! Then, you have understood that asynchronous programming doesn't need a line to be fully finished before being executed.
But, you need a new thing to controll what has to be made when it's done, and what do we need ... aaaah think.... think again ... Hell, it's what you get in mind since the begining of this centense... anonymous functions ! Those controlls the reaction of the function when it's done, ut let's write an exemple of it to help you to understand things
```javascript
	var callback = function(err, arg) {
	    if(err) return (err);
	    else {
	    	 console.log("Work is done with this arg ", arg);
	    	 return (0);
	    }
	}

	var MainFunction = function (arg, next) {
	    console.log(arg, " is passed as parameter !");
	    next(null, arg);
	    return (next(new Error("This is an Error Test !"), arg));
	}

	var ret = MainFunction(21,callback);
	console.log(ret);  // prints -1


	/*
	** This function prints 21 is passed as parameter
	** Then call the callback function called next in the main function
	** that first call of next prints Work is done with this arg 21 
	** Then the second call return the error
	** After it's returns err that is stored in ret
	** This is an Error Test is logged onto the screen
	*/
```

In fact this is not really aynchronous at 100% but at this moment you just need to understand this !

##Help me cleaning this mess, Ajax !!
Ok, I agree that, this joke was maybe to much, because This AJAX is don't related to the cleaning product, it means Asynchronous JAvascript and Xml, well you reallise now why did i talk about asynchronous programming !! this is the most important thing you have to understand, AJAX alows to read files in a new way, and to be trully respectable, it's hard to explain what is AJAX without trying and understand it by yourself so let's write some code as I always do, that's the best way I always had to explain something !
```javascript
 var xhr = new XMLHttpRequest(); // This is the Object you need to make Ajax call (I remenber that in Ajax you got the XML side and Javascript and this is all we get here)
 xhr.open(HTTP_TYPE_OF_REQUEST, __FILE__, true);
 xhr.onreadystatechange = function() {
 	// Let's overwrite the function associated to xhr !
	if(xhr.readyState === 4 && xhr.status === 200) { // explanation in the Breviaire.md
		console.log(xhr.responce); // Same as upside
	}else console.log(xhr.readyState);
 }
 xhr.send(null); // It means sending the AJAX call
```