$(document).ready(function () {
    setInterval(function () {
        $.ajax({
            type : 'POST',
            url : 'your getData.php location,
            success : function(data) {
                var output = JSON.parse(data);
                if (output.result == 1) {
                    $('#server').html(output.server);
                    $('#cpu').html(output.cpu);
                    $('#ram').html(output.ram);
                    $('#temp').html(output.temp);
                }
                else if (output.result == 0) {
                    $('#server').html("ERROR!");
                    $('#cpu').html("ERROR!");
                    $('#ram').html("ERROR!");
                    $('#temp').html("ERROR!");
                }
            }
        })
    }, 1000);
});
