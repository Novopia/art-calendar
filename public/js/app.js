$(document).ready(function(){


	///
	/// Basic page layout setup

	setTimeout(function(){
	  $("#cover").remove();
	}, 2000);

	var bg_num = Math.floor(Math.random() * 2) + 1;  
	var bg_url = "linear-gradient(0deg, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('images/bg_"+ 2+".jpg')";


	$('body').css("background",bg_url);

	var src = "images/bg_"+ 2+".jpg";
	
	$('#nav_square_image').attr("src",src);


	var win_width_orig = $(window).width();
	var logo_left = (win_width_orig / 2.0 - 100) + "px";

	var win_width = win_width_orig*0.8;
	var num = Math.floor(win_width/260);
	var width = Math.min(num*260,1300) + 0;

	var margin = (win_width_orig - width)/2 + 10 + "px";
	var filter_margin = 
	width += "px"
	$('#cards').css('width',width);
	$('#month').css('margin-left',margin);

	$('#month').css('display','block');
	$('#filter').css('margin-right', margin);
	$('#filter_content').css('right', margin);
	$('#month').css('transition','0.2s ease-out');
	$('#title').css('left',logo_left);

	$('#title').click(function(){
		location.reload();
	})

	$( window ).resize(function() {
		var win_width_orig = $(window).width();

		var logo_left = (win_width_orig / 2.0 - 100) + "px";

		var win_width = win_width_orig*0.8;
		var num = Math.floor(win_width/260);
		var width = Math.min(num*260,1300) + 0;

		var margin = (win_width_orig - width)/2 + "px";

		var search_margin = (win_width_orig - width)/2 + 10 + "px";
		width += "px"
		$('#cards').css('width',width);
		$('#cards').css('margin-left',margin);

		$('#month').css('margin-left',search_margin);
		$('#filter').css('margin-right', search_margin);
		$('#filter_content').css('right', search_margin);

		$('#title').css('left',logo_left);
		//
	})



	///
	/// Masonry grid layout & flip & isotope

 	$container = $('#cards');

	$container.isotope({
	  // main isotope options
	  itemSelector: '.grid-item',
	  // set layoutMode
	  layoutMode: 'masonry',
	  // options for masonry layout mode
	  masonry: {
	    columnWidth: 260
	  }
	});

	var year = new Date().getFullYear();
	var month = new Date().getMonth()+1;
	var date = new Date().getDate();
	if (month<10){
		month = "0"+month;
	}

	if (date<10){
		date = "0"+date;
	}

	var year_mon = year + month + date;
	
    $.post('/day/'+year_mon, function(response){
		if (response == "No results for the month"){
			show_result(0);
		} else{
			render_events(response.rows);
		}
		
	})


	$(document).on("click", ".front img", function() {
		var gp = $(this).parents(".grid-item");

		if (!gp.hasClass("flip")){
			$('div').removeClass('flip');
			gp.addClass('flip');
		} 	
	});

	$(document).on("click", ".grid-item .back", function() {
		var parent = $(this).parents(".grid-item");
			if (parent.hasClass("flip")){
				parent.removeClass('flip');
			}
	});


	jQuery(window).load(function(){

		 $.each($('.grid-item'), function(){
     		var front = $(".front");

            var children = $(this).children('div');
            var front = children[0];

            var objHeight = $(this).children('div').height();

            $(this).height(objHeight);

            var back = $(".back");
            $(this).find(back).height(objHeight);

     });
	
		$container.isotope("layout");
		$("footer").css('display','block');
	});






    //////
    //////Filters & Month & Search
    //////


	var prev_click = "";
	var repeat = 0;

	$(document).on("click", ".genre", function() {
		if ($(this).text() == prev_click && repeat%2 == 0){
			repeat+=1;


			if ($(this).parents('#filter_content').length>0){
				$(this).css({'background-color':'rgba( 52, 63, 91,0.8)','color':'white'});

			} else{
				$(this).css({'color':'rgba( 52, 63, 91,0.8)'});
			}
			$container.isotope({ filter: '*' });
			$container.isotope('layout');

		} else{
			repeat=0;
			$('.grid-item .genre').css('color','rgba( 52, 63, 91,0.8)');

			var select_class = "." + $(this).text().split(' ').join('_').split('.').join('').split('#').join('');
			$container.isotope({ filter: select_class });

			$('#filter_content .genre').css({'background-color':'rgba( 52, 63, 91,0.8)','color':'white'});
			$(this).css({'background-color':'white','color':'rgba( 52, 63, 91,0.4)'});
		}

		prev_click = $(this).text();


		resize_footer();
		
	});


    var click_month = 0;
    $('#month').click(function(){

    	if (click_month%2==0){
    		$('#title').hide();

    		$('#month').css({'width': '500px','color':'rgba( 52, 63, 91,0.8)','background-color': 'rgba(240,240,240,0.8)'});
    		
    		setTimeout(function(){
    			$('.months').css('display','inline');
    		},200)

    		if ($(window).width()<975){
    			$('#filter').css('display','none');
    			$('#search').css('display','none');
    		}
    	} else{
    		
    		$('#month').css({'width': '61px','background-color': 'rgba(250,250,250,0.0)','color':'white'});
    		$('.months').css("display",'none');
    		
    		setTimeout(function(){
    			$('#title').show();
	    		$('#filter').css('display','block');
	    		$('#search').css('display','block');
    		},200);
			
    	}
    	click_month += 1;
    });

    $('.months').click(function(){

    	var year = new Date().getFullYear() + "";
    	var mon = $(this).text();
    	if (mon<10){
    		mon = "0" + mon;
    	}
    	var y_m = year+mon;

    	$.post('/month/'+y_m, function(response){
    		remove_items();
    		if (response == "No results for the month"){
    			show_result(0);
    		} else{
    			show_result(response.rows.length);
    			render_events(response.rows);
    		}
    		
    	})
    })



    $('#search').focusout(function(){
    	$('#search').val('');
    	setTimeout(function(){
    		$('#month').css('display','block');
    		$('#title').show();
    	},300)
    	
    });

    $('#search').focusin(function(){
    	if ($(window).width()<975){
    		$('#month').css('display','none');
    	}
    	$('#title').hide();
    	$('#search').keyup(function(e) {
		    if(e.which == 13) {
		    	var searchMsg = $('#search').val();
		    	var toSend = {searchMsg: searchMsg};
		    	$.post("/search", toSend, function(response){
			      	remove_items();
			      	if (response == "No results"){
		    			show_result(0);
		    		} else{
		    			show_result(response.rows.length);
		    			render_events(response.rows);
		    		}
			    });
		    }
		});

    });


    var click_filter = 0;

    $('#filter').click(function(){

    	if (click_filter%2==0){
    		$('#filter_content').addClass("animated flipInX");
    		$('#filter_content').css('display','block');
    	} else{
    		$('#filter_content').hide();
    		$('#filter_content').removeClass("animated flipInX");
    	}
    	click_filter+=1;
    	
    });


});


function render_events(rows){

	var to_render = "";

	var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
	var num_concact = ['none','1st','2nd','3rd',"4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"]
	for (var i = 0; i<rows.length;i++){
		
		var event = rows[i];
		var event_title = event.event_title.split(' ').join('');
		
		var classes = event.event_type;
		
		var start_time = event.start_time.split(":").join('');
		var end_time = event.end_time.split(":").join('');
		
		
		var start_date = event.start_date.toString();
		var start_year = start_date.substring(0,4);
		var start_month = parseInt(start_date.substring(4,6))-1;
		var start_day = parseInt(start_date.substring(6,8));

		var start_day_obj = new Date(start_year,start_month,start_day);
		
		//need		
		var start_month_string = months[start_day_obj.getMonth()];
		var start_date_string = days[start_day_obj.getDay()];
		
		
		var start_day_string = start_day;

		var start_hour = parseInt(start_time.substring(0,2));

		var start_minute = start_time.substring(2,4);



		var start_suffix = start_hour >= 12 ? " PM":" AM"; 
		
		//need
		var start_hour_parsed = ((start_hour + 11) % 12 + 1) + ":" + start_minute+ start_suffix;

		var start_day_stamp = start_date_string + ", " +num_concact[parseInt(start_day)];

		var location = event.location;
		var location_google = "http://maps.google.com/?q="+location;

		var start_string_whole = start_date_string +", " + start_month_string + " " + start_day + ", " + start_hour_parsed;


		if (event.start_date != event.end_date){

			var end_date = event.end_date.toString();
			var end_year = end_date.substring(0,4);
			var end_month = parseInt(end_date.substring(4,6))-1;
			var end_day = parseInt(end_date.substring(6,8));

			var end_day_obj = new Date(end_year,end_month,end_day);
			
			//need		
			var start_day_stamp = num_concact[parseInt(start_day)] + " - "+num_concact[parseInt(end_day)];
		}


		var url = "images/image_"+start_time+"_"+event_title+".jpg";

		var event_type_1 = event.event_type.split(" ")[0];
		var event_type_2 = event.event_type.split(" ")[1];

		var link = event.website_link;

		var event_description = event.event_description;

		var event_title = event.event_title;


		to_render += "<div class='grid-item " + event_type_1 + " " + event_type_2+"'>"
					+ "<div class='front'>"
					+ "<img src='" + url + "'>"
					+ "<p class='event-name'>";

		if (link != ""){
			if (link.substring(0,4) != "http"){
				link = "http://" + link;
			}
			event_title = "<a href='" +link+ "' target='_blank'>" + event_title +"</a>";
		}

		to_render += event_title + "</p>" 
					+ "<p class='date_location'>" + start_string_whole 
					+ "<span class='at-sign'> @ </span>"
					+ "<a href='" + location_google +"' target='_blank'>" + location+ "</a></p>"
					+ "<hr>" + "<p class='tag'>" 
					+ "<i class='fa fa-tags'></i>"
					+ "<span class='tag-span genre'>#" + event_type_1 + "</span>" + "<span class='tag-span genre'>#" + event_type_2 + "</span>"
					+ "</p>" + "<hr>"
					+ "<p class='day'>"+start_day_stamp+"</p>"
					+ "</div>"
					+ "<div class='back'>"
					+ "<p class='detail'>"
					+ event_description
					+ "</p></div></div>"			

	}

	var $items = $( to_render );
	remove_items();

	$container.append($items).isotope('appended', $items).imagesLoaded().progress( function(){ 


		$.each($('.grid-item'), function(){
     		var front = $(".front");

            var children = $(this).children('div');
            var front = children[0];

            var objHeight = $(this).children('div').height();

            $(this).height(objHeight);

            var back = $(".back");
            $(this).find(back).height(objHeight);

     	});
     	$container.isotope('layout');
    });

}



function resize_footer(){
	var white_space = $(window).height()-$("#cards").height()-123;

		if (white_space > 300){
			var m_t = white_space - 200;
			$("footer").css('margin-top',m_t);
		} else{
			$("footer").css('margin-top','100px');
		}
}


function remove_items(){

	var it = $('.grid-item').slice(1);
	$container.isotope('remove',it).isotope("layout");
	//$container.masonry();
	resize_footer();
}

function show_result(num){
	if (num == 0) {
		var msg = "<p>We have not found any event yet.</p>";
		$('#result').css({'background-color':"#7d7384"});
	} else{
		var msg = "<p>We have brought " + num + " events for you.</p>";
		$('#result').css({'background-color':"#d799b8"});
	}
	
	$('#result').html(msg);

	$('#result').css({'top':"0px"});
	$('#result').addClass("animated flipInX");

	setTimeout(function(){
		$('#result').css({'top':"-100px"});
		$('#result').removeClass("animated flipInX");
		$('#result p').empty();
	},2000);

}
