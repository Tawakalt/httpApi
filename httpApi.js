function checkUser(username){// 
	//require the https module in order to make an encrypted request to the server
	var https = require('https'); 


	//Declare and create the object that will be used for the request
	var options = {
		host: 'api.github.com', // the URL
		path: '/users/' + username, //The resource being searched for 
		method: 'GET', // The http method being made
		headers: { 'user-agent': 'node.js'} // The header sent to notify the server the app that is consuming the api
	};

	//A GET function that takes two args (the option obj and a callback function.) the callback function waits for a response from the request made and then passes it to the 'data' variable
	https.get(options, function(res) {

		res.on('data', function(data) {//When a response is received by 'data', the callback function runs the code in the code block

			var getContent = data.toString() // we get the 'data' response, change it to a string and then assign it to a getContent variable

			console.log(getContent); //We log to the console the response
		});
	}).on('error', function(err) {//check for error and if there is, call the callback function and then log the err to the console.
		console.log('There is an error: ' + err.message);
	});

}
//calling the function with my github username Tawakalt
checkUser('Tawakalt');