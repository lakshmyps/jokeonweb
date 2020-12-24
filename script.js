
// function to invoke the webservice
function getmeajoke(){
		//alert('testing')
		//document.getElementById("jok").innerHTML = 'testing'
		var rjoke = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
		rjoke.onload = success; // call success function if request is successful
		rjoke.onerror = error;  // call error function if request failed
		rjoke.open("GET", "https://official-joke-api.appspot.com/random_joke"); // open a GET request
		rjoke.send(); // send the request to the server.
}


	// function to handle success
function success() {
    var data = JSON.parse(this.responseText); //parse the string to JSON
    // console.log(data)
    // // console.log(JSON.stringify(data));
    // document.getElementById("jok").innerHTML = JSON.stringify(data)
    // var jokeObj= JSON.stringify(data)
   document.getElementById("jok").innerHTML= "<br>" + data['setup'] +"<br><br>"+ data['punchline'];//
    
}
     

// function to handle error
function error(err) {
	document.getElementById("jok").innerHTML = err
    console.log('Request Failed', err); //error details will be in the "err" object
}

