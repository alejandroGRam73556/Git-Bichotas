'use strict'
var platilloOpt = "";
var bebidaOpt = "";
var cantPlatillo = 0;
var cantBebida = 0;
var Cicle = 0;
var totalComida = 0;
var totalBebida = 0;

do {



    platilloOpt = prompt("Menu de platillos \n Seleccione la opción de su agrado: \n1. Hamburguesa de res ($40) \n2. Hotdog ($30) \n3. Papas fritas ($25 orden) \n4. Ninguna");
    cantPlatillo = prompt("Cuantas ordenes de este platillo requiere");
    cantPlatillo = parseInt(cantPlatillo)

    bebidaOpt = prompt("Menu de bebidas \n Seleccione la opción de su agrado: \n1. Agua natural ($20) \n2. Soda ($30) \n3. Cerveza ($45) \n4. Ninguna");
    cantBebida = prompt("Cuantas ordenes de esta bebida requiere");
    cantBebida = parseInt(cantBebida)


    switch (platilloOpt) {
        case "1":
            totalComida += 40 * cantPlatillo;
            platilloOpt = "Hamburguesa de res";
            break;
        case "2":
            totalComida += 30 * cantPlatillo;
            platilloOpt = "Hotdog";

            break;
        case "3":
            totalComida += 25 * cantPlatillo;
            platilloOpt = "Papas fritas";

            break;

        case "4":
            totalComida += 0;
            platilloOpt = "Ninguna";

            break;

        default:
            alert("Usted ha seleccionado una opción incorrecta, recargue la web para volver a elegir")

            break;

    }

    switch (bebidaOpt) {
        case "1":
            totalBebida += 20 * cantBebida;
            bebidaOpt = "Agua natural";

            break;
        case "2":
            totalBebida += 30 * cantBebida;
            bebidaOpt = "Soda";


            break;
        case "3":
            totalBebida += 45 * cantBebida;
            bebidaOpt = "Cerveza";


            break;

        case "4":
            totalBebida += 0;
            bebidaOpt = "Ninguna";


            break;

        default:
            alert("Usted ha seleccionado una opción incorrecta, recargue la web para volver a elegir")

            break;
    }

    var totalFinal = totalComida + totalBebida;
    Cicle = prompt("¿Desea finalizar su pedido?: \n1. Si \n2. No");



    var tbl = document.getElementById("tabla");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    cell1.innerHTML = platilloOpt;
    cell2.innerHTML = cantPlatillo;
    cell3.innerHTML = bebidaOpt;
    cell4.innerHTML = cantBebida;



} while (Cicle == 2);



document.write("<p>", "Total: $" + totalFinal, "</p>")

