console.log("***---Asincronia---***")




const tareasAsincrona = ()=> {
    let promise = new promise (( resolve , reject)=> {

        setTimeout(()=>{
            console.log("proceso asincrono");
            resolve;
        },1300)
    })
    return promise;
}
tareasAsincrona().then (function(){
    console.log("todo ok")

})