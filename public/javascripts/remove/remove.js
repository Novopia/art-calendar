/**
 * Created by Ting on 5/5/16.
 */
window.addEventListener('load', function(){
    var eventBtn = document.getElementById('getEvent');
    console.log("got here at all");
    eventBtn.addEventListener('submit', getEvent, false);
    var removeForm = document.getElementById('removeEvent');
    removeForm.addEventListener('submit', removeEvent, false);
}, false);
function removeEvent(e) {
    console.log("got into deleteEvent");
    e.preventDefault();
    var id = {id: document.getElementById('idToRemove').value};
    $.post("/remove/delete", id, function(responseJSON){
        var message = responseJSON;
        var p = document.getElementById('deleteMsgStatus');
        p.innerHTML = message;
        // refresh event list
        $.post("/remove/eventList",function(responseJSON){
            // clear message in input bar
            var data = responseJSON.rows;
            //var data = JSON.parse(responseJSON);
            var ul = document.getElementById('eventList');
            while (ul.childNodes.length != 0) {
                ul.removeChild(ul.childNodes[ul.childNodes.length-1]);
            }
            console.log("data length is " + data.length);
            var li = document.createElement('li');
            li.innerHTML = "<div>id | eventtitle | start date | start time | end date | end time | location</div>";
            li.setAttribute("id","nameBar");
            ul.appendChild(li);
            for (i = 0; i < data.length; i++) {
                var li = document.createElement('li');
                var curr = data[i];
                li.innerHTML = "<div>"+ curr.id + " | " + curr.event_title + " | " + curr.start_date + " | " +
                    curr.start_time + " | "  + curr.end_date + " | "  + curr.end_time + " | "  + curr.location + "</div>";
                li.setAttribute("id",curr.id);
                ul.appendChild(li);
                //ul.insertBefore(li,ul.childNodes[0]);
            }
            console.log("got back from eventList");
        });
    });
}
function getEvent(e) {
    console.log("got into getEvent");
    e.preventDefault();

    $.post("/remove/eventList",function(responseJSON){
        // clear message in input bar
        var data = responseJSON.rows;
        //var data = JSON.parse(responseJSON);
        var ul = document.getElementById('eventList');
        while (ul.childNodes.length != 0) {
            ul.removeChild(ul.childNodes[ul.childNodes.length-1]);
        }
        console.log("data length is " + data.length);
        var li = document.createElement('li');
        li.innerHTML = "<div>id | eventtitle | start date | start time | end date | end time | location</div>";
        li.setAttribute("id","nameBar");
        ul.appendChild(li);
        for (i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            var curr = data[i];
            li.innerHTML = "<div>"+ curr.id + " | " + curr.event_title + " | " + curr.start_date + " | " +
                curr.start_time + " | "  + curr.end_date + " | "  + curr.end_time + " | "  + curr.location + "</div>";
            li.setAttribute("id",curr.id);
            ul.appendChild(li);
            //ul.insertBefore(li,ul.childNodes[0]);
        }
        console.log("got back from eventList");
    });
}
//var searchMsg = "Union Square";
//var toSend = {searchMsg: searchMsg};
//$.post("/search", toSend, function(){
//   //console.log("got here in search Union Square");
//});