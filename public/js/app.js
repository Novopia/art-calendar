$(document).ready(function(){


	///
	/// Basic page layout setup

	setTimeout(function(){
	  $("#cover").remove();
	}, 2000);

	var bg_num = Math.floor(Math.random() * 2) + 1;  
	var bg_url = "linear-gradient(0deg, rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('images/bg_"+ 2+".jpg')";
	//console.log(bg_url)
	//$('body').css("background-image","url('images/bg_5.png')");

	$('body').css("background",bg_url);

	var src = "images/bg_"+ 2+".jpg";
	
	$('#nav_square_image').attr("src",src);


	var win_width_orig = $(window).width();
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


	$( window ).resize(function() {
		var win_width_orig = $(window).width();
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
		//
	})


	///
	/// Masonry grid layout & flip & isotope

 	$container = $('#cards');


	$container.masonry({
		columnWidth: 260,
		itemSelector: '.grid-item',
		isAnimated: true,
		animationOptions: { duration: 400 }
	});

	var year = new Date().getYear();
	var month = new Date().getMonth();
	console.log(year + " " +month);
	var $items4 = $("<div class='grid-item grid-1 Film Vis_Art'><div class='front'><img src='images/throne_of_blood.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Throne of Blood </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 6, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span genre'>#Film</span><span class='tag-span genre'>#Vis. Art</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back'><p class='detail'>Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>. Shakespeare Film Festival presents its first screening: 'Throne of Blood,' dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's 'Macbeth.' Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a>.</p></div></div><div class='grid-item grid-2 Music Lecture'><div class='front'><img src='images/chorus.jpeg'><p class='event-name'>Opening Reception: <i>Chorus for Untrained Operator </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Fri, Mar. 4, 17:30 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Cohen Gallery'> Cohen Gallery</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#chorus</span><span class='tag-span'>#lecture</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Wed, 4th</p></div><div class='back'><p class='detail'>March 4 - March 25, 2016 Reception March 4, 5:30New work by Peter Bussigel PhD '14 and Stephan Moore PhD '15. Chorus for Untrained Operator is a collection of discarded objects. Each has been relieved of its original responsibilities, rewired, and transformed to emphasize its musical voice. The ensemble is controlled through the patchbay of a 1940s Western Electric switchboard. You are the operator- improvise, follow a score, or create a score for others to follow. </p></div></div><div class='grid-item grid-3 Performance Dance'><div class='front'><img src='images/dance.jpeg'><p class='event-name'>ADLI and ASaP Mini-Fest <i class='fa fa-link'></i></p><hr><p class='date_location'>Sat, Mar. 5, 10:00 - 19:30 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Granoff Center'> Granoff Center</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#dancing</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Thu, 5th</p></div><div class='back'><p class='detail'>featuring Repertory Etude performances by ADLI's company Dancing Legacy, dancers with Parkinson's Disease, DAPpers: Dance for our Aging Population, and students fromBrown University and Central Falls High School</p></div></div><div class='grid-item grid-4 Exhibit Vis_Art'><div class='front'><img src='images/bmp.jpeg'><p class='event-name'>BMPxPREVIEW present Expo Vol 3 <i class='fa fa-link'></i></p><hr><p class='date_location'>Thur, Mar. 10, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#video</span><span class='tag-span'>#exhibition</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Mon, 10th</p></div><div class='back'><p class='detail'>BMP and PREVIEW present the third installment of EXPO--a night of curated student media art.Featured Artists:Andy LiGrant StrudwickCagil HarmandarTeodora ShavelaPom BunsermvichaAlif IbrahimHenry ChaissonFelege GebruMarley KirtonAdam Hersko-Ronatas Isue ShinMaria Paz AlmeneraPaulina LorenzOlivia WatsonKent SmithOlalia GlossNate BurkeFelipe De PoiMarcus SudacJohn FilmanowiczMarch 107pm - 8:30pm, doors at 6.30pmGranoff Martinos Auditorium</p></div></div><div class='grid-item grid-5 Dance Performance'><div class='front'><img src='images/first_four.jpeg'><p class='event-name'>THE FIRST FOUR Concert and Symposium <i class='fa fa-link'></i></p><hr><p class='date_location'>Fri, Mar. 11 & 12, 10:00 - 21:30 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Granoff Center'> Studio 1</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#dancing</span><span class='tag-span'>#concert</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Wed, 11th</p></div><div class='back'><p class='detail'>Visit Brown Paper Tickets to purchase tickets to one of the three performances and to register for the FREE public conversation and reception.Doppelgänger Dance Collective presents:THE FIRST FOUR Concert and SymposiumMarch 11 & 12, 2016 at The Granoff Center, Brown University CONCERTS:March 11 at 8:00pm,March 12 at 2:00pm & 8:00pmThe Saturday 2pm matinee will be followed by an artists talk backFREE SYMPOSIUM EVENTS (details below)MASTER CLASSES & PUBLIC CONVERSATION & RECEPTION03/11: Heidi Henderson, 10:00am - 12:00pm03/11: Sydney Skybetter, 12:30pm - 2:30pm03/11: Sounding Dance: Conversations on Creative Exchange, moderated by Noémie Solomon, 5:00pm -6:45pm 03/12: Paul Singh, 10:00am - 12:00pm03/12: B.J. Sullivan, 4:30pm - 6:30pmTHE FIRST FOUR Concert and Symposium, Doppelgänger Dance Collective's (DDC) first, full-length concert featuring four new dance works will be presented and performed by Shura Baryshnikov and Danielle Davidson, with a live string ensemble: Hannah Ross (viola), Chase Spruill (violin), Adrienne Taylor (cello) and Ethan Wood (violin)Surrounding the presentation of this inaugural program, DDC is working with Mellon Postdoctoral Fellow in Dance Studies, Noémie Solomon to present a rich dance and humanities symposium focused on choreography, creative process, collaborative partnerships, and the performance of live music and dance.The symposium programming, which will accompany the performances, will also be held in Studio 1 in the Granoff Center. The symposium will include FREE master classes taught by the four commissioned choreographers: Heidi Henderson, Sydney Skybetter, Paul Singh and B.J. Sullivan as well as a moderated public conversation.As is reflected in DDC's mission, it is necessary that the symposium provide community access to the participating choreographers, dancers and musicians, as well as offering community benefit through discussion of collaborative partnerships. These partnerships should be made full and fruitful for the wider community.</p></div></div><div class='grid-item grid-6 Lecture Lit_Art'><div class='front'><img src='images/alfredo.jpeg'><p class='event-name'>SCAC Lecture Series presents Alfredo Jaar <i class='fa fa-link'></i></p><hr><p class='date_location'>Fri, Mar. 11, 17:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Granoff Center'> Granoff Center</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#lecture</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Wed, 11th</p></div><div class='back'><p class='detail'>the STUDENT CREATIVE ARTS COUNCIL is excited to present the SPRING 2016 installment of our LECTURE SERIES: ALFREDO JAAR. Alfredo Jaar is a Chilean-born artist, architect, and filmmaker working in installation, photography, filmmaking, and community-based projects that explore global relationships in relation to the over-saturation of media images and the limitations of art in representing humanitarian crises. His work has been shown extensively around the world in multiple Venice Biennales and Documentas, as well as individual exhibitions at the New Museum in New York and The Museum of Contemporary Art in Chicago. LECTURE FOLLOWED BY Q&A AND RECEPTION FREE FRIDAY, MARCH 11, 2016 — 5PM MARTINOS AUDITORIUM, GRANOFF CENTER FOR THE CREATIVE ARTS BROWN UNIVERSITY</p></div></div><div class='grid-item grid-7 Film Lit_Art'><div class='front'><img src='images/othello.jpeg'><p class='event-name'>Shakespeare Film Festival: <i>Othello </i> <i class='fa fa-link'></i></p><hr><p class='date_location'>Sun, Mar. 13, 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=154 Angell St'> 154 Angell St</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#film</span><span class='tag-span'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 13th</p></div><div class='back'><p class='detail'>The Shakespeare Film Festival presents 'Othello,' dir. Janet Suzman (1987), on Sunday, March 13, at 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. Starring noted South African actor John Kani, this film re-focuses the play's racial tragedy. Free and open to the public. For details see <a href='https://library.brown.edu/create/firstfolio'>link</a></p></div></div><div class='grid-item grid-8 Exhibit Vis_Art'><div class='front'><img src='images/stamp.jpeg'><p class='event-name'>Thousands of Little Colored Windows: Brown University Stamp Collections <i class='fa fa-link'></i></p><hr><p class='date_location'>Feb. 10 - Apr. 15 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=John Hay Library'> John Hay Library</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#exhibition</span><span class='tag-span'>#stamp</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>1st - 31th</p></div><div class='back'><p class='detail'>Numerous postage stamps of historical significance are on display at the John Hay Library as part of an exhibition titled 'Thousands of Little Colored Windows: Brown University's Stamp Collections.' Curated by students in the Museum Collecting and Collections class (fall, 2015), the stamps from the Library's extensive collections reveal how postage stamps have relevance to social history, political and cultural studies. The exhibition will also feature an interactive digital gallery of the stamps from the George S. Champlin Memorial Stamp Collection. The exhibition will run through May 13 in the Hay Library, the College Green. Exhibition hours vary depending on the academic calendar. For more information, call 401-863-2165.</p></div></div><div class='grid-item grid-9 Exhibit Vis_Art'><div class='front'><img src='images/watson.jpeg'><p class='event-name'>Art at Watson Presents Rio: A Visual Dialogue over One Hundred and Fifty Years <i class='fa fa-link'></i></p><hr><p class='date_location'>Mar. 2 - Mar. 31 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Martinos Auditorium'> Martinos Auditorium</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#exhibition</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>2nd - 31th</p></div><div class='back'><p class='detail'>Wednesday, March 2 -Tuesday, May 31, 2016Weekdays, 8:30 a.m.-5 p.m.Watson Institute, 2nd FloorPhotographs of Rio de Janeiro by Marc Ferrez and Robert Polidori.<a href='http://watson.brown.edu/events/series/brazil-initiative'>Brazil Initiative</a><a href='http://watson.brown.edu/events/series/art-watson'>Art at Watson</a>Co-sponsored by Art at Watson, the Brazil Initiative, the Creative Arts Council, and Instituto Moreira Salles.</p></div></div><div class='grid-item grid-10 Exhibit Vis_Art'><div class='front'><img src='images/yutong.jpeg'><p class='event-name'>Yutong Liao: Senior Honors Exhibition <i class='fa fa-link'></i></p><hr><p class='date_location'>Mar. 4 - Mar. 10 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Brown List Art Center'> List Art Building Main Lobby</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#exhibition</span><span class='tag-span'>#visualarts</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>4th - 10th</p></div><div class='back'><p class='detail'>Student artist Yutong Liao's profile <a href='https://www.behance.net/yt1029'>link</a></p></div></div><div class='grid-item grid-11 Exhibit Vis_Art'><div class='front'><img src='images/chile.jpeg'><p class='event-name'>Banners and bombs. Photographic exhibit <i class='fa fa-link'></i></p><hr><p class='date_location'>Mar. 5 - Mar. 18 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Granoff Center'> Granoff Center</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#exhibition</span><span class='tag-span'>#photo</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>5th - 18th</p></div><div class='back'><p class='detail'>'Banners and bombs' is a photographic exhibit that presents the work of three young photojournalists who have been documenting the Chilean student movement since 2011. This movement provides another perspective on the civil rights movement as a global phenomenon. Come to the Granoff Center for the Creative Arts and check it out from March 5th - March 18th.Sponsored by Creative Arts Council and John Nicholas Brown Center for Public Humanities and Cultural Heritage</p></div></div><div class='grid-item grid-12 Lit_Art Lecture'><div class='front'><img src='images/msn.jpeg'><p class='event-name'>Why and How: Teaching Shakespeare's <i>A Midsummer Night's Dream </i><i class='fa fa-link'></i></p><hr><p class='date_location'>Mar. 6, 12:00 - 14:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Lyman Hall'> Lyman Hall, Room 002</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#workshop</span><span class='tag-span'>#shakespeare</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back'><p class='detail'>Brown Theatre presents Why and How: Teaching Shakespeare's A Midsummer Night's Dream. In this workshop we ask: why teach this text? What are the characters' intentions, the director's intention, or the performers' intentions? The workshop is on Sunday, March 6, at 12pm in Lyman Hall Room 002. The workshop is followed by the 2pm matinee of Sock and Buskin's production of A Midsummer Night's Dream. Free to students, staff, and faculty. Space is limited. Email nancy_safian@brown.edu to register.</p></div></div><div class='grid-item grid-13 Music Performance'><div class='front'><img src='images/choir.jpeg'><p class='event-name'>Harmonizing Grace Gospel Choir Rehearsal <i class='fa fa-link'></i></p><hr><p class='date_location'>Mar. 6 17:00 - 19:00 <span class='at-sign'>@</span><a href='http://maps.google.com/?q=Granoff Center'> Granoff Center</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag-span'>#singing</span><span class='tag-span'>#rehearsal</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back'><p class='detail'>Sun, December 21, 2014 6:00 PM - 7:30 PM Manning Chapel. If you enjoy singing, the Office of the Chaplains and Religious Life (OCRL) invites you to come out and 'experience' Harmonizing Grace, Brown University's only Gospel Choir. Rehearsals are on Sundays from 6-7:30 in Manning Chapel. Manning Chapel is located on the second floor of Manning Hall, which can be entered from the Quiet Green. All are welcome. For more information, please contact Rev. Kirstin Boswell-Ford at kirstin_boswell-ford@brown.edu</p></div></div>");	
	//var $items4 = $("<div class='grid-item Theatre undefined'><div class='front'><img src='images/image_1700_UnionSquare.jpg'><p class='event-name'>Union Square</p><p class='date_location'>Fri, May 6, 5:00PM<span class='at-sign'> @ </span><a href='http://maps.google.com/?q=315 Thayer St.' target='_blank'>315 Thayer St.</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#Theatre</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back'><p class='detail'>hello there, this is the union square. Union Square.</p></div></div><div class='grid-item Theatre undefined'><div class='front'><img src='images/image_0100_helloworld.jpg'><p class='event-name'>hello world</p><p class='date_location'>Fri, May 6, 1:00AM<span class='at-sign'> @ </span><a href='http://maps.google.com/?q=315 Thayer St.' target='_blank'>315 Thayer St.</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#Theatre</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Fri, 6th</p></div><div class='back'><p class='detail'>UNION SQUARE</p></div></div><div class='grid-item Dance undefined'><div class='front'><img src='images/image_0100_SEARCHTEST3.jpg'><p class='event-name'>SEARCH TEST3</p><p class='date_location'>Tue, May 17, 1:00AM<span class='at-sign'> @ </span><a href='http://maps.google.com/?q=315 Thayer St.' target='_blank'>315 Thayer St.</a></p><hr><p class='tag'><i class='fa fa-tags'></i><span class='tag'>#Dance</span></p><hr><i class='fa fa-calendar-plus-o'></i><p class='day'>Tue, 17th</p></div><div class='back'><p class='detail'>BLAH LAH</p></div></div>");
	$container.append( $items4 ).masonry( 'appended', $items4);

	console.log( Masonry.data('#cards'));

	if($("html").hasClass("csstransforms3d")){
		
		$('.grid-item img').click(function(){
			var gp = $(this).parents(".grid-item");
			console.log(gp);

			if (!gp.hasClass("flip")){
				$('div').removeClass('flip');
				gp.addClass('flip');
			} 	
		});

		$('.grid-item .back').click(function(){
			var parent = $(this).parents(".grid-item");
			if (parent.hasClass("flip")){
				parent.removeClass('flip');
			}
		});

	} else{
		$('.grid-item').click(function(){
			$(this).find(".front").animate({top: -190}, 'fast');
		},function(){
			$(this).find(".front").animate({top: 0}, 'fast');
		});
 	}	


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
	
		$container.masonry();
		$("footer").css('display','block');
	});

   
	$container.isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'masonry',
	  masonry: {
        columnWidth: 260
    	}
	});


    //////
    //////Filters & Month & Search
    //////


	var prev_click = "";
	var repeat = 0;

	$('.genre').click(function(){

		if ($(this).text() == prev_click && repeat%2 == 0){
			repeat+=1;


			if ($(this).parents('#filter_content').length>0){
				$(this).css({'background-color':'rgba( 52, 63, 91,0.8)','color':'white'});

			} else{
				$(this).css({'color':'rgba( 52, 63, 91,0.8)'});
			}
			$container.isotope({ filter: '*' });
			$container.masonry('layout');

		} else{
			repeat=0;
			$('.grid-item .genre').css('color','rgba( 52, 63, 91,0.8)');

			var select_class = "." + $(this).text().split(' ').join('_').split('.').join('').split('#').join('');
			console.log(select_class);
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
    		$('#filter').css('display','block');
    		$('#search').css('display','block');
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

    	console.log(y_m);

    	$.post('/month/'+y_m, function(response){
    		console.log(response);
    		remove_items();
    		if (response == "No results for the month"){
    			show_result(0);
    		} else{
    			show_result(response.rows.length);

    		}
    		
    	})
    })



    $('#search').focusout(function(){
    	$('#search').val('');
    	$('#month').css('display','block');
    });

    $('#search').focusin(function(){
    	if ($(window).width()<975){
    		$('#month').css('display','none');
    	}
    	$('#search').keyup(function(e) {
		    if(e.which == 13) {
		    	var searchMsg = $('#search').val();
		    	console.log(searchMsg);
		    	var toSend = {searchMsg: searchMsg};
		    	$.post("/search", toSend, function(response){
			      	console.log(response);
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
		console.log(rows[i]);
		
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

		var start_day_stamp = start_date_string + ", " +num_concact[parseInt(start_day)]

		var location = event.location;
		var location_google = "http://maps.google.com/?q="+location;

		var start_string_whole = start_date_string +", " + start_month_string + " " + start_day + ", " + start_hour_parsed;

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
			event_title = "<a href='" +link+ "'>" + event_title +"</a>";
		}

		to_render += event_title + "</p>" 
					+ "<p class='date_location'>" + start_string_whole 
					+ "<span class='at-sign'> @ </span>"
					+ "<a href='" + location_google +"' target='_blank'>" + location+ "</a></p>"



					+ "<hr>" + "<p class='tag'>" 
					+ "<i class='fa fa-tags'></i>"
					+ "<span class='tag'>#" + event_type_1 + "</span>"
					+ "</p>" + "<hr>" + "<i class='fa fa-calendar-plus-o'></i>"
					+ "<p class='day'>"+start_day_stamp+"</p>"
					+ "</div>"
					+ "<div class='back'>"
					+ "<p class='detail'>"
					+ event_description
					+ "</p></div></div>"			

	}

	var $items = $( to_render );
	remove_items();
	//$container.isotope('appended', $items).isotope('layout');
	console.log( Masonry.data('#cards'));
	//$container.isotope( $items ).masonry("layout");

	// $container.append($items).imagesLoaded().done( function(){ 


	// 	$.each($('.grid-item'), function(){
 //     		var front = $(".front");

 //            var children = $(this).children('div');
 //            var front = children[0];

 //            var objHeight = $(this).children('div').height();

 //            $(this).height(objHeight);

 //            var back = $(".back");
 //            $(this).find(back).height(objHeight);

 //     	});
		
	// 	$container.isotope( 'appended', $items ).isotope("layout");
	// 	//$container.masonry('appended', $items);

	// 	$container.masonry('layout');
		
	// 	console.log( Masonry.data('#cards'));
	// 	console.log("height");
	// 	console.log($('#cards').height())
	// 	//isFetchingPics = false; 
	// }); 
	
	// jQuery(window).load(function(){

		// $.each($('.grid-item'), function(){
  //    		var front = $(".front");

  //           var children = $(this).children('div');
  //           var front = children[0];

  //           var objHeight = $(this).children('div').height();

  //           $(this).height(objHeight);

  //           var back = $(".back");
  //           $(this).find(back).height(objHeight);
  //           console.log(objHeight)

  //    	});
	
	// });

		

	

	//setTimeout(function(){$container.masonry()},2000);
}

// <div class="grid">
   		
// 	    <div class="grid-item grid-1 shakespeare film">
// 	    	<div class="front">
// 		    	<img src="image/throne_of_blood.jpeg">
// 		    	<p class="event-name">Shakespeare Film Festival: <i>Throne of Blood </i><i class="fa fa-link"></i></p>
// 		    	<hr>
// 		    	<p class="date_location">Sun, Mar. 6, 19:00 <span class="at-sign">@</span>
//				<a href="http://maps.google.com/?q=Martinos Auditorium"> Martinos Auditorium</a></p>
// 		    	<hr>
// 		    	<p class="tag">
// 		    	<i class="fa fa-tags"></i>
// 		    	<span class="tag">#film</span>
// 		    	<span class="tag">#shakespeare</span>
// 		    	</p>
// 		    	<hr>
// 		    	<i class="fa fa-calendar-plus-o"></i>
// 	    		<p class="day">Fri, 6th</p>
// 	    	</div>
// 	    	<div class="back">
// 	    		<p class="detail">Shakespeare Film Festival presents its first screening: "Throne of Blood," dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's "Macbeth." Free and open to the public. For details see <a href="https://library.brown.edu/create/firstfolio">link</a>. Shakespeare Film Festival presents its first screening: "Throne of Blood," dir. Akira Kurosawa (1957), on Sunday, March 6, 7:00 pm in Martinos Auditorium, Granoff Center, 154 Angell Street. The renowned Japanese director's version of Shakespeare's "Macbeth." Free and open to the public. For details see <a href="https://library.brown.edu/create/firstfolio">link</a>.</p>
// 	    	</div>
// 	    </div>


function resize_footer(){
	var white_space = $(window).height()-$("#cards").height()-123;

	console.log("height:")
	console.log($("#cards").height())

		console.log($(window).height()-$("#cards").height()-123);

		if (white_space > 300){
			console.log("danger");
			var m_t = white_space - 200;
			$("footer").css('margin-top',m_t);
		} else{
			$("footer").css('margin-top','100px');
		}
}


function remove_items(){

	var it = $('.grid-item').slice(1);
	$container.masonry('remove',it);
	$container.masonry();
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
