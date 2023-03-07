const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const path=require('path');
const User=require('./models/schema');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.get('/',function(req,res)
{

    return res.render('Data');
});
app.post('/add',function(req,res)
{

      User.create(
        {
            productid:req.body.productid,
            quantity:req.body.quantity


        });
        return res.render('Data');
});
app.post('/delete',function(req,res)
{

     User.deleteOne({},function(err)
     {
          console.log('deleted Succesfull');
     });

});
app.listen(port,function(err)
{
    if(err)
    {
        console.log(err);
    }
    console.log('Successful Running');
});