// function Step1() { 
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("Step1 is completed");
//             resolve("Data from step1")
//         },1000);
//     });
// }

// function step2() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log("Step2 is completed");
//             resolve("Data from step2");
//         },1000)
//     });
// }

// function Step3() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log("Step3 is completed");
//             resolve("Data from Step3")
//         },1000)
//     });
// }

// Step1()
//     .then((res) => {
//         console.log("receive:",res);
//         return Step2(res);
//     })
//     .then((res)=> {
//         console.log("recive:",res);
//         return Step3(res);
//     })
//     .then((res)=> {
//         console.log('Received:',res);
//         console.log("All steps complete")
//     })
//     .catch((error)=> {
//         console.log('Error :', error);
//     });


function Step1(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Step1 is completed");
            resolve("Data from step1")
        },1000)
    })
}

function Step2(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Step2 is completed");
            resolve("Data from step2")
        },1000)
    })
}

function Step3(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Step3 is completed");
            resolve("Data from step3")
        },1000)
    })
}

Step1()
     .then((res)=> {
        console.log("Received", res);
        return Step2()
     })
     .then((res)=> {
        console.log("Received",res);
        return Step3()
     })
     .then((res)=> {
                console.log('Received:',res);
                 console.log("All steps complete")
             })
     .catch((error)=> {
        console.log("Error",error)
     })
