

$(document).ready(function(){


	var $grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    itemSelector: '.grid-item',
	  	columnWidth: 260
	  });
	});

	$grid.isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows',
	})

	$('#shakespeare-filter').click(function(){
		$grid.isotope({ filter: '.shakespeare' });
	});

	$('#film-filter').click(function(){
		$grid.isotope({ filter: '.film' });
	});

	$('#lecture-filter').click(function(){
		$grid.isotope({ filter: '.lecture' });
	});

	$('#exhibition-filter').click(function(){
		$grid.isotope({ filter: '.exhibition' });
	});

	$('#dancing-filter').click(function(){
		$grid.isotope({ filter: '.dancing' });
	});
	
	$('.grid-item').flip({
  		trigger:'click',
  		axis:'y'
	});
  	


  	$('.front').css("height","auto","width","240px");


	$('.back').css("height","100%","width","auto");

	var number = $('.grid-item').length;

	console.log(number);

	for(var i = 1;i<=number;i++){
		var h = $('.grid-'+i + ' .front').height();
		console.log(h);
		$('.grid-'+i).height(h+12);
		$('.grid-'+i + ' .back').height(h);
	}

	// NOTE: WHEN NEED TO QUERY events in database of a specific month,
	// sends the following post request, and the month should be in format of the example.
	// The example queries for all events in April of 2016.

	//$.post("/home/201604", function(responseJSON){
	//	console.log("got here in 201604");
	//});

});