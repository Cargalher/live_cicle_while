// LIVE CODING_1 ----> Stampare tutti gli elementi di un array, sia con il ciclo for che con il ciclo while

var elements = ["Simone", "Luca", "Vito", "Carmen"];

/* for (var i=0; i < elements.length; i++ ){            //using ciclo for
    console.log(elements[i]);
}
*/

/*var i = 0;
while (i< elements.length){
    console.log(elements[i]);                               //using ciclo while
    i++
}
*/



// LIVE CODING_2 ---->

// ciclo do while

// Stampare tutti gli elementi di un array in pagina, all'interno di una lista.

var shoppingList = ["bread", "salad", "lentils", "pasta"];

for ( var i=0; i< shoppingList.length; i++){
    var elementList= shoppingList[i];
    var content = document.getElementById("list").innerHTML;
    document.getElementById("list").innerHTML = content + "<li>" + elementList + "</li>";
}