$(document).ready(function(){
  console.log("funciona");
  
  $("#error").hide();
  
  $("#enviarForm").submit(function(event){
    console.log("funciona");

    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();

    // if(nombre != "" && password !=""){
    //  // $("#enviado").html("<div class='alert alert-success' role='alert'>Datos enviados</div>");
    //  //  console.log("El nombre de usuario es: " + nombre);
    //  //  console.log("Tu password es: " + password);
    // }

    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {

      $(".franja-error").addClass('has-error');
      $("#error").show('slow');
      return false;

    }if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {

      $(".franja-error").addClass('has-error');
      $("#error").show('slow');
      return false;

    }if(asunto == null || asunto.length == 0 || /^\s+$/.test(asunto) ) {

      $(".franja-error").addClass('has-error');
      $("#error").show('slow');
      return false;

    }if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje) ) {

      $(".franja-error").addClass('has-error');
      $("#error").show('slow');
      return false;

    }else{

      $("#enviado").html("<div class='alert alert-success' role='alert'>Datos enviados</div>");

    }

    return true;

    event.preventDefault();
  });
});