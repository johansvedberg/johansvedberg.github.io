$(document).ready(function() {

    $('select').material_select();

    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes());
        document.getElementById('time').innerHTML = h + ":" + m;
        t = setTimeout(function() {
            startTime()
        }, 500);
    }
    startTime();



    var cityData = [{city:"Redmond", population:57530},
        {city:"Atlanta",population:447841},
        {city:"San Fracisco", population:837442}];

    alasql('CREATE INDEXEDDB DATABASE IF NOT EXISTS geo;\
        ATTACH INDEXEDDB DATABASE geo; \
        USE geo; \
        DROP TABLE IF EXISTS cities; \
        CREATE TABLE cities; \
        SELECT * INTO cities FROM ?', [cityData], function(){
    });

});
