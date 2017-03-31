/*function agregarPendientes() {
    var input = document.createElement("input");
    var listaPe = document.createTextNode("");
    nuevoPendiente.appendChild(listaPe);
    document.body.appendChild(nuevoPendiente)

}*/

function creaLista(){
  var pendiente = document.getElementById('pendiente').value;
  var lista = document.getElementById('lista');
  lista.innerHTML = lista;
  console.log(lista);
}
