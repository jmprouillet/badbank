var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" onclick="defaultModule()">Band Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link deactivated" href="#" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>
</nav>
<div class="alert alert-dismissible fade show" role="alert">
  <div class="alert-message"> </div>
  <button type="button" class="close" aria-label="Close" onclick="hideAlert()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- -->
  <div class="card  text-white bg-primary ">
  <h5 class="card-header">Create Account</h5>
  <div class="card-body">
  <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name">
  </div>
<div class="form-group">
  <label for="email">Email address</label>
  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
  <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="password">Password</label>
  <input type="password" class="form-control" id="password" placeholder="Password">
</div>

<button type="submit" class="btn"  onclick="create()">Create Account</button>
</form>
  </div>
</div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- -->
    <div class="card  text-white bg-secondary ">
    <h5 class="card-header">Login</h5>
    <div class="card-body">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>

  <button type="submit" class="btn" onclick="login()">Login</button>
  </form>
    </div>
  </div>
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- -->
    <div class="card  text-white bg-warning ">
    <h5 class="card-header">Deposit</h5>
    <div class="card-body">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="text" class="form-control" id="amount" placeholder="Amount">
  </div>

  <button type="submit" class="btn" onclick="deposit()">Deposit</button>
  </form>
    </div>
  </div>
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- -->
    <div class="card  text-white bg-success ">
    <h5 class="card-header">Withdraw</h5>
    <div class="card-body">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="text" class="form-control" id="amount" placeholder="Amount">
  </div>

  <button type="submit" class="btn" onclick="withdraw()">Withdraw</button>
  </form>
    </div>
  </div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- -->
    <div class="card  text-white bg-danger ">
    <h5 class="card-header">Transactions</h5>
    <div class="card-body">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" class="btn" onclick="transactions()">Show Transactions</button>
  </form>
    </div>
  </div>
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- -->
    <div class="card  text-white bg-info ">
    <h5 class="card-header">Balance</h5>
    <div class="card-body">
    <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" class="btn" onclick="balance()">Show Balance</button>
  </form>
    </div>
  </div>
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- -->
    <div class="card">
    <h5 class="card-header">BadBank Landing Module</h5>
    <div class="card-body">
    <h5 class="card-title">Welcome to the bank</h5>
    <p class="card-text">You can move around using the navigation bar.</p>
    <img class="card-img" src="../bank.png" alt="Card image cap" style="width:300px;height:300px">
    </div>
  </div>
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- -->
    <div class="card ">
    <h5 class="card-header">All Data in Store</h5>
    <div class="card-body">
    <form>

  <button type="submit" class="btn" onclick="allData()">Show All Data</button>
  </form>
    </div>
  </div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
