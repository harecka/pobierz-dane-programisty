"use strict";
$(function() {
    function pobierzDane() {
        $.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108", function(plikJson) {
               

           
//           tworzenie znacznika p
           var imie=document.createElement("p");
           var zawod=document.createElement("p");
            var nazwisko=document.createElement("p");
            var firma=document.createElement("p");
//           umiejscowienie znacznika p - powinno byc w divie o id dane programisty
          
            document.body.appendChild(imie);
            document.body.appendChild(zawod);
             document.body.appendChild(nazwisko);
             document.body.appendChild(firma);
//           wypełnienie znacznika p
          
            imie.innerHTML = "imie:" + plikJson.imie;
            zawod.innerHTML = "zawod:" + plikJson.zawod;
            nazwisko.innerHTML = "nazwisko:" + plikJson.nazwisko;
            firma.innerHTML = "firma:" + plikJson.firma;
//           jUserName.innerHTML = "tutaj zostanie wyswietlone userName:" + plikJson.userName;
//           jUserUrl.innerHTML = "tutaj zostanie wyswietlone UserUrl:" + plikJson.userURL;
       })
    }
        
//    przypięcie funkcji do przycisku
    $("#button").click(function(){
        pobierzDane();
    });
});