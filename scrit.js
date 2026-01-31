$(document).ready(function(){
    
    $('.compteur').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    var cartes = $('.genie, .reseau, .fin');
    var index = 0;

    cartes.hide();
    cartes.eq(0).fadeIn(500);

    setInterval(function() {
        cartes.eq(index).fadeOut(500, function() {
            index++;
            if (index >= cartes.length) {
                index = 0;
            }
            cartes.eq(index).fadeIn(500);
        });
    }, 3000);

});