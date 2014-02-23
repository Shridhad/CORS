$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'http://locale.resource.com:3001/text',
        dataType: 'text',
        success: function(data, status, xhr) {
            console.log("Success ", data);
        },
        error: function(xhr, status, error){
            console.log("error ", xhr);
        }
    })

});