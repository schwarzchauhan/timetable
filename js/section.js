$(function() {

    const sub = $('.subject');
    setInterval(function() {
            var i = Math.floor(Math.random() * sub.length);
            console.log(i + " " + sub[i]);

            if (sub[i].style.transform == "rotateZ(-180deg)") {
                $(sub[i]).addClass('rotatefull');
            } else {
                $(sub[i]).addClass('rotatehalf');
            }

            setTimeout(() => {
                if ($(sub[i]).hasClass('rotatehalf') == true) {
                    $(sub[i]).removeClass('rotatehalf');
                    sub[i].style.transform = "rotateZ(-180deg)";
                } else {
                    $(sub[i]).removeClass('rotatefull');
                    sub[i].style.transform = "rotateZ(0deg)";
                }

            }, 2000);

        },
        2000);


    $('a.sinnbold').on("mouseover", function() {
        var x = this;
        console.log(x);
        $(x).addClass('slideRight');
    });
    $('a.sinnbold').on("mouseout", function() {
        var x = this;
        console.log(x);
        $(x).removeClass('slideRight');
    });
});