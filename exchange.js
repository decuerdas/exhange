function exchange(){
		try{
		var value = parseFloat(document.getElementById('valor').value) || 0;
		var dato = parseFloat(document.getElementById('dato').value) || 0;
		var result;
		document.getElementById("result").value = valor * dato
			} catch (e) {}
	}
