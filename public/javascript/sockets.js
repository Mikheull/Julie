var socket = io.connect();

// Clic filtre
$(document).on('click', '#confirm_filter', function(event) {
    event.preventDefault();
    let filters_type = Array();
    let filters_val = Array();

    let query = $( "[name='query']" ).val();

	let date_start = $( "[name='date']" ).val();
	let address_zipcode = $( "[name='arrondissement']" ).val();
	let access_type = $( "[name='access_type']" ).val();

	if(typeof date_start !== 'undefined' && date_start){ 
        filters_type.push('date_start');
        filters_val.push(date_start);
    }
	if(typeof address_zipcode !== 'undefined' && address_zipcode){ 
        filters_type.push('address_zipcode');
        filters_val.push(address_zipcode);
    }
	if(typeof access_type !== 'undefined' && access_type){ 
        filters_type.push('access_type');
        filters_val.push(access_type);
    }
    if ($( "[name='acces_pmr']" ).is(":checked")){
        filters_type.push('pmr');
        filters_val.push(1);
    }
    if ($( "[name='access_malvoyant']" ).is(":checked")){
        filters_type.push('blind');
        filters_val.push(1);
    }
    if ($( "[name='acess_malentendant']" ).is(":checked")){
        filters_type.push('deaf');
        filters_val.push(1);
    }

    $( '#result' ).empty();
    socket.emit('request_filter', query, filters_type, filters_val);
});



// Reception résultat filtre
socket.on('response_filter', function(query, result) {
    console.log(query);
    console.log(result);
    $( '#result' ).html( JSON.stringify(result) );
});