
var myIndex = 0;

var buttonDate  = "Mar 11, 2018 19:00:00";
var countDownDate = new Date(buttonDate).getTime();



window.onload = function(){
	var x = document.getElementsByTagName("body")[0];
	if (x.id == "home") { 
	carousel();
    
}

	if(x.id == "tour"){
	console.log("loaded",localStorage.getItem('tourdate'));
	if(localStorage.getItem('tourdate')){
			console.log("calling function");
	tourdate();

	
	}
	else{
		startClock();
	
	}
	}
	
	if (x.id == "cart"){
		viewCart();
	}
	
	
	
	
	
	
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); 
	
}

function tourdate(){
	console.log("Function running");
	date = localStorage.getItem("tourdate");
	cLocation = localStorage.getItem("concertLocation");
	console.log(date);
	console.log(cLocation);
	ChosenDate(date,cLocation);
}

function ChosenDate(date,conLocation){
	concertLocation=conLocation;
	countDownDate = 0;
    buttonDate = date;
	countDownDate = new Date(buttonDate).getTime();
	startClock();
	document.getElementById("location").innerHTML = "You are going to see Harry Styles at " +concertLocation+" in";

    





}
function startClock(){
var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);
}


function shopImage(colour){
	tColour = colour
	localStorage.setItem("colour",tColour);
	document.getElementById("chosenColour").innerHTML ="Colour Selected: " +tColour;
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
	quantity = document.getElementById("quantity").value;
	localStorage.setItem("quantity",String(quantity));
	console.log(quantity);
	
}
function save(){
	if (typeof(Storage) !== "undefined") {
    localStorage.setItem("tourdate",buttonDate);
	localStorage.setItem("concertLocation",concertLocation);
} else {
    document.getElementById("countdownInfo").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}
function viewCart(){
	console.log("viewing cart");
	colour = localStorage.getItem("colour")
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
