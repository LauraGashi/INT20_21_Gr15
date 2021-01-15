addEventListener('message',data =>{
    if(data.action =='countTo2Billion'){
        let count=0;
        for(let i=0;i<2000000000;i++){
            count++
        }
    
    postMessage({action:'countTo2Billion',status:'done'});
      }
  })
  
  
  