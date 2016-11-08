#Javascript Documentation

Hello Everyone, today, Friday 4 November, I'm glad to tell you that since today, all the TP, will only be written in English ehehe
In fact you may know that every documentation is written by default in English and I got a QWERTY keyboard on my MacBook. Then now you have to remember that TP's and Documentation will be in English.

##Functions
```javascript

	// Every *(wildcard) means that any type of data can be passed as a parameter !

	void:console.log(*); // Log onto the WebBrowser console anything you want !
	void:alert(*); // print a popup onto the screen with any value you want !
	boolean:confirm(*); // return a boolean related on the button pressed on the popup
	
	/***** How To ! *****/

	function function_name(args...) {
		 //Code goes here !
		 return (*);
	}

	var Object = function(args...) {
	    this._attribute_1 = args[1];
	    this._attribute_n = args[n];
	}

	// To declare any function related to the Object you have to specialised it like that
	Object.prototype.function_name = function() {
		//Code goes here !
		return (*);
	}

	// Soon i'll ask you to write down every functions documentation then you will write that like this exemple

	/**
	** DESCRIPTION_OF_THE_FUNCTION (in 1 or 2 lines max)
	** @argument_1_name:wanted_type description of usability
	** @argument_n_name:wanted_type description of usability
	** @Error_name_to_thow:wanted_error_type when do we throw this error
	** @return var_name:wanted_type description of value returned
	**/
	function function_name(args...) {
		 //Code goes here !
		 return (*);
	}
```

for any other documentation, the only one, that's allow is [THIS ONE](http://www.w3schools.com/jsref/default.asp)

##AJAX programming
```javascript
	var xhr = new XMLHttpRequest(); // Object needed to make AJAX calls
	xhr.open(HTTP_REQUIEST_TYPE, __FILE__, true); // Open function to prepare the AJAX
	xhr.onreadystatechange = function() {
		// Code goes here !
		//redefinition of the function
	}
	xhr.send(formData || null) // send the request with or without data (in case of post call)
	
```
If you remember in the function you will check the ready state :
- 1 : The xhr object has been created
- 2 : the xhr octed is ready to send (after open function);
- 3 : waiting for answers, after the send function called
- 4 : xhr is ready to get answer

Then you will check the status code of the answer
- 200 : HTTP code to tell everything's fine
- 404 : Page not found
- 500 : Internal Server Error