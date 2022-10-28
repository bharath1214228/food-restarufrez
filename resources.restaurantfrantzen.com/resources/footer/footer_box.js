jQuery(document).ready(function($) {
	
	$('.footer_box').append('<div class="flabel">Frantzén Group</div><div class="links"><ul></ul></div>');

	$.getJSON('https://resources.restaurantfrantzen.com/ajax/list.json', function(data) {
        $.each(data, function(index) {
			$('.footer_box ul').append('<li><a target="_blank" href="'+data[index].url+'">'+data[index].name+'</a></li>')
        });
    });
	//var box_height = -267;
	var active = false;
	var destination = "0px";
	
	$(document.body).on('click', ".footer_box", function(){
 $(this).toggleClass("closed");
 $(this).find(".links").slideToggle();
});

	
$(document.body).on('click', ".footer_box a", function(){ 
	
  event.stopPropagation();
  // do something
});  
	
	
});