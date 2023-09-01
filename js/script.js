 const apiUrl ="http://localhost/8181/api/drugs"



 function createDrug(drug){
    fetch(apiUrl, {
        method:"POST",
        
      })
 }

 function findAllDrugs(){
    fetch(apiUrl)
    .then(respons => respons.json() )
    .then(data =>{
        console.log(data.dat) 
        data.forEach(element => {
            const row =
        });                                                                                                                                     
 })                                  

 }