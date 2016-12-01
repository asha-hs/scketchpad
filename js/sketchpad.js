function drawGrid(size) 
{
		
		var row = size;
		var col = size;
		
		for(var i=0;i<row;i++)
		{
		 	$('<div>').addClass('square-line').appendTo('.container');
		};
		
		var squareWidth = 600 / col;
		
		console.log("squareWidth "+squareWidth);
		for(var j=0;j<col;j++) 
		{
			$('<div>').addClass('square').css('width',squareWidth).css('height',squareWidth).appendTo('.square-line');
		}
	
		
		
}

$(document).ready(function(){
		
	drawGrid(16);
	
	$('#colors').on('change',function(){
		
		var color = $('#colors option:selected').val();
		switch(color) {
			
			case 'black':
				$('.container').on('mouseenter','.square',function() {
					$(this).css('background-color','black');	
				});
				break;
			case "blue":
				$('.container').on('mouseenter','.square',function() {
					$(this).css('background-color','blue');	
				});
				break;
			case "red":
				$('.container').on('mouseenter','.square',function() {
					$(this).css('background-color','red');	
				});
				break;
				
			case 'green':
		    $('.container').on('mouseenter', '.square', function(){
			$(this).css("background-color", 'green');
			});
		    break;
				
			case "rainbow":
			$('.container').on('mouseenter','.square',function() {
				var multiplecolor = 'rgb('+Math.floor(Math.random() * 256) +',' + Math.floor(Math.random() * 256)+','+Math.floor(Math.random()*256)+')';
					$(this).css('background',multiplecolor);	
				})
				break;
		}
		
		
		
	});
	
	$('.newGrid').on('click',function(){
		$('.square-line').remove();
		
		var value = prompt("How many squares per gridrow you want?");
		drawGrid(value);
		
	});
	
	$('.button').on('click',function(){
		
		$('.square').removeAttr('style');
		$('.container').off('mouseenter','.square');
		$('#colors').val('choose');
		
	});

});