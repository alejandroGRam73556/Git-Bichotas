$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
      });
    });
  }
  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Explora Playa del Carmen",
        date:
          "Publicado el día " +
          moment().format("DD") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "Playa del Carmen, que solía ser un tranquilo pueblo pesquero, es en la actualidad un destino de Riviera Maya por derecho propio. Aquí hay animados bares y modernas boutiques junto a taquerías locales y elegantes hoteles de lujo, todo con un toque mexicano más auténtico que lo que encontrarías en la costa de Cancún.",

        button: "https://www.tripadvisor.com.mx/Tourism-g150812-Playa_del_Carmen_Yucatan_Peninsula-Vacations.html"
      },
      {
        title: "Explora Acapulco",
        date:
          "Publicado el día " +
          moment().format("DD") +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content:
          "No te saltes la siesta en Acapulco, porque necesitarás horas de sueño: no dejarás de bailar desde la medianoche hasta que salga el sol.",

          button: "https://www.tripadvisor.com.mx/Tourism-g150787-Acapulco_Pacific_Coast-Vacations.html"
      },
    ];
    console.log(posts);

    // Recorrer el JSON para enviar al index.HTML
    posts.forEach((item) => {
      var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href=${item.button} class="button-more">Más Indormación</a> 
                </article>`;
      //console.log(post);
      $("#posts").append(post);
    });
  }
});

//Navbar
const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', ()=> {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link,index) =>{
          if  (link.style.animation){
              link.style.animation = '';
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1}s`
          }
      
      });

  });  
}

navSlide();

//Navbar cierre

//Estados

function operacion() {
  var bigFoto;
  var catchon = 0;
  var ninos = document.getElementById("niñosss").value;
  var listadestinos = document.getElementById("destinosss");
  var destino = listadestinos.options[listadestinos.selectedIndex].text;
  var dias = document.getElementById("diasss").value;
  var adultos = document.getElementById("adultosss").value;
  var preciototalkm = listadestinos.options[listadestinos.selectedIndex].value;
  catchon="img/1.png"
  switch(preciototalkm){
     case "28050":
      catchon="1";
      break; 
      
      case "359700":
         catchon="2";
         break; 
         
         case "253350":
             catchon="3";
             break; 
             
             case "215550":    
                 catchon="4";
                 break; 
                 
                 case "188100":
                     catchon="5";
                     break; 
 
                     case "137550":
                         catchon="6";
                         break; 
 
                         case "174750":
                             catchon="7";
                             break; 
 
                             case "68850":
                                 catchon="8";
                                 break; 
                                 
                                 case "134850":
                                     catchon="9";
                                     break; 
                                     
                                     case "51750":
                                         catchon="10";
                                         break; 
 
                                         case "19350":
                                             catchon="11";
                                             break; 
 
                                             case "112350":
                                                 catchon="12";
                                                 break; 
 
                                                 case "68550":  
                                                     catchon="13";
                                                     break; 
 
                                                     case "16200":
                                                         catchon="14";
                                                         break; 
 
                                                         case "45150":                                                            
                                                             catchon="15";
                                                             break; 
 
                                                             case "73950":
                                                                 catchon="16";
                                                                 break; 
 
                                                                 case "72750":
                                                                     catchon="17";
                                                                     break; 
 
                                                                     case "118050":                                                       
                                                                        catchon="18";
                                                                        break; 
 
                                                                        case "108750":                                                                        
                                                                            catchon="19";
                                                                            break; 
 
                                                                            case "102600":                                                                                                                                                              
                                                                                catchon="20";
                                                                                break; 
 
                                                                                case "46350":                                               
                                                                                    catchon="21";
                                                                                    break; 
 
                                                                                    case "253500":                                                                                     
                                                                                        catchon="22";
                                                                                        break; 
 
                                                                                        case "30300":
                                                                                            catchon="23";
                                                                                            break; 
 
                                                                                            case "118200":                                                                                             
                                                                                                catchon="24";
                                                                                                break; 
 
                                                                                                case "270600":                                                                                                  
                                                                                                    catchon="25";
                                                                                                    break; 
 
                                                                                                    case "175350":
                                                                                                        catchon="26";
                                                                                                        break; 
 
                                                                                                        case "92700":   
                                                                                                            catchon="27";
                                                                                                            break; 
 
                                                                                                            case "70650":
                                                                                                                catchon="28";
                                                                                                                break; 
 
                                                                                                                case "112350":
                                                                                                                    catchon="29";
                                                                                                                    break; 
 
                                                                                                                    case "254850":
                                                                                                                        catchon="30";
                                                                                                                        break; 
 
                                                                                                                        case "38100":
                                                                                                                            catchon="31";
                                                                                                                            break; 
 
 }
 bigFoto="img/"+ catchon +".png"
  var pasajeros = (ninos*50+adultos*100)*dias;
  var total = parseInt (preciototalkm) + parseInt (pasajeros);
  var kilometros = (parseInt (preciototalkm)/150);
  var cantidadadultos = adultos;
  var cantidadninos = ninos;
  var cantidadpasajeros = parseInt(ninos) + parseInt(adultos);
  var hospedaje = dias;
  localStorage.setItem("total",total);
  localStorage.setItem("preciototalkm",preciototalkm);
  localStorage.setItem("cantidadadultos",cantidadadultos);
  localStorage.setItem("cantidadninos",cantidadninos);
  localStorage.setItem("cantidadpasajeros",cantidadpasajeros);
  localStorage.setItem("hospedaje",hospedaje);
  localStorage.setItem("pasajeros",pasajeros);
  localStorage.setItem("bigFoto",bigFoto);
  localStorage.setItem("destino",destino);
  localStorage.setItem("kilometros",kilometros);
  window.location.href="recibo.html";
  href="recibo.html";
 }
 
 function recibicion(){
 var total =localStorage.getItem("total");
 var preciototalkm =localStorage.getItem("preciototalkm");
 var cantidadadultos =localStorage.getItem("cantidadadultos");
 var cantidadninos =localStorage.getItem("cantidadninos");
 var cantidadpasajeros =localStorage.getItem("cantidadpasajeros");
 var hospedaje =localStorage.getItem("hospedaje");
 var pasajeros =localStorage.getItem("pasajeros");
 var bigFoto =localStorage.getItem("bigFoto");
 var destino =localStorage.getItem("destino");
 var kilometros =localStorage.getItem("kilometros");
 document.getElementById("total").innerHTML="$"+total;
 document.getElementById("preciototalkm").innerHTML="$"+preciototalkm;
 document.getElementById("pasajeros").innerHTML="$"+pasajeros;
 document.getElementById("catchon").src=bigFoto;
 document.getElementById("destino").innerHTML=destino;
 document.getElementById("kilometros").innerHTML=kilometros;
 document.getElementById("cantidadadultos").innerHTML=cantidadadultos;
 document.getElementById("cantidadninos").innerHTML=cantidadninos;
 document.getElementById("cantidadpasajeros").innerHTML=cantidadpasajeros;
 document.getElementById("hospedaje").innerHTML=hospedaje;
 }