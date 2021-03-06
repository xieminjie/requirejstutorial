// This JavaScript file defines a module with one explicit dependency: the 'messages' module. 
// Explicit dependencies are specified in the first parameter as an array of strings. 
// The second parameter is the callback function to call when all the dependencies have been
// loaded. This callback function gets passed as parameters an instance of each module dependency.
//
// In our case, we only specify the 'messages' module as a dependency. Our callback function thus
// has one parameter: an instance of the 'messages' module. When requiring the 'messages' module,
// RequireJS will request it from: "scripts/messages.js"
define(['messages'], function (messages) {    
	// We use the object defined in the 'messages' module and passed to our
	// callback by RequireJS and call its 'getHello'() function
    alert(messages.getHello());
});