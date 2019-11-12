function myFunction(){
  document.getElementById("demolition").innerHTML = "Paragraph changed.";
}

function fontSize(){
	document.getElementById("demo").style.fontSize="35px";
}

function lightOn(){
	document.getElementById('myImage').src='images/pic_bulbon.gif';
}

function lightOff(){
	document.getElementById('myImage').src='images/pic_bulboff.gif';
}

function lightGone(){
	document.getElementById('myImage').style.display='none';
}

function lightReturn(){
	document.getElementById('myImage').style.display='block';
}

function buttonStyle(){
	document.getElementById("myButton").style = "color: white;" +
	"background-color:green";
}

function buttonRevert(){
  document.getElementById("myButton").style = "none";
}

function buttonStyle1(){
	document.getElementById("myButton1").style = "color: white;" + 
	"background-color:green";
}

function buttonRevert1(){
  document.getElementById("myButton1").style = "none";
}
