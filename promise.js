//make promise.js file
const checklogin=new Promise((result,reject)=>{//promise created
    let loggedIn=true;
    if(loggedIn){
        result("user is logged in");//success message
    }
    else{
        reject("user is not logged in");//reject message
    }
})
checklogin.then((result)=>{console.log(result)})
checklogin.catch((error)=>{console.log(error)})