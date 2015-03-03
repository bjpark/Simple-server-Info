$(document).ready(function () {
    setInterval(function () {
        $.ajax({
            type : 'POST',
            url : 'http://urid.kr/getData.php',
            success : function(data) {
                var output = JSON.parse(data);
                if (output.result == 1) {
                    $('#server').html(output.server);
                    $('#cpu').html(output.cpu);
                    $('#ram').html(output.ram);
                    $('#temp').html(output.temp);
                }
                else if (output.result == 0) {
                    $('#server').html("에러!");
                    $('#cpu').html("에러!");
                    $('#ram').html("에러!");
                    $('#temp').html("에러!");
                }
            }
        })
    }, 1000);
});
