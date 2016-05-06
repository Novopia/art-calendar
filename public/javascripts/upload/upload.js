window.addEventListener('load', function(){
    $.post("/upload/checkLogin", function(responseJSON) {
        console.log("got back from check login");
        if (responseJSON == "false") {
            window.location.href = "/login/upload";
        }
    });
    // time out after 5 minutes=300 seconds=300000
    console.log("in side upload. finished load!");

    setTimeout(function(){
        $.post("/upload/logout", function(responseJSON){
            console.log("get back");
            window.location.href = "/login/upload"
        });
    }, 300000);
}, false);


$(function() {
    $( "#start-date-picker" ).datepicker();
    $( "#end-date-picker" ).datepicker();
    $('#start-time-picker').timepicker({'timeFormat': 'H:i'});
    $('#end-time-picker').timepicker({'timeFormat': 'H:i'});
});