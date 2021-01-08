$(document).ready(function() {
    var timer = $('#timer');
    setInterval(() => {
        var date = new Date();
        timer.html(date.toString());
    }, 100);
});