function pedido() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var numero = document.getElementById('numero').value;
    var tipoPizza = document.getElementById('opcion').options[document.getElementById('opcion').selectedIndex].text;
    
    // Obtener los ingredientes extras seleccionados
    var ingredientesExtras = document.querySelectorAll('.ingrediente:checked');
    var ingredientesSeleccionados = Array.from(ingredientesExtras).map(function(ingrediente) {
      return ingrediente.value;
    }).join(', ');
    
    var comentario = document.getElementById('comentario').value;
    
    // Construir el mensaje con los detalles del pedido
    var mensaje = 'Hola ' + nombre + ' ' + apellido + ', el precio de su pedido será enviado al ' + numero + '.\n\n';
    mensaje += 'Detalles del pedido:\n';
    mensaje += tipoPizza + '\n';
    mensaje += 'Ingredientes extras: ' + ingredientesSeleccionados + '\n';
    mensaje += comentario;
    
    // Mostrar el mensaje en el elemento con id "resultado"
    document.getElementById('resultado').innerText = mensaje;
  }
  
  function borrar() {
    // Restablecer los campos del formulario y el elemento "resultado"
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('opcion').selectedIndex = 0;
    
    var ingredientesExtras = document.querySelectorAll('.ingrediente:checked');
    ingredientesExtras.forEach(function(ingrediente) {
      ingrediente.checked = false;
    });
    
    document.getElementById('comentario').value = '';
    document.getElementById('resultado').innerText = '';
  }
