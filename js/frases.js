window.onload = choosePic;

var myPix = new Array("images/1.jpg","images/2.jpg","images/3.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
     }