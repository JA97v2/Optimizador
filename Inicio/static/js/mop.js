/*==========================================================================
    Funciones Plantas
==========================================================================*/
/* -- Función para editar registros -- */
function editarPlanta(value) {
    items = document.getElementsByClassName(value);                             // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;             // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;         // Llenar campo: nombre del modal editar
    document.getElementById('abreviacionEditar').value = items[2].innerHTML;    // Llenar campo: abreviación del modal editar
    $("#modalEditarPlanta").modal('show');                                      // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarPlanta(value) {
    items = document.getElementsByClassName(value);                                 // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;               // Llenar campo: id del modal editar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;           // Llenar campo: nombre del modal editar
    document.getElementById('abreviacionEliminar').value = items[2].innerHTML;      // Llenar campo: abreviación del modal editar
    $("#modalEliminarPlanta").modal('show');                                     // Abrir la ventana modal
}

/*==========================================================================
    Funciones Grupos
==========================================================================*/
/* -- Función para editar registros -- */
function editarGrupo(value) {
    items = document.getElementsByClassName(value);                             // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    grupo = document.getElementById(value);
    console.log(grupo.dataset.grupo)
    document.getElementById('idEditar').value = items[0].innerHTML;             // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;         // Llenar campo: nombre del modal editar
    $("#modalEditarGrupo").modal('show');                                       // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarGrupo(value) {
    items = document.getElementsByClassName(value);                         // Obtener datos de la fila del botón editar 

    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;       // Llenar campo: id del modal editar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;   // Llenar campo: nombre del modal editar
    $("#modalEliminarGrupo").modal('show');                                 // Abrir la ventana modal
}

/*==========================================================================
    Funciones Servicios
==========================================================================*/
/* -- Función para editar registros -- */
function editarServicio(value) {
    items = document.getElementsByClassName(value);                             // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;             // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;         // Llenar campo: nombre del modal editar
    $("#modalEditarServicio").modal('show');                                    // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarServicio(value) {
    items = document.getElementsByClassName(value);                                 // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;               // Llenar campo: id del modal editar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;           // Llenar campo: nombre del modal editar
    $("#modalEliminarServicio").modal('show');                                     // Abrir la ventana modal
}

/*==========================================================================
    Funciones Cargos
==========================================================================*/
/* -- Función para editar registros -- */
function editarCargo(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;                 // Llenar campo: nombre del modal editar
    document.getElementById('formacionMinimaEditar').value = items[2].innerHTML;        // Llenar campo: cedula del modal editar
    document.getElementById('especialidadHacerEditar').value = items[3].innerHTML;      // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('expMinimaAnosEditar').value = items[4].innerHTML;          // Llenar campo: celular del modal editar
    document.getElementById('salarioSMLMVEditar').value = items[5].innerHTML;           // Llenar campo: correo del modal editar
    $("#modalEditarCargo").modal('show');                                               // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarCargo(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;                   // Llenar campo: id del modal editar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;               // Llenar campo: nombre del modal editar
    document.getElementById('formacionMinimaEliminar').value = items[2].innerHTML;      // Llenar campo: cedula del modal editar
    document.getElementById('especialidadHacerEliminar').value = items[3].innerHTML;    // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('expMinimaAnosEliminar').value = items[4].innerHTML;        // Llenar campo: celular del modal editar
    document.getElementById('salarioSMLMVEliminar').value = items[5].innerHTML;         // Llenar campo: correo del modal editar
    $("#modalEliminarCargo").modal('show');                                             // Abrir la ventana modal
}

/*==========================================================================
    Funciones Personas
==========================================================================*/
/* -- Función para editar registros -- */
function editarPersona(value) {
    items = document.getElementsByClassName(value);                                 // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('nombreEditar').value = items[1].innerHTML;                 // Llenar campo: nombre del modal editar
    document.getElementById('cedulaEditar').value = items[2].innerHTML;                 // Llenar campo: cedula del modal editar
    const fecha = new Date(items[3].innerHTML);                                         // Crear objeto fecha
    document.getElementById('fechaNacimientoEditar').valueAsDate = fecha;               // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('celularEditar').value = items[4].innerHTML;                // Llenar campo: celular del modal editar
    document.getElementById('correoEditar').value = items[5].innerHTML;                 // Llenar campo: correo del modal editar
    $("#modalEditarPersona").modal('show');                                             // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarPersona(value) {
    items = document.getElementsByClassName(value);                                 // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;               // Llenar campo: id del modal editar
    document.getElementById('nombreEliminar').value = items[1].innerHTML;           // Llenar campo: nombre del modal editar
    document.getElementById('cedulaEliminar').value = items[2].innerHTML;           // Llenar campo: cedula del modal editar
    const fecha = new Date(items[3].innerHTML);                                     // Crear objeto fecha
    document.getElementById('fechaNacimientoEliminar').valueAsDate = fecha;         // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('celularEliminar').value = items[4].innerHTML;          // Llenar campo: celular del modal editar
    document.getElementById('correoEliminar').value = items[5].innerHTML;           // Llenar campo: correo del modal editar
    $("#modalEliminarPersona").modal('show');
}

/*==========================================================================
    Funciones Contratos
==========================================================================*/
/* -- Función para editar registros -- */
function editarContrato(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('plantaEditar').value = items[1].innerHTML;                // Llenar campo: nombre del modal editar
    document.getElementById('grupoEditar').value = items[2].innerHTML;                // Llenar campo: nombre del modal editar
    document.getElementById('personaEditar').value = items[3].innerHTML;                   // Llenar campo: cedula del modal editar
    document.getElementById('cargoEditar').value = items[4].innerHTML;                   // Llenar campo: cedula del modal editar
    document.getElementById('tipoDocumentoEditar').value = items[5].innerHTML;                   // Llenar campo: cedula del modal editar
    const fecha1 = new Date(items[6].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaInicioEditar').valueAsDate = fecha1;                  // Llenar campo: fechaNacimiento del modal editar
    const fecha2 = new Date(items[7].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaFinEditar').valueAsDate = fecha2;                     // Llenar campo: fechaNacimiento del modal editar
    $("#modalEditarContrato").modal('show');                                    // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarContrato(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('plantaEliminar').value = items[1].innerHTML;                // Llenar campo: nombre del modal editar
    document.getElementById('grupoEliminar').value = items[2].innerHTML;                // Llenar campo: nombre del modal editar
    document.getElementById('personaEliminar').value = items[3].innerHTML;                   // Llenar campo: cedula del modal editar
    document.getElementById('cargoEliminar').value = items[4].innerHTML;                   // Llenar campo: cedula del modal editar
    document.getElementById('tipoDocumentoEliminar').value = items[5].innerHTML;                   // Llenar campo: cedula del modal editar
    const fecha1 = new Date(items[6].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaInicioEliminar').valueAsDate = fecha1;                  // Llenar campo: fechaNacimiento del modal editar
    const fecha2 = new Date(items[7].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaFinEliminar').valueAsDate = fecha2;                     // Llenar campo: fechaNacimiento del modal editar
    $("#modalEliminarContrato").modal('show');                                    // Abrir la ventana modal
}

/*==========================================================================
    Funciones Vacaciones
==========================================================================*/
/* -- Función para editar registros -- */
function editarTiempoVacaciones(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEditar').value = items[0].innerHTML;                     // Llenar campo: id del modal editar
    document.getElementById('personaEditar').value = items[1].innerHTML;                 // Llenar campo: nombre del modal editar
    document.getElementById('tipoEditar').value = items[2].innerHTML;                   // Llenar campo: cedula del modal editar
    const fecha1 = new Date(items[3].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaInicioEditar').valueAsDate = fecha1;                  // Llenar campo: fechaNacimiento del modal editar
    const fecha2 = new Date(items[4].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaFinEditar').valueAsDate = fecha2;                     // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('diasVacacionesEditar').value = items[5].innerHTML;         // Llenar campo: celular del modal editar
    document.getElementById('diasAusenteEditar').value = items[6].innerHTML;            // Llenar campo: celular del modal editar
    document.getElementById('comentarioEditar').value = items[7].innerHTML;             // Llenar campo: correo del modal editar
    $("#modalEditarTiempoVacaciones").modal('show');                                    // Abrir la ventana modal
}
/* -- Función para eliminar registros -- */
function eliminarTiempoVacaciones(value) {
    items = document.getElementsByClassName(value);                                     // Obtener datos de la fila del botón editar 
    /* -- Editar datos de la ventana modal -- */
    document.getElementById('idEliminar').value = items[0].innerHTML;                   // Llenar campo: id del modal editar
    document.getElementById('personaEliminar').value = items[1].innerHTML;               // Llenar campo: nombre del modal editar
    document.getElementById('tipoEliminar').value = items[2].innerHTML;                 // Llenar campo: cedula del modal editar
    const fecha1 = new Date(items[3].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaInicioEliminar').valueAsDate = fecha1;                // Llenar campo: fechaNacimiento del modal editar
    const fecha2 = new Date(items[4].innerHTML);                                        // Crear objeto fecha
    document.getElementById('fechaFinEliminar').valueAsDate = fecha2;                   // Llenar campo: fechaNacimiento del modal editar
    document.getElementById('diasVacacionesEliminar').value = items[5].innerHTML;       // Llenar campo: celular del modal editar
    document.getElementById('diasAusenteEliminar').value = items[6].innerHTML;          // Llenar campo: celular del modal editar
    document.getElementById('comentarioEliminar').value = items[7].innerHTML;           // Llenar campo: correo del modal editar
    $("#modalEliminarTiempoVacaciones").modal('show');                                  // Abrir la ventana modal
}