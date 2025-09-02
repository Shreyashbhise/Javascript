// function fetchData(callback) {
//     setTimeout(()=> {
//         console.log("Data fetched");
//         callback();
//     },1000);
// }

// function processData() {
//     console.log("Processing data");
// }

// fetchData(processData);

// function Rutuja(callback){
//     setTimeout(()=> {
//         console.log("Data fetched");
//         callback();
//     },1000);
// }
// function Banait(){
//     console.log("Processing data")
// }

// Rutuja(Banait);

function Rutuja(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },1000);
}

function Banait(){
    console.log("processing Data");
}
Rutuja(Banait);

/////////////////////////////////////////////////////////////////////////////////////

 function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    console.log("Data fetched!");
    callback(); // call callback after data is fetched
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
