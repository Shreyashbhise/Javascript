function outerfunction() {
    let outerVarible = "I'm from outer scope";

    function innerFunction() {
        console.log(outerVarible)
    }
    return innerFunction;
}

const closureExample = outerfunction();
closureExample();



function func1() {
    let a = 5;

    function func2() {
        console.log(a);
    }
    a = 8;
    return func2;
}

const abc = func1();
abc();
