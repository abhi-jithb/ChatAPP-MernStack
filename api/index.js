const express=require('express');
const app =express();

// app.use(express());

app.get('/',(req,res)=>{
    res.json('Welcome page');
});
app.get('/register',(req,res)=>{
    res.json('Register here...');
});
app.post('')


app.listen(4040);
