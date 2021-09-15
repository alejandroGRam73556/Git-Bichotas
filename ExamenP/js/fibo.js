function fibon() {
    var totali, limites, fibo = [0, 1];


    limites = document.getElementById("limites").value;
    var arreglo = [limites];

    if (isNaN(limites) || limites == '') {
        alert("No ha insertado un limite");
    } else {
        for (i = 2; i <= limites; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
            document.getElementById('totali').innerHTML = fibo + ', ';


        }

    }



}