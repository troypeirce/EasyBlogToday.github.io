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