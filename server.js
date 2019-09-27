const express=require(express);//import an express
const app=express();//create an express app
const bodyParser=require(bodyParser);//create an express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.get( "/",(rep,res)=>{
    res.send("Hello World. Welcome to my sever!!!");
});
app.post('/login', (req, res)=> {

    if (req.body.username=== 'Ann'&& req.body.password==='000'){
        res.send('Login successful!!!')
    
} else{
    res.send('password or username incorrect')}
    console.log(req.body)
});                                                             
app.get("/colors", (req,res) => {
    res.send (["red" ,"blue", "yellow","pink"]);
});
app.get("/fruits", (req,res)=> {
    res.send(["mango", "orange", "apple", "banana"]);

 } );



 //mongodb+srv://Ann:<password>@cluster0-idr6v.mongodb.net/test?retryWrites=true&w=majority


































9
