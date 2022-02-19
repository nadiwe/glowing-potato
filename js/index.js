
//document.body.style.backgroundColor = "red";



$(document).ready(function(){
    $('.bars').mouseover(function(){ 
      

        //Add an active class to the anchor
        $(this).each(function(){
            let infoId = $(this).context.id;
            let infoW = '#' + infoId;

            var matches = document.querySelectorAll(infoW);
            console.log(matches);

    
          $('div#'+ infoId).addClass('big');
            $(this).addClass('big');
           
          
     
    
         },
         $('.bars').mouseout(function() {
            $(this).each(function(){
                let infoId = $(this).context.id;
                let infoW = '#' + infoId;
             

                var matches = document.querySelectorAll(infoW);
                console.log(matches);
    
            
              $('div#'+ infoId).removeClass('big');
            $(this).removeClass('big');

            })   
        })
        
 )}
 )});

 /*$(document).ready(function()
  {
    $('.banners').hover(
      function(){ 
        $(this).width('150%'); //Add an active class to the anchor
       
      },
      function() {
        $(this).width('100%'); //Remove an active class to the anchor

      }
   )
 });


$(document).ready(function(){
    $("#discoverImg").toggle(function(){
      //alert("You entered p1!");
      $("#discoverImg").width(600);

    
   // function(){
    //  alert("Bye! You now leave p1!");
    }
    , function() {
        alert( "Second handler for .toggle() called." );
      });
  });


document.getElementById('discoverImg').onmouseover = function (evt) {

    let 
}





const elementId = document.getElementById('h1');

elementId.style.color = "white";
elementId.style.width = '200px';


const elementImg = document.getElementById('cutoutImg');
elementImg.style.width = '200px';




var elementClass = document.getElementsByClassName("h1");
//elementNav.style.width='50px';
elementClass.style.color = 'red';

elementClass.style.backgroundColor = "red";


*/


