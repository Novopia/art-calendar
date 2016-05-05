window.addEventListener('load', function(){
    // time out after 5 minutes=300 seconds=300000
    setTimeout(function(){
        $.post("upload/logout", function(responseJSON){
            console.log("get back");
        });
    }, 300000);
}, false);

$(function() {
    $( "#start-date-picker" ).datepicker();
    $( "#end-date-picker" ).datepicker();
    $('#start-time-picker').timepicker({'timeFormat': 'H:i'});
    $('#end-time-picker').timepicker({'timeFormat': 'H:i'});
});