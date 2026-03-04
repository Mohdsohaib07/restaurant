import app from "./app.js";


//server listening on network port 
app.listen(process.env.PORT,()=>{
    console.log(`server running on Port ${process.env.PORT}`);
});