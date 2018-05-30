var burger = $('#navbar-burger');
var nav = $('#' + burger.data('target'));

$(burger).click(function () {
    $(burger).toggleClass('is-active');
    $(nav).toggleClass('is-active');
});