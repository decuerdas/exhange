
// This funtion is by calculate the money change, whith 
//reference money in the list on html document
//function exchange(){
//			try {
//				var valor = parseFloat(document.getElementById('valor').value) || 0;
//				var dato = parseFloat(document.getElementById('dato').value) || 0;
//				var result;
//				document.getElementById("result").value = valor * dato;
//				} catch (e) {}
//					}

//Creamos una constante con la url de la api a consultar y la llave de ser necesaria
//  https://freecurrencyapi.net/api/v2/latest?apikey=47b7cd50-6383-11ec-a653-cb13bb79c8e2   
//          esta es la dirección de  la api             esta es la llave de usuario       
const API_URL = "https://freecurrencyapi.net/api/v2/latest?apikey=47b7cd50-6383-11ec-a653-cb13bb79c8e2";

//creamo un objeto para manejar la respuesta con XMLHttpRequest
const xhr = new XMLHttpRequest();
// Creamos una funcion para verificar el estatus de la respuesta del servidor
function onRequestHandler(){
// ready state 4 es entrega completa y status 200 es respuesta satisfactoria
		if (this.readyState == 4 && this.status == 200){
//Imprimimos en consola para ver la respuesta
			console.log(this.response);
//creamos una constante para poder manipular los datos
		const data = JSON.parse(this.response);
		//console.log(data);
//creamos el objeto para que nos responda en el html
		const HTMLResponse = document.querySelector("#lista");
//		var tpl = data.map((query){
//			console.log(data)});
		//});
		const tpl = data.map((data) => `<li>${data}</li>`);
		//HTMLResponse.innerHTML = '<ul>${tpl}</ul>';
// imprime el contenido en la etiqueta html con el nombre del id del campo
		document.querySelector("#lista").innerHTML = JSON.stringify(tpl);
		
	}
}
//Esta linea llama a la funcion para iniciar el llamado de la api
xhr.addEventListener("load", onRequestHandler);
//Esta linea usa el metodo open y recibe paramettros de petición con el metodo GET y la variable de la direccion
xhr.open("GET", `${API_URL}`);
//con esta linea llamamos al servidor para descargar los datos de la api
xhr.send();