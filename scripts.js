const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")


   const dolarToday = 5.2
   const euroToday = 6.2



   if (currencySelect.value === "dolar") {
      //se o valor do select for dolar, faça a conversão para dolar


      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputCurrencyValue / dolarToday)


   }

   if (currencySelect.value === "euro") {
      //se o valor do select for euro, faça a conversão para euro
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputCurrencyValue / euroToday)
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


   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
