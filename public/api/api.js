//var Promise = this.Promise || require('promise');
//var agent = require('superagent-promise')(require('superagent'), Promise);
//var agent = require('superagent');
let alertTimer;
function showAlert(message,type){
  $('.alert').show();
  $('.alert-message').html(message);
  if(type == "Success"){
    $('.alert').addClass("alert-success");
  }else if(type == "Warning"){
    $('.alert').addClass("alert-warning");
  }
  clearTimeout(alertTimer);
  alertTimer = setTimeout(hideAlert, 5000);
}
function hideAlert(){
  $('.alert').hide();
  $('.alert').removeClass("alert-success");
  $('.alert').removeClass("alert-warning");
}

function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
    var name     = document.getElementById('name');
    var email     = document.getElementById('email');
    var password = document.getElementById('password');
  superagent.get('/account/create/'+name.value+'/'+email.value+'/'+password.value)
  .then(function(res) {
    console.log(res);
    showAlert(res.text,'Success');
  });
}

function login() {

    var email     = document.getElementById('email');
    var password = document.getElementById('password');
  superagent.get('/account/login/'+email.value+'/'+password.value)
  .then(function(res) {
    console.log(res);
    if(res.type == 'text/html'){
      showAlert(res.text,'Warning');
    }
    else{
      showAlert(JSON.stringify(res.body),'Success');
    }
  });
}

function deposit() {
    var email     = document.getElementById('email');
    var amount    = document.getElementById('amount');
    superagent.get('/account/deposit/'+email.value+'/'+amount.value)
  .then(function(res) {
    console.log(res);
    if(res.type == 'text/html'){
      showAlert(res.text,'Warning');
    }
    else{
      var account = JSON.parse(res.text);
      showAlert('The balance of '+email.value+ ' is now '+account.balance,'Success');
    }
  });
}

function withdraw() {
  var email     = document.getElementById('email');
  var amount    = document.getElementById('amount');
  superagent.get('/account/withdraw/'+email.value+'/'+amount.value)
.then(function(res) {
  console.log(res);
  if(res.type == 'text/html'){
    showAlert(res.text,'Warning');
  }
  else{
    var account = JSON.parse(res.text);
    showAlert('The balance of '+email.value+ ' is now '+account.balance,'Success');
  }
});
}

function transactions() {
  var email     = document.getElementById('email');
  superagent.get('/account/transactions/'+email.value)
.then(function(res) {
  console.log(res);
  if(res.type == 'text/html'){
    showAlert(res.text,'Warning');
  }
  else{
    var account = JSON.parse(res.text);
    showAlert('The transaction history :<br/>'+JSON.stringify(account.transactions),'Success');
  }
});
}

function balance() {
    var email     = document.getElementById('email');
    superagent.get('/account/get/'+email.value)
  .then(function(res) {
    console.log(res);
    if(res.type == 'text/html'){
      showAlert(res.text,'Warning');
    }
    else{
      var account = JSON.parse(res.text);
      showAlert('The balance of '+email.value+ ' is '+account.balance,'Success');
    }
  });
}

function allData() {
  superagent.get('/account/all/')
.then(function(res) {
  console.log(res);
  if(res.type == 'text/html'){
    showAlert(res.text,'Warning');
  }
  else{
    var accounts = JSON.parse(res.text);
    showAlert('All Data in the store :<br/>'+JSON.stringify(accounts),'Success');
  }
});
}
