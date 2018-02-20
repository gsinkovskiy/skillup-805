$(document).ready(function () {
    $('.btn-slide').click(function () {
//       $('#panel').slideToggle('fast');
//       $('.btn-slide').toggleClass('active');
       $('#panel').animate({height: '300px', width: '100%'}, 3000);
    });


    $('.delete').click(function () {
        $(this).parent().animate({height: '20px'}, 3000);
        $(this).parent().animate({width: '20px'}, 300);
    });

    $('.js-ajax').click(function (event) {
        event.preventDefault();
        $('#content').load($(this).attr('href'));

/*        $.get($(this).attr('href'), function(data) {
            $('#content').html(data);
        });*/
    });

    function sum() {
        ////
    }

    $('#button').click(sum);
});
