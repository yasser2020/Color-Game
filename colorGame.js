var numSquares=6;
var color=generateColor(numSquares);
var pickColor=randomColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickColor;
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var modeButtones=document.querySelectorAll(".mode");
  


init();

function init(){

	for(var i=0;i<modeButtones.length;i++)
{
	modeButtones[i].addEventListener("click",function(){
		modeButtones[0].classList.remove("selected");
		modeButtones[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquares=3:numSquares=6;
       reset();

	});

}
}


function reset(){

 color=generateColor(numSquares);
     pickColor=randomColor();
     colorDisplay.textContent=pickColor;
     for(var i=0;i<squares.length;i++)
     {
     	if(color[i]){
     	squares[i].style.backgroundColor=color[i];	
     	squares[i].style.display="block";
     	}
     	
     else
     	squares[i].style.display="none";
     }
     resetButton.textContent="New Colors";
     h1.style.backgroundColor="steelblue";
     message.textContent="";
}


 resetButton.addEventListener("click",function(){

    reset();
 })

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color[i];

   squares[i].addEventListener("click",function(){
   var clickedColor=this.style.backgroundColor;
   if(pickColor === clickedColor)
   {
   	   	message.textContent="Correct!!!";
   	     changeColor(pickColor);
   	     h1.style.backgroundColor=pickColor;
   	     resetButton.textContent="Play Again!!!";
   }
   else
   {
   	this.style.background="#232323";
   	message.textContent="Try Again";
   }
    
   }

   )}

   function changeColor(color){
      //change all squares backgrounColor with the correct color

      for(var i=0;i<squares.length;i++)
      {
      	squares[i].style.backgroundColor=color;
      }

   }
     function randomColor()
     {

     	var randomcolor=Math.floor(Math.random()*color.length);
     	return color[randomcolor];
     }
     
     function generateColor(num)
     {
          var arr=[];
          for(var i=0;i<num;i++)
          {
            arr[i]=generateRandomColor();
          }

          return arr;
     }

     function generateRandomColor(){
     	
         //red color;
         var r=Math.floor(Math.random()*256);
         //green color
         var g=Math.floor(Math.random()*256);

         //blue color
         var b=Math.floor(Math.random()*256);

     	return "rgb("+r+", "+g+", "+b+")";

     }


