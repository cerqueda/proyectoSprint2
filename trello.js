
function convertToF(celsius) {
    var cTempVal = parseFloat(document.getElementById('celsius').value);
    var farenheit = document.getElementById('farenheit');
    var fTempVal = (cTempVal * (9/5)) + 32;
    farenheit.value=fTempVal;
}

function agregarPendiente(valorNuevoItem) {
    var nuevoItem = (document.getElementById('valorNuevoItem').value);
    var listaPendientes = document.getElementById('lista');
    lista.value=listaPendientes;
}
