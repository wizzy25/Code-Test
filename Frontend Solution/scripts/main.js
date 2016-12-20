$(function () {
    $.ajaxSetup({
        beforeSend: function(xhr){
            xhr.setRequestHeader('Access-Control-Allow-Origin', 'true');
        }
    });
    //VIEW COUNTRIES ON SCREEN
    $('#viewList').click(function(e){
        e.preventDefault();
        $.get("http://pastebin.com/raw/943PQQ0n").done(function(data) {
            let fullresponse = data.split('\n');
            let list = fullresponse.slice(3, -1);
            let source = fullresponse[1];
            $('.display').eq(1).attr('id', 'countries');
            $('#list').empty();
            for (let i = 0; i < list.length; i++) {
                $('<li>' + list[i] + '</li>').appendTo('#list');
            }
        });
    });

    //DOWNLOAD CSV LIST OF COUNTRIES
    $('#downloadList').click(function(e){
        e.preventDefault();
        $.get("http://pastebin.com/raw/943PQQ0n").done(function(data) {
            let a = document.createElement('a');
            a.href = 'data:attachment/csv,' +  encodeURIComponent(data);
            a.target = '_blank';
            a.download = 'Countries_List.csv';
            document.body.appendChild(a);
            a.click();
        });
    });
});