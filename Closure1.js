function outerfunction() {
    let outerVarible = "I'm from outer scope";

    function innerFunction() {
        console.log(outerVarible)
    }
    return innerFunction;
}

const closureExample = outerfunction();
closureExample();