/**
 * Created by Ting on 4/18/16.
 */
window.addEventListener('load', function(){
    var loginForm = document.getElementById('loginform');
    console.log("got here at all");
    loginForm.addEventListener('submit', login, false);
}, false);

function login(e) {
    console.log("got into login");
    e.preventDefault();
    var password = md5(document.getElementById('password').value);
    var messages = {userName: document.getElementById('userName').value,
        password: password};
    $.post("/login/validityCheck", messages, function(responseJSON){
        // clear message in input bar
        console.log("got back from validity check");
    });
}