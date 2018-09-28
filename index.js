// setup server
var express = require('express');
var app = express();

// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// required data store structure
db.defaults(
{
    accounts:[
        {name        : 'jmpl',
         email       : 'jmpl@amail.com',
         balance     : 0,
         password    : 'secret',
         transactions: []}
    ]
}
).write();


app.get('/account/create/:name/:email/:password', function (req, res) {

    try{
      db.get('accounts').push({name:req.params.name,email:req.params.email, balance:0, password:req.params.password,transactions:[]}).write();
      res.send('Account of '+req.params.name+ ' created');
    }catch (e) {
      res.send('Account of '+req.params.name+ ' failed :'+e.message);
    }
});

app.get('/account/login/:email/:password', function (req, res) {
    try{
      var account = db.get('accounts').find({email:req.params.email, password:req.params.password}).value();
      if(account ==null){
        res.send('Account not found for '+req.params.email);
      }else{
        res.send(account);
      }

    }catch (e) {
      res.send('Account of '+req.params.name+ ' failed :'+e.message);
    }
});

app.get('/account/get/:email', function (req, res) {
    try{
      var account = db.get('accounts').find({email:req.params.email}).value();
      console.log(account);
      if(account ==null){
        res.send('Account not found for '+req.params.email);
      }else{

        res.send(account);
      }

    }catch (e) {
      res.send('Account of '+req.params.name+ ' failed :'+e.message);
    }
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    try{
      var amount = req.params.amount;
      var account = db.get('accounts').find({email:req.params.email}).value();
      console.log(account);
      if(account ==null){
        res.send('Account not found for '+req.params.email);
      }else{
        var amountInc = new Number(amount);
        account.balance = account.balance + amountInc;
        account.transactions.push({date:new Date(), amount: amountInc, type:"deposit"});
        db.get('posts').find({ email: account.email }).assign({ balance: account.balance, transations: account.transations}).value();
        db.write();
        res.send({balance: account.balance});
      }

    }catch (e) {
      res.send('Unexpected error: '+e.message);
    }
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    try{
      var amount = req.params.amount;
      var account = db.get('accounts').find({email:req.params.email}).value();
      console.log(account);
      if(account ==null){
        res.send('Account not found for '+req.params.email);
      }else{
        var amountInc = new Number(amount);
        account.balance = account.balance - amountInc;
        account.transactions.push({date:new Date(), amount: amountInc, type:"withdraw"});
        db.get('posts').find({ email: account.email }).assign({ balance: account.balance, transations: account.transations}).value();
        db.write();
        res.send({balance: account.balance});
      }

    }catch (e) {
      res.send('Unexpected error: '+e.message);
    }
});

app.get('/account/transactions/:email', function (req, res) {

  try{
    var account = db.get('accounts').find({email:req.params.email}).value();
    console.log(account);
    if(account ==null){
      res.send('Account not found for '+req.params.email);
    }else{
      res.send({transactions: account.transactions});
    }

  }catch (e) {
    res.send('Unexpected error: '+e.message);
  }
});

app.get('/account/all', function (req, res) {
  try{
    var accounts = db.get('accounts').value();
    console.log(accounts);
    res.send(accounts);

  }catch (e) {
    res.send('Unexpected error: '+e.message);
  }
});

app.listen(3000, function(){
  console.log('Running on port:3000');
});
