// async function fetchData() {
//     try {
//         let result = await new Promise((resolve)=> {
//             setTimeout(()=> resolve("Data fetched"),1000);
//         });
//         console.log(result);
//     } catch (error) { 
//         console.log(error);
        
//     }
// }

// fetchData();

async function fetchData() { 
     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
     const result = await res.json();
     console.log(result);
    
}
fetchData();
