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