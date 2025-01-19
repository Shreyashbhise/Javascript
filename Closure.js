function x() {
    for(var i = 1; i<=5; i++) {
       function close(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
       }
       close(i);
    }
    console.log("Hello Rutuja")
}
x();


function y () {
    for (var i = 1; i<=5; i++) {
        function me(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        me(i);
    }
    console.log("Hello Javascript")
}
y();


// Intrview question

function you() {
    for (var i = 1; i <=5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
you();