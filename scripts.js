const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

 async function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());

   const dolarToday = data.USDBRL.high;
   const euroToday = data.EURBRL.high;
   const btcToday = data.BTCBRL.high;

   
    

   if (currencySelect.value == "dolar") {
      //se o valor do select for dolar, faça a conversão para dolar
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputCurrencyValue / dolarToday)

   }

   if (currencySelect.value == "euro") {
      //se o valor do select for euro, faça a conversão para euro
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputCurrencyValue / euroToday)
   }

  if (currencySelect.value == "cripto") {
        // Bitcoin geralmente usa muitas casas decimais ou formato específico
        const convertedBtc = inputCurrencyValue / (btcToday * 1000); 
        // API retorna valor em milhar às vezes, ajuste conforme necessário
        currencyValueConverted.innerHTML = "₿ " + (inputCurrencyValue / btcToday).toFixed(6);
    }






   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(inputCurrencyValue)

}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   
   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyImage.src = "./assets/img/dolar.png"
     
   }

   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/img/euro.png"
     
   }


if (currencySelect.value == "cripto") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/img/bitcoin.png";
         // Certifique-se de ter essa imagem
    }

convertValues();

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
