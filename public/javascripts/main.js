

$(document).ready(function(){


	var $grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    itemSelector: '.grid-item',
	  	columnWidth: 260
	  });

	//   var $items = $("<div class='grid-item grid-14 shakespeare film'><div class='front' style='height: auto; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 10; transition: all 0.5s ease-out;'><img src='image/throne_of_blood.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Throne of Blood </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 6, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#film</span><span class='tag'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back' style='transform: rotateY(-180deg); height: 239px; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 9; transition: all 0.5s ease-out;'><p class='detail'>Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>. Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>.</p></div></div>");
	// $grid.append( $items ).masonry( 'appended', $items);
	
	// var $items2 = $("<div class='grid-item grid-15 shakespeare film'><div class='front' style='height: auto; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 10; transition: all 0.5s ease-out;'><img src='image/throne_of_blood.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Throne of Blood </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 6, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#film</span><span class='tag'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back' style='transform: rotateY(-180deg); height: 239px; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 9; transition: all 0.5s ease-out;'><p class='detail'>Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>. Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>.</p></div></div>");
	// var $items3 = $("<div class='grid-item grid-16 shakespeare film'><div class='front' style='height: auto; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 10; transition: all 0.5s ease-out;'><img src='image/throne_of_blood.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Throne of Blood </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 6, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#film</span><span class='tag'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back' style='transform: rotateY(-180deg); height: 239px; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 9; transition: all 0.5s ease-out;'><p class='detail'>Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>. Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>.</p></div></div>");
	// var $items4 = $("<div class='grid-item grid-17 shakespeare film'><div class='front' style='height: auto; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 10; transition: all 0.5s ease-out;'><img src='image/throne_of_blood.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Throne of Blood </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 6, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#film</span><span class='tag'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back' style='transform: rotateY(-180deg); height: 239px; width: 100%; backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 9; transition: all 0.5s ease-out;'><p class='detail'>Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>. Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>.</p></div></div>");

	// $grid.append( $items3 ).masonry( 'appended', $items3);
	// $grid.append( $items2 ).masonry( 'appended', $items2);
	// $grid.append( $items4 ).masonry( 'appended', $items4);



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
  	


  	
	// NOTE: WHEN NEED TO QUERY events in database of a specific month,
	// sends the following post request, and the month should be in format of the example.
	// The example queries for all events in April of 2016.

	//$.post("/home/201604", function(responseJSON){
	//	console.log("got here in 201604");
	//});

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
	

});
