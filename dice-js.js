      // LEFT CHANGE -------------
  var a=Math.random();
   a=a*6;
   a=Math.floor(a)+1;
   
   var rd1="/Web_devlopment/PROJECTS/MINIPROJECT/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" + a +".png"

   document.querySelector("#left").setAttribute("src",rd1);

   // RIGHT CHANGE     -----------------
   var b=Math.random();
   b=b*6;
   b=Math.floor(a)+1;

   var rd2="/Web_devlopment/PROJECTS/MINIPROJECT/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" + b + ".png"
   document.querySelector("#right").setAttribute("src",rd2);

   if(a===b){
      document.querySelector("h2").innerHTML="player 1 wins ";
   }
   else if(a<b){
    document.querySelector("h2").innerHTML="player 2 wins ";
   }
   else{
    document.querySelector("h2").innerHTML="Oop's,let's play again ";
   }