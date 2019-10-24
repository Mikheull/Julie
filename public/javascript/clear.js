$(document).on('click', '#clear_filter', function(event) {
    event.preventDefault();

    $( "[name='date']" ).val('');
    $( "[name='arrondissement']" ).val('');
    $( "[name='access_type']" ).val('');
    $( "[name='price_type']" ).val('');
    $( "[name='acces_pmr']" ).val('');
    $( "[name='access_malvoyant']" ).val('');
    $( "[name='acess_malentendant']" ).val('');

});