
let textoAumentado = false; // Variable para rastrear el estado del tamaño del texto

function aumentarTexto(){
   let texto = document.getElementById("parrafo");
   if (textoAumentado) {
       texto.style.fontSize = "1em"; // Reducir el tamaño del texto
   } else {
       texto.style.fontSize = "3em"; // Aumentar el tamaño del texto
   }
   textoAumentado = !textoAumentado; // Alternar el estado
}


 let audio = true;
 function lecturaAudio(){
    let texto = document.getElementById("parrafo").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 /* ----------------AUDIOLIBROS.HTML------------------------ */  

 let audioremix = true;
 function lecturalines(){
    let texto = document.getElementById("lines").textContent;
    if(audioremix){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audioremix = !audioremix;
    
 }

 
let textomax = false; // Variable para rastrear el estado del tamaño del texto

function aumentarTamanioTexto(){
   let texto = document.getElementById("lines");
   if (textomax) {
       texto.style.fontSize = "1em"; // Reducir el tamaño del texto
   } else {
       texto.style.fontSize = "3em"; // Aumentar el tamaño del texto
   }
   textomax = !textomax; // Alternar el estado
}

/* ----------------NOTAS------------------------- */  

function mostrarNota(){
    let notas = document.getElementById("notas").value;
    let mostrar = document.querySelector(".contenedor");
    
    mostrar.innerHTML += "<div>" + notas + "</div>";
    
    }
    
    function eliminarNota() {
        let contenedor = document.querySelector(".contenedor");
        if (contenedor.lastChild) {
          contenedor.removeChild(contenedor.lastChild);
        }
      }
/* -----------------FORMULARIO.HTML - VALIDACIONES----------------------- */        

function validarVacio(id) {
    let value = document.getElementById(id).value
          while  (!value || value == '')   {
              alert ("Error, debe completar el campo " + id +", es requerido")

document.getElementById(id).style.backgroundColor="red"
document.getElementById(id).style.backgroundColor="red"
document.getElementById(id).style.visibility="visible"

  return true
}
return false
}
          
/*FUNCION PARA VALIDAR*/
    
   function resultado() {

let error = false
if (!error ) {
 error = validarVacio('nombre') 
}

if(!error) {
  error= validarVacio('apellido')
}


if (!error) {
error= validarVacio('email')
}

if(!error) {
error=validarVacio('mensaje') 
}

if (!error) {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre !== "" && apellido!== "" && email!== "" && mensaje !== "") {
        document.formulario.submit();
  alert("Los datos enviados son:\n" + nombre + "\n" + apellido + "\n" + email + "\n" + mensaje);
    alert("Mensaje enviado");
    }

  }else {
    alert ("corrige los datos erroneos o no ingresados")
  }

   }

/* ----------------GENEROS------------------------- */ 


let sinopsis1 = true;
 function lecturaAudio0(){
    let texto = document.getElementById("fahrenheit").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis2 = true;
 function lecturaAudio1(){
    let texto = document.getElementById("fin").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis3 = true;
 function lecturaAudio2(){
    let texto = document.getElementById("almas").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis4 = true;
 function lecturaAudio3(){
    let texto = document.getElementById("hyperion").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 let sinopsisNeu = true;
 function lecturaAudioNeu(){
    let texto = document.getElementById("neuromante").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 let sinopsis5 = true;
 function lecturaAudioSnow(){
    let texto = document.getElementById("snow").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis6 = true;
 function lecturaAudio5(){
    let texto = document.getElementById("orgullo").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis7 = true;
 function lecturaAudio6(){
    let texto = document.getElementById("outlander").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis8 = true;
 function lecturaAudio7(){
    let texto = document.getElementById("chocolate").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis9 = true;
 function lecturaAudio8(){
    let texto = document.getElementById("notebook").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis10 = true;
 function lecturaAudio9(){
    let texto = document.getElementById("meant").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis11 = true;
 function lecturaAudio10(){
    let texto = document.getElementById("att").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis12 = true;
 function lecturaAudio11(){
    let texto = document.getElementById("tronos").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis13 = true;
 function lecturaAudio12(){
    let texto = document.getElementById("coraline").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis14 = true;
 function lecturaAudio13(){
    let texto = document.getElementById("bosque").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis15 = true;
 function lecturaAudio14(){
    let texto = document.getElementById("american").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis16 = true;
 function lecturaAudio15(){
    let texto = document.getElementById("espada").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis17 = true;
 function lecturaAudio16(){
    let texto = document.getElementById("interminable").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 let sinopsis18 = true;
 function lecturaAudio17(){
    let texto = document.getElementById("corderos").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }

 
 let sinopsis19 = true;
 function lecturaAudio18(){
    let texto = document.getElementById("cripta").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis20 = true;
 function lecturaAudio19(){
    let texto = document.getElementById("laberinto").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis21 = true;
 function lecturaAudio20(){
    let texto = document.getElementById("perdida").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis22 = true;
 function lecturaAudio21(){
    let texto = document.getElementById("rosa").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis23 = true;
 function lecturaAudio22(){
    let texto = document.getElementById("isla").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis24 = true;
 function lecturaAudio23(){
    let texto = document.getElementById("potter").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis25 = true;
 function lecturaAudio24(){
    let texto = document.getElementById("principito").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis26 = true;
 function lecturaAudio25(){
    let texto = document.getElementById("matilda").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis27 = true;
 function lecturaAudio26(){
    let texto = document.getElementById("fabrica").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis28 = true;
 function lecturaAudio27(){
    let texto = document.getElementById("grufalo").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis29 = true;
 function lecturaAudio28(){
    let texto = document.getElementById("narnia").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis30 = true;
 function lecturaAudio29(){
    let texto = document.getElementById("retrato").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis31 = true;
 function lecturaAudio30(){
    let texto = document.getElementById("mujercitas").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis32 = true;
 function lecturaAudio31(){
    let texto = document.getElementById("Gatsby").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis33 = true;
 function lecturaAudio32(){
    let texto = document.getElementById("anna").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis34 = true;
 function lecturaAudio33(){
    let texto = document.getElementById("don").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }
 
 let sinopsis35 = true;
 function lecturaAudio34(){
    let texto = document.getElementById("dick").textContent;
    if(audio){
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
   
     
    }else{
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance("pause"));
    }
    audio = !audio;
    
 }


