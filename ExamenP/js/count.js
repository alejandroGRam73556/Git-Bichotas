let num=0;
const value=document.querySelector(".value"); //Para agarrar el valor de la clase value
const btns=document.querySelectorAll(".btn");
var elementoImg = document.getElementById("foto");

 //btn del foreach es otro elemento
btns.forEach((btn) => {
    btn.addEventListener("click", (event)=>{
        const styles=event.currentTarget.classList;
        if(styles.contains("btn-min")){
            num--;
        }else if(styles.contains("btn-pls")){
            num++;
        }else{
            num=0;
        }
        value.textContent=num;

        if(num>0){
            value.style.color="green";
            elementoImg.src="img/feliz.png";
        }else if(num<0){
            value.style.color="red";
            elementoImg.src="img/enojo.png";
        }else{
            value.style.color="black";
            elementoImg.src="img/timida.png";
        }
    });
});