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

    localStorage.setItem("name", "Johan");
    localStorage.setItem("bookings", "0");


    function setUser() {

        document.getElementById('name').innerHTML = localStorage.getItem("name");

        if (parseInt(localStorage.getItem(bookings)) < 0) {
            document.getElementById('bookings').innerHTML = 0;
        } else {
            document.getElementById('bookings').innerHTML = localStorage.getItem("bookings");
        }



    }


    function book() {
        var bookings = parseInt(localStorage.getItem("bookings")) + 1;
        localStorage.setItem("bookings", bookings)
        document.getElementById('bookings').innerHTML = bookings;
    }



    startTime();
    book();
    setUser();
});
