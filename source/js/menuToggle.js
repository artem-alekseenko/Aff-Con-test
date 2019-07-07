$(function () {

    $('.menuToggle').on('click', function () {
        $('.sidebar').slideToggle(300, function () {
            $(this).css({height: '100%'}); 

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');                              
            }
        });
    })
});