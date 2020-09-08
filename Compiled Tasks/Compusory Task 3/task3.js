// Function that calculates the amount of times a user clicks on the button created in the HTML sheet.
let clicks = 0;
function countClicks() {
    clicks += 1;
    document.getElementById("Clicks:").innerHTML = "You have clicked the button " + clicks + " time(s).";
}

// The functions below are to conver different currencies on the HTML page. (I input most recent currency values.)
let eur, gbp, usd, zar;
function currencyConverter() {
    eur = document.getElementById("EUR");
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    zar = document.getElementById("ZAR");
}

function eurfunc() {
    gbp.value = parseFloat(eur.value) * 0.85;
    usd.value = parseFloat(eur.value) * 1.10;
    zar.value = parseFloat(eur.value) * 16.22;
}

function gbpfunc() {
    usd.value = parseFloat(gbp.value) * 1.29;
    eur.value = parseFloat(gbp.value) * 1.17;
    zar.value = parseFloat(gbp.value) * 18.98;
}

function usdfunc() {
    gbp.value = parseFloat(usd.value) * 0.78;
    eur.value = parseFloat(usd.value) * 0.91;
    zar.value = parseFloat(usd.value) * 14.75;
}

function zarfunc() {
    eur.value = parseFloat(zar.value) * 16.22;
    gbp.value = parseFloat(zar.value) * 18.98;
    usd.value = parseFloat(zar.value) * 14.73;    
}

// The function below creates a dropdown-list with options, using a for loop and prints the function once the user clicks the button created on the HTML page.
function myDropdownList() {
    let text = "";
    for (i = 0; i <= 25; i++) {
      if (i === text) {
        continue;
      }
      text += "This is option number " + i + "<br>";
    }
    document.getElementById("text").innerHTML = text;
  }

// I have made another dropdown-list on the HTML sheet.
// The function below tells the user how many options are in the dropdown-list once the user clicks on the button.
function listQuantity() {
    let totalOptions = document.getElementById("optionList").length;
    document.getElementById("selectionQuantity").innerHTML = totalOptions;
}

// This Function tells the user the selected option order number in the dropdown-list.
function orderNumber() {
    document.getElementById("selectionList").innerHTML = "The selection order number is: " + document.getElementById("optionList").value;
}
