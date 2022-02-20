$(document).ready(function(){
  $('.bars').mouseover(function(){ 
            $(this).each(function(){
          let infoId = $(this).context.id
          /*-----------infos_about_id
          let infoW = '#' + infoId;
          var matches = document.querySelectorAll(infoW);
          console.log(matches);*/  
        $('div#'+ infoId).addClass('big');
          $(this).addClass('big');
       },
       $('.bars').mouseout(function() {
          $(this).each(function(){
              let infoId = $(this).context.id
               /*-----------infos_about_id
              let infoW = '#' + infoId;
              var matches = document.querySelectorAll(infoW);
              console.log(matches);*/ 
            $('div#'+ infoId).removeClass('big');
          $(this).removeClass('big');

          })   
      })
      
    )
  });

  

$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();

return (elementBottom-20)  > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
$('section').each(function() {

  
   
 console.log($(this))
console.log($(this).isInViewport())
 
  if (!$(this).isInViewport()) {
 
    $('.under div div').css('width','10%');

}
 else{ 

  console.log('HIIIIIIEEEERRRR')

       // $('.under nav div div').css('width','2%');
       console.log($(this))
       let sectionCheck = $(this).context.id
      let changeNav = 'div#'+sectionCheck +'Nav'
let changeNavW = $(changeNav).css('width')
      console.log(sectionCheck)
        $('div#'+sectionCheck+'Nav').css('width','160%');
        $('div#_redNav').css('width','160%');


    // let widthNav = changeNav.css('width','auto')
     //console.log(widthNav)
}

})

});

});








