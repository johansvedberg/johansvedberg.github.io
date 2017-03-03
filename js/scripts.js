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
        }, 10000);
    }

    function setUser() {

        if (localStorage.getItem("name") == null) {
            localStorage.setItem("name", "Johan");

        }

        if (localStorage.getItem("bookings") == null) {
            localStorage.setItem("bookings", "0");

        }

        document.getElementById('name').innerHTML = localStorage.getItem("name");

        if (parseInt(localStorage.getItem(bookings)) < 0) {
            document.getElementById('bookings').innerHTML = 0;
        } else {
            document.getElementById('bookings').innerHTML = localStorage.getItem("bookings");
        }
    }


    function book() {
        localStorage.setItem("bookings", parseInt(localStorage.getItem("bookings")) + 1);

    }

    $("#bookButton").click(function(){
        book();
        Materialize.toast('Rum bokat!', 2000);
        navigator.vibrate(500);
       })



    startTime();
    setUser();
});
