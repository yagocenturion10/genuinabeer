//FUNCION PARA QUE EL MODAL DE EDAD SE EJECUTE AL ABRIR LA PAGINA ANTES DE PODER INTERACTUAR EN MI PAGINA INDEX 






(function(){

    $(function(){

      $("#ventana-modal").modal()

    });
}());



$('#ventana-modal').modal({backdrop: 'static', keyboard: false})



      function  validar(){

  //Variable
  
  var edad = $("#edad").val();
  var terminos = $("#terminos").val();
  

 if (localStorage.getItem("edad")) {
    edad = JSON.parse(localStorage.getItem("edad"))
    
 }

localStorage.setItem('edad', JSON.stringify(edad))

if (localStorage.getItem("terminos")) {
    edad = JSON.parse(localStorage.getItem("terminos"))
    
 }

localStorage.setItem('terminos', JSON.stringify(terminos))




  //Validacion 

  if ($("#terminos").is(":checked")){

//validacion de mayor de 18

   if (edad >= 18 ) {
      swal("Usuario validado", "Bienvenido a GenuinaBeer!", "success");
      //document.getElementById("ventana-modal").style.display="none";
   
      $('#ventana-modal').modal('hide')




  }

  else {
      swal("Validacion", "Aun eres menor de edad", "error");
      //document.getElementById("ventana-modal").style.display="";
      $('#ventana-modal').modal({show: true})
  }

}
else {
  swal("Validacion", "Debes aceptar los terminos y condiciones", "error");
  //document.getElementById("ventana-modal").style.display="";
  $('#ventana-modal').modal({show: true})
}}






