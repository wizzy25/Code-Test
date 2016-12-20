$(function () {
    //VIEW COUNTRIES ON SCREEN
    $('#viewList').click(function(e){
        e.preventDefault();
        $.get("/view").done(function(data) {
            let list = data.split('\n').slice(3, -1);
            $('.display').eq(1).attr('id', 'countries');
            $('#list').empty();
            for (let i = 0; i < list.length; i++) {
                $('<li>' + list[i] + '</li>').appendTo('#list');
            }
        });
    });

    //DOWNLOAD COUNTRIES LIST AS CSV FILE
    $('#downloadList').click(function(e){
        e.preventDefault();
        window.location = '/download';
    });

});