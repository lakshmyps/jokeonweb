function myFunction() {  // onload function
    var dogapi= new XMLHttpRequest();
    dogapi.onload= addList;
    dogapi.onerror= error;
    dogapi.open("GET","https://dog.ceo/api/breeds/list/all");
    dogapi.send();

}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

function addList(){ // Dynamic combobox function

    var dclient = new HttpClient();
    dclient.get('https://dog.ceo/api/breeds/list/all',function(response){
        console.log(response)
        var data = JSON.parse(response);
        var breed= data.message;
        var sell = document.getElementById("dog");
            for (var x in breed){
                // console.log(x);
                var opt= document.createElement('option')
                opt.value=x;
                opt.appendChild(document.createTextNode(x));
                sell.appendChild(opt);
            }
        });
    
}

function error() {
    document.getElementById("demo").innerHTML = err
    console.log("Failed",err);
}

function showimage(){   // onchange function
    var breedname = document.getElementById("dog").value;
    var dogim= new XMLHttpRequest();
    dogim.onload=breedImage;
    dogim.onerror=error;
    dogim.open("GET","https://dog.ceo/api/breed/"+breedname+"/images/random");
    dogim.send();
}

function breedImage(){  // dispaly image function
    x = document.getElementById("brdimg");
    var imgresponse= JSON.parse(this.responseText);
    console.log(imgresponse['message']);
    document.getElementById("brdimg").src=imgresponse['message'];
    intervalID = setInterval(loadImage, 10);

}
    function loadImage()
    {
      x = document.getElementById("brdimg");
      x.src = imageresponse['message'];
    }
