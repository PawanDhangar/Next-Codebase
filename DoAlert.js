function dochange() {
    alert('clicked button with JS function');
}

/*---------------------
   Color change
---------------------*/

function colorchange(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  dd1.className = "Green";
  dd2.className = "Yelloback";
}

/*-----------------
    Text change
-------------------*/

function textchange(){
    var hh1 = document.getElementById("d1");
    var hh2 = document.getElementById("d2");
    
    hh1.innerHTML = "Banjour";
    hh2.innerHTML = "Sayonaro";
  }

  /*---------------------
     canvas
  -----------------------*/
  
  function dolime() {
    var dd1 = document.getElementById("d1")
    dd1.style.backgroundColor = "lime";
  }

  function doyellow() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "white";
  

  var ctx = dd1.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,40,40);
  ctx.fillRect(60,10,40,40);
 
  ctx.fillStyle ="black";
  ctx.font = "30px Arial";
  ctx.fillText("Hello",10,80);
  }

/*---------------
   canvas2
----------------*/

function doorange() {
  var canvas = document.getElementById("can1");
  canvas.style.backgroundColor = "orange";
}

function doblue() {
  var dd1 = document.getElementById("can1");
  dd1.style.backgroundColor = "blue";


var ctx = dd1.getContext("2d");
ctx.fillStyle = "yellow";
ctx.fillRect(10,10,60,60);
ctx.fillRect(80,10,60,60);

ctx.fillStyle ="black";
ctx.font = "20px Arial";
ctx.fillText("Hello",15,45);
}
/*----------------------
 Upload file
------------------------*/
function upload(){
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  alert("You choose " + filename);
}