// Lexical scope means a function can access variables defined in its outer scope.


function outerFunction() {
    let outerVariable = "I am outer";

    function innerFunction() {
        console.log(outerVariable);  // Can access outerVariable
    }

    innerFunction();
}

outerFunction();



function abc(){
    var a = 5;

    function xyz(){
        console.log(a);
    }
    xyz();
}
// var a = 5;  // you can access it in Global scope also
abc();


// This code will not work

function  abc(){
    console.log(a);

    function xyz(){
        var a = 5;
    }
    xyz();

}
abc();