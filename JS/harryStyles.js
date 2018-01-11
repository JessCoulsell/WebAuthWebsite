
var myIndex = 0;

var buttonDate  = "Mar 11, 2018 19:00:00";
var countDownDate = new Date(buttonDate).getTime();



window.onload = function(){
	//finds all elements with the body tag
	var x = document.getElementsByTagName("body")[0];
	//checks if the id of the body tag is home
	if (x.id == "home") {
	//calls the carousel function
	carousel();
    
}
	//checks if body id is tour
	if(x.id == "tour"){
	//checks if there is anything stored in local storage
	if(localStorage.getItem('tourdate')){
	//if there is then calls the tourdate function
	tourdate();

	
	}
	else{
	//if nothing is stored in local storage then calls the startClock function
		startClock();
	
	}
	}
	//checks if body id is cart
	if (x.id == "cart"){
		//if it is then calls the viewCart function
		viewCart();
	}
	
	
	
	
	
	
}

function carousel() {
    var i;
	//gets the element in the html with the class name "mySlides"
    var x = document.getElementsByClassName("mySlides");
	//
    for (i = 0; i < x.length; i++) {
		//hides the slide pictures
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1} 
//displays one slide picture 	
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); 
	
}

function tourdate(){
	//sets date to the information stored in local storage at location 'tourdate'
	date = localStorage.getItem("tourdate");
	//sets cLocation to the information stored in local storage at location 'concertLocation'
	cLocation = localStorage.getItem("concertLocation");
	//calls the ChosenDate funtion and passes it the values stored in date and cLocation
	ChosenDate(date,cLocation);
}

function ChosenDate(date,conLocation){
	concertLocation=conLocation;
	countDownDate = 0;
    buttonDate = date;
	//works out the time to till the date provided to the function
	countDownDate = new Date(buttonDate).getTime();
	//calls the startClock function
	startClock();
	//sets the element with id location to the string provided
	document.getElementById("location").innerHTML = "You are going to see Harry Styles at " +concertLocation+" in";

    





}
function startClock(){
var x = setInterval(function() {

  
  var now = new Date().getTime();

  //works out the time between the current date and the concert date
  var distance = countDownDate - now;

 //converts the time to the number of days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //sets the clock element to the values worked out previously
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

 //if the time is less than 0 then sets the clock to expired 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);
}


function shopImage(colour){
	tColour = colour
	//sets colour to local storage
	localStorage.setItem("colour",tColour);
	document.getElementById("chosenColour").innerHTML ="Colour Selected: " +tColour;
	//displays different image based on colour stored in local storage
	if (tColour == 'white'){
		document.getElementById("cover").src = "../Assets/white.jpg";
	}
	else if (tColour == 'black'){
		document.getElementById("cover").src = "../Assets/black.png";
	}
	else if (tColour == 'grey'){
		document.getElementById("cover").src = "../Assets/grey.png";
	}
	else if (tColour == 'pink'){
		document.getElementById("cover").src = "../Assets/pink.png";
	}
}

function size(size){
	document.getElementById("chosenSize").innerHTML ="Size Selected: " +size;
	localStorage.setItem("size",size);
}
function saveToCart(){
	document.getElementById("cart").innerHTML ="Saved to cart";
	//gets the quantity from the element with id 'quantity'
	quantity = document.getElementById("quantity").value;
	//sets 'quantity' in local storage to the value converted to a string
	localStorage.setItem("quantity",String(quantity));

	
}
function save(){
	//checks if local storage is available
	if (typeof(Storage) !== "undefined") {
    localStorage.setItem("tourdate",buttonDate);
	localStorage.setItem("concertLocation",concertLocation);
} else {
    document.getElementById("countdownInfo").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}
function viewCart(){
	colour = localStorage.getItem("colour")
	//displays different image based on colour stored in local storage
	if (colour == 'white'){
		document.getElementById("itemPic").src = "../Assets/white.jpg";
	}
	else if (colour == 'black'){
		document.getElementById("itemPic").src = "../Assets/black.png";
	}
	else if (colour == 'grey'){
		document.getElementById("itemPic").src = "../Assets/grey.png";
	}
	else if (colour == 'pink'){
		document.getElementById("itemPic").src = "../Assets/pink.png";
	}
	document.getElementById("itemColour").innerHTML =colour;
	document.getElementById("itemSize").innerHTML =localStorage.getItem("size");
	document.getElementById("itemQuantity").innerHTML =localStorage.getItem("quantity");
	
}
function dateDelete(){
	//removes the items from local storage
	localStorage.removeItem("tourdate");
	localStorage.removeItem("concertLocation");
	startClock();
	//refreshes the page
	location.reload();
}