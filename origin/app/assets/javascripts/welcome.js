$(document).ready(function(){

    $("#btn").on('click', function(){
        var error = function(xhr, status, error){
                console.log("Error " + error);
                $(".container .response").html("<p>" + status + ": " + error + "</p>");
            },
            success= function(data, status, xhr){
                console.log("success ", data);
                $(".container .response").html("<p>" + status + ": " + data + "</p>");
            };
        $.ajax({
            type: 'GET',
            cache:false,
            url: 'http://locale.resource.com:3001/text',
            dataType: 'text',
            success: success,
            error: error
        })
    })

});