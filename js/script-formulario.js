$( document ).ready(function() {
  // Inicio Script Slider
  $( '#my-slider' ).sliderPro({
    width: '100%',
    height: 600,
    arrows: true,
    fade: true,
  });
  // Fin Script Slider

  // Inicio Script BootstrapValidator
  $('#enviarForm').bootstrapValidator({
    message: 'Este valor no es válido',
    live: 'disabled',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    submitHandler: function(validator, form, submitButton) {
                // validator is the BootstrapValidator instance
                // form is the jQuery object present the current form
                form.find('.alert').html('¡Gracias ' + validator.getFieldElements('nombre').val() + '! Sus datos se enviaron con éxito ').show();
              },
              fields: {
                nombre: {
                  message: 'Este nombre no es válido',
                  validators: {
                    notEmpty: {
                      message: '* Este campo es requerido'
                    },
                    stringLength: {
                      min: 3,
                      max: 30,
                      message: 'Tu nombre debe contener al menos 3 caracteres de largo'
                    },
                    regexp: {
                      regexp: /^[a-zA-Z0-9]+$/,
                      message: 'Tu nombre debe consistir en letras de la A a la Z y números'
                    }
                  }
                },
                email: {
                  validators: {
                    notEmpty: {
                      message: '* Este campo es requerido'
                    },
                    emailAddress: {
                      message: 'ingrese una cuenta de correo válida'
                    }
                  }
                },
                asunto: {
                  validators: {
                    notEmpty: {
                      message: '* Este campo es requerido'
                    }
                  }
                },
                mensaje: {
                  validators: {
                    notEmpty: {
                      message: '* Este campo es requerido'
                    }
                  }
                }
              }
            });
// Fin Script BootstrapValidator

});