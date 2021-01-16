const worker = new Worker('worker.js')
worker.addEventListener('message',({data})=>{
    if(data.action =='countTo2Billion'){
        console.log('We re done without blocking the UI thread')
    }
})



const now =performance.now();

worker.postMessage({type:'cmd',action:'countTo2Billion'})
console.log('Time taken is ${performance.now()-now}');


alert("Something on UI thread");