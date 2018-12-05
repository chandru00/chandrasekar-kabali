<script>
var imagecount = 1;
var total= 4;

function slide(x)
{
   
   var Image = document.getElementById('corsal');
   imagecount = imagecount+x;
   if(imagecount>total){
       imagecount =1;
   }
   if(imagecount<0)
   {
       imagecount=total;
   }

   Image.src = "images/ba"+ imagecount +".jpg";
};


window.onload = function(){

   setInterval(function(){slide(1);},2500);
}
</script>