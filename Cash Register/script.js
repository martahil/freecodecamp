let price = 0;

let showDiv6_7 = document.getElementById("cidCase6-7");
let showDiv8 = document.getElementById("cidCase8");
let showDiv9 = document.getElementById("cidCase9");
let showDiv10 = document.getElementById("cidCase10");

var divColor01 = document.getElementById("button01-container");
var divColor02 = document.getElementById("button02-container");
var divColor03 = document.getElementById("button03-container");
var divColor04 = document.getElementById("button04-container");

var cidStatusDiv = document.getElementById("crStatusDiv");

let changeDueTxt = document.getElementById("change-due");

let cr01Chosen;
let cr08Chosen;
let cr09Chosen;
let cr10Chosen;
let cr01Closed;
let cr08Closed;
let cr09Closed;
let cr10Closed;

function priceAdd() {
  if (cr01Chosen || cr08Chosen || cr09Chosen || cr10Chosen) {
    let inputNum = document.getElementById('priceInput').value; // obtendo o valor do input
    let inpNumber = Number(inputNum);
    price = inpNumber;
    totalDiv.textContent = "Total: " + "$" + price;
  } else {
    alert('Please choose one of those Cash Registers (CR) above before you insert a price.');
  }
}

// Default cid 
let cid = [
  ["PENNY", 1.01], //0.01
  ["NICKEL", 2.05], //0.05
  ["DIME", 3.1], //0.10
  ["QUARTER", 4.25], //0.25
  ["ONE", 90], //1
  ["FIVE", 55], //5
  ["TEN", 20], //10
  ["TWENTY", 60], //20
  ["ONE HUNDRED", 100], //100        
];

// User Stories 6 & 7 
let cid6_7 = [
  ["PENNY", 1.01], //0.01
  ["NICKEL", 2.05], //0.05
  ["DIME", 3.1], //0.10
  ["QUARTER", 4.25], //0.25
  ["ONE", 90], //1
  ["FIVE", 55], //5
  ["TEN", 20], //10
  ["TWENTY", 60], //20
  ["ONE HUNDRED", 100], //100        
];

// User Stories 8
let cid8 = [
  ["PENNY", 0.01], //0.01
  ["NICKEL", 0], //0.05
  ["DIME", 0], //0.10
  ["QUARTER", 0], //0.25
  ["ONE", 0], //1
  ["FIVE", 0], //5
  ["TEN", 0], //10
  ["TWENTY", 0], //20
  ["ONE HUNDRED", 0], //100        
];

// User Stories 9
let cid9 = [
  ["PENNY", 0.01], //0.01
  ["NICKEL", 0], //0.05
  ["DIME", 0], //0.10
  ["QUARTER", 0], //0.25
  ["ONE", 1], //1
  ["FIVE", 0], //5
  ["TEN", 0], //10
  ["TWENTY", 0], //20
  ["ONE HUNDRED", 0], //100        
];

// User Stories 10
let cid10 = [
  ["PENNY", 0.5], //0.01
  ["NICKEL", 0], //0.05
  ["DIME", 0], //0.10
  ["QUARTER", 0], //0.25
  ["ONE", 0], //1
  ["FIVE", 0], //5
  ["TEN", 0], //10
  ["TWENTY", 0], //20
  ["ONE HUNDRED", 0], //100        
];

function showCidCase6_7() {
  cid = cid6_7;
  let formattedcid6_7 = cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
  showDiv6_7.innerHTML = ' The money available in the Cash-in-drawer 01 is:<br>' + formattedcid6_7;
  showDiv8.innerHTML = "";
  showDiv9.innerHTML = "";
  showDiv10.innerHTML = "";

  divColor01.style.backgroundColor = "#00a8ff";
  divColor02.style.backgroundColor = "#a9a9a9";
  divColor03.style.backgroundColor = "#a9a9a9";
  divColor04.style.backgroundColor = "#a9a9a9";

  button01.textContent = "Chosen";
  button02.textContent = "Choose CR 08";
  button03.textContent = "Choose CR 09";
  button04.textContent = "Choose CR 10";

  if (!cr01Closed) {
    cidStatusDiv.innerHTML = "CR status: " + formattedcid6_7;
    cidStatusDiv.style.backgroundColor = "#0059FF";
    changeDueTxt.textContent = "Cash Register Feedback";
  } else {
    changeDueTxt.textContent = "Status: INSUFFICIENT_FUNDS";
    cidStatusDiv.textContent = "";
    cidStatusDiv.style.backgroundColor = "transparent";
  }

  cr01Chosen = true;
  cr08Chosen = false;
  cr09Chosen = false;
  cr10Chosen = false;
}

function showCid8() {
  cid = cid8;
  let formattedCid8 = cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
  showDiv8.innerHTML = ' The money available in the Cash-in-drawer 08 is:<br>' + formattedCid8;
  showDiv6_7.innerHTML = "";
  showDiv9.innerHTML = "";
  showDiv10.innerHTML = "";

  divColor02.style.backgroundColor = "#00a8ff";
  divColor01.style.backgroundColor = "#a9a9a9";
  divColor03.style.backgroundColor = "#a9a9a9";
  divColor04.style.backgroundColor = "#a9a9a9";

  button02.textContent = "Chosen";
  button01.textContent = "Choose CR 01";
  button03.textContent = "Choose CR 09";
  button04.textContent = "Choose CR 10";

  if (!cr08Closed) {
    cidStatusDiv.innerHTML = "CR status: " + formattedCid8;
    cidStatusDiv.style.backgroundColor = "#0059FF";
    changeDueTxt.textContent = "Cash Register Feedback";
  } else {
    changeDueTxt.textContent = "Status: INSUFFICIENT_FUNDS";
    cidStatusDiv.textContent = "";
    cidStatusDiv.style.backgroundColor = "transparent";
  }

  cr01Chosen = false;
  cr08Chosen = true;
  cr09Chosen = false;
  cr10Chosen = false;
}

function showCid9() {
  cid = cid9;
  let formattedCid9 = cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
  showDiv9.innerHTML = ' The money available in the Cash-in-drawer 09 is:<br>' + formattedCid9;
  showDiv6_7.innerHTML = "";
  showDiv8.innerHTML = "";
  showDiv10.innerHTML = "";

  divColor03.style.backgroundColor = "#00a8ff";
  divColor01.style.backgroundColor = "#a9a9a9";
  divColor02.style.backgroundColor = "#a9a9a9";
  divColor04.style.backgroundColor = "#a9a9a9";

  button03.textContent = "Chosen";
  button01.textContent = "Choose CR 01";
  button02.textContent = "Choose CR 08";
  button04.textContent = "Choose CR 10";

  if (!cr09Closed) {
    cidStatusDiv.innerHTML = "CR status: " + formattedCid9;
    cidStatusDiv.style.backgroundColor = "#0059FF";
    changeDueTxt.textContent = "Cash Register Feedback";
  } else {
    changeDueTxt.textContent = "Status: INSUFFICIENT_FUNDS";
    cidStatusDiv.textContent = "";
    cidStatusDiv.style.backgroundColor = "transparent";
  }

  cr01Chosen = false;
  cr08Chosen = false;
  cr09Chosen = true;
  cr10Chosen = false;
}

function showCid10() {
  cid = cid10;
  let formattedCid10 = cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
  showDiv10.innerHTML = ' The money available in the Cash-in-drawer 10 is:<br>' + formattedCid10;
  showDiv6_7.innerHTML = "";
  showDiv8.innerHTML = "";
  showDiv9.innerHTML = "";

  divColor04.style.backgroundColor = "#00a8ff";
  divColor01.style.backgroundColor = "#a9a9a9";
  divColor02.style.backgroundColor = "#a9a9a9";
  divColor03.style.backgroundColor = "#a9a9a9";

  button04.textContent = "Chosen";
  button01.textContent = "Choose CR 01";
  button02.textContent = "Choose CR 08";
  button03.textContent = "Choose CR 09";

  if (!cr10Closed) {
    cidStatusDiv.innerHTML = "CR status: " + formattedCid10;
    cidStatusDiv.style.backgroundColor = "#0059FF";
    changeDueTxt.textContent = "Cash Register Feedback";
  } else {
    changeDueTxt.textContent = "Status: INSUFFICIENT_FUNDS";
    cidStatusDiv.textContent = "";
    cidStatusDiv.style.backgroundColor = "transparent";
  }

  cr01Chosen = false;
  cr08Chosen = false;
  cr09Chosen = false;
  cr10Chosen = true;
}

function purchaseBtn() {

  if (price > 0) {

    let inputPrice = document.getElementById("priceInput");

    let changeDue = document.getElementById("change-due");
    let inputNum = (document.getElementById("cash").value);
    let inpNumber = Number(inputNum);

    if (inpNumber < price) {
      alert("Customer does not have enough money to purchase the item");
    }

    if (inpNumber == price && inputPrice.value != '' && inputNum != '') {
      changeDue.textContent = "No change due - customer paid with exact cash";
    }

    if (inputNum > price) {
      let change = Number(inputNum - price);

      let money100 = 0;
      let money20 = 0;
      let money10 = 0;
      let money5 = 0;
      let money1 = 0;
      let money025 = 0;
      let money010 = 0;
      let money005 = 0;
      let money001 = 0;

      while (change >= 100 && cid[8][1] > 0) {
        cid[8][1] -= 100;
        cid[8][1] = cid[8][1].toFixed(2);
        change = (change - 100).toFixed(2);
        money100++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      changeDue.textContent = "Status: OPEN ";
      if (money100 >= 1) {
        var calc100 = (money100 * 100).toFixed(2);
        var changeDuo100 = cid[8][0] + ": " + "$" + calc100 + " ";
        changeDue.textContent += changeDuo100;
      }

      while (change >= 20 && cid[7][1] > 0) {
        cid[7][1] -= 20;
        cid[7][1] = cid[7][1].toFixed(2);
        change = (change - 20).toFixed(2);
        money20++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money20 >= 1) {
        var calc20 = (money20 * 20).toFixed(2);
        var changeDuo20 = cid[7][0] + ": " + "$" + calc20 + " ";
        changeDue.textContent += changeDuo20;
      }

      while (change >= 10 && cid[6][1] > 0) {
        cid[6][1] -= 10;
        cid[6][1] = cid[6][1].toFixed(2);
        change = (change - 10).toFixed(2);
        money10++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money10 >= 1) {
        var calc10 = (money10 * 10).toFixed(2);
        var changeDuo10 = cid[6][0] + ": " + "$" + calc10 + " ";
        changeDue.textContent += changeDuo10;
      }

      while (change >= 5 && cid[5][1] > 0) {
        cid[5][1] -= 5;
        cid[5][1] = cid[5][1].toFixed(2);
        change = (change - 5).toFixed(2);
        money5++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money5 >= 1) {
        var calc5 = (money5 * 5).toFixed(2);
        var changeDuo5 = cid[5][0] + ": " + "$" + calc5 + " ";
        changeDue.textContent += changeDuo5;
      }

      while (change >= 1 && cid[4][1] > 0) {
        cid[4][1] -= 1;
        cid[4][1] = cid[4][1].toFixed(2);
        change = (change - 1).toFixed(2);
        money1++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money1 >= 1) {
        var calc1 = (money1 * 1).toFixed(2);
        var changeDuo1 = cid[4][0] + ": " + "$" + calc1 + " ";
        changeDue.textContent += changeDuo1;
      }

      while (change >= 0.25 && cid[3][1] > 0) {
        cid[3][1] -= 0.25;
        cid[3][1] = cid[3][1].toFixed(2);
        change = (change - 0.25).toFixed(2);
        money025++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money025 >= 1) {
        var calc025 = (money025 * 0.25).toFixed(2);
        var changeDuo025 = cid[3][0] + ": " + "$" + calc025 + " ";
        changeDue.textContent += changeDuo025;
      }

      while (change >= 0.10 && cid[2][1] > 0) {
        cid[2][1] -= 0.10;
        cid[2][1] = cid[2][1].toFixed(2);
        change = (change - 0.1).toFixed(2);
        money010++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money010 >= 1) {
        var calc010 = (money010 * 0.10).toFixed(2);
        var changeDuo010 = cid[2][0] + ": " + "$" + calc010 + " ";
        changeDue.textContent += changeDuo010;
      }

      while (change >= 0.05 && cid[1][1] > 0) {
        cid[1][1] -= 0.05;
        cid[1][1] = cid[1][1].toFixed(2);
        change = (change - 0.05).toFixed(2);
        money005++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money005 >= 1) {
        var calc005 = (money005 * 0.05).toFixed(2);
        var changeDuo005 = cid[1][0] + ": " + "$" + calc005 + " ";
        changeDue.textContent += changeDuo005;
      }

      while (change >= 0.01 && cid[0][1] > 0) {
        cid[0][1] -= 0.01;
        cid[0][1] = cid[0][1].toFixed(2);
        change = (change - 0.01).toFixed(2);
        money001++;
        cidStatusDiv.innerHTML = "CR status: " + cid.map(item => `["${item[0]}", ${item[1]}]`).join(', ');
      }
      if (money001 >= 1) {
        var calc001 = (money001 * 0.01).toFixed(2);
        var changeDuo001 = cid[0][0] + ": " + "$" + calc001 + " ";
        changeDue.textContent += changeDuo001;
      }

      if (change > 0) {
        var insFunds = true;

        if (insFunds && cr01Chosen) {
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
          cidStatusDiv.textContent = "";
          cidStatusDiv.style.backgroundColor = "transparent";
          cr01Closed = true;
        }
        if (insFunds && cr08Chosen) {
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
          cidStatusDiv.textContent = "";
          cidStatusDiv.style.backgroundColor = "transparent";
          cr08Closed = true;
        }
        if (insFunds && cr09Chosen) {
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
          cidStatusDiv.textContent = "";
          cidStatusDiv.style.backgroundColor = "transparent";
          cr09Closed = true;
        }
        if (insFunds && cr10Chosen) {
          changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
          cidStatusDiv.textContent = "";
          cidStatusDiv.style.backgroundColor = "transparent";
          cr10Closed = true;
        }
      }

      var cidSum = (Number(cid[0][1]) + Number(cid[1][1]) + Number(cid[2][1]) + Number(cid[3][1]) + Number(cid[4][1]) +
        Number(cid[5][1]) + Number(cid[6][1]) + Number(cid[7][1]) + Number(cid[8][1]));
      var cidSum2dec = cidSum.toFixed(2);
      var cidSum2decNum = Number(cidSum2dec);

      if (change == cidSum2decNum) {
        changeDue.textContent = "";
        changeDue.textContent = "Status: CLOSED ";

        if (changeDuo100 != undefined) {
          changeDue.textContent += changeDuo100;
        }
        if (changeDuo20 != undefined) {
          changeDue.textContent += changeDuo20;
        }
        if (changeDuo10 != undefined) {
          changeDue.textContent += changeDuo10;
        }
        if (changeDuo5 != undefined) {
          changeDue.textContent += changeDuo5;
        }
        if (changeDuo1 != undefined) {
          changeDue.textContent += changeDuo1;
        }
        if (changeDuo025 != undefined) {
          changeDue.textContent += changeDuo025;
        }
        if (changeDuo010 != undefined) {
          changeDue.textContent += changeDuo010;
        }
        if (changeDuo005 != undefined) {
          changeDue.textContent += changeDuo005;
        }
        if (changeDuo001 != undefined) {
          changeDue.textContent += changeDuo001;
        }
      }

    }

    priceDiv.textContent = price;

  } else {
    alert('Please insert a valid price in the field above before you insert the cash.');
  }

}





