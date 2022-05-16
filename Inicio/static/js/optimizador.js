/*==========================================================================
    Funciones Plantas
==========================================================================*/
/* -- Función para editar registros -- */
function editarPlanta(value) {
    items = document.getElementsByClassName(value);                             // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;                 // Llenar campo: nombre del modal editar
    document.getElementById('limiteInferiorEditar').value = items[2].innerHTML;         // Llenar campo: abreviación del modal editar
    document.getElementById('limiteSuperiorEditar').value = items[3].innerHTML;         // Llenar campo: abreviación del modal editar
    document.getElementById('despachoOptimoEditar').value = items[4].innerHTML;         // Llenar campo: abreviación del modal editar
    document.getElementById('factorDeConversionEditar').value = items[5].innerHTML;     // Llenar campo: abreviación del modal editar
    document.getElementById('coeficienteGrado3Editar').value = items[6].innerHTML;      // Llenar campo: abreviación del modal editar
    document.getElementById('coeficienteGrado2Editar').value = items[7].innerHTML;      // Llenar campo: abreviación del modal editar
    document.getElementById('coeficienteGrado1Editar').value = items[8].innerHTML;      // Llenar campo: abreviación del modal editar
    document.getElementById('coeficienteGrado0Editar').value = items[9].innerHTML;      // Llenar campo: abreviación del modal editar
    $("#modalEditarPlanta").modal('show');                                              // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarPlanta(value) {
    items = document.getElementsByClassName(value);                                         // Obtener datos de la fila del botón eliminar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;                       // Llenar campo: id del modal eliminar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;                   // Llenar campo: nombre del modal eliminar
    document.getElementById('limiteInferiorEliminar').value = items[2].innerHTML;           // Llenar campo: abreviación del modal eliminar
    document.getElementById('limiteSuperiorEliminar').value = items[3].innerHTML;           // Llenar campo: abreviación del modal eliminar
    document.getElementById('despachoOptimoEliminar').value = items[4].innerHTML;           // Llenar campo: abreviación del modal eliminar
    document.getElementById('factorDeConversionEliminar').value = items[5].innerHTML;       // Llenar campo: abreviación del modal eliminar
    document.getElementById('coeficienteGrado3Eliminar').value = items[6].innerHTML;        // Llenar campo: abreviación del modal eliminar
    document.getElementById('coeficienteGrado2Eliminar').value = items[7].innerHTML;        // Llenar campo: abreviación del modal eliminar
    document.getElementById('coeficienteGrado1Eliminar').value = items[8].innerHTML;        // Llenar campo: abreviación del modal eliminar
    document.getElementById('coeficienteGrado0Eliminar').value = items[9].innerHTML;        // Llenar campo: abreviación del modal eliminar
    $("#modalEliminarPlanta").modal('show');                                                // Abrir la ventana modal
}
