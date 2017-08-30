"use strict";
$(function() {
    function pobierzDane() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(plikJson) {
               
            var nowyDiv=document.createElement("div");
            $(nowyDiv).attr("id", "dane-programisty");
            document.body.appendChild(nowyDiv);
           
            nowyDiv.innerHTML ="imie: " + plikJson.imie + "<br>zawod: " + plikJson.zawod + "<br>nazwisko:" + plikJson.nazwisko + "<br>firma: " + plikJson.firma;

       })
    }
        
//    przypięcie funkcji do przycisku
    $("button").click(function(){
        pobierzDane();
    });
});