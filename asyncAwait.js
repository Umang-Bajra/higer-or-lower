//make asyncawait.js file
const checkLogin=()=>{ return new Promise((resolve,reject)=>{
       let loggedIn=true;
    if(loggedIn){
        resolve("user is logged in");//success message
    }
    else{
        reject("user is not logged in");//reject message
    }             
    })}

async function handleLogin(){
    try{
        const result = await checkLogin();
        console.log(result);
    }
        catch(error){
            console.log(error);

        }
}
handleLogin();