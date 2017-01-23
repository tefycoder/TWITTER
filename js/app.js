window.addEventListener("load", function() {
	var btn = document.getElementById("btn");
	btn.disabled=true;
	var textarea = document.getElementById("textarea");
	textarea.addEventListener("keyup",function(){
		validacion();
	});
	function validacion(){
		var long = textarea.value.length;
		var textSolo = textarea.value.replace(/\s/g,"");
		if(long==0 || textSolo == 0){
			btn.disabled=true;
		}
		else{
			btn.disabled=false;
		}
	}
	btn.addEventListener("click", function() {
		agregarTarea();
		textarea.value="";
		btn.disabled=true;
	});
	function agregarTarea() {
		var contenido = textarea.value;
		var contenedor = document.getElementById("contenedor");
		var nuevaTarea= document.createElement("div");
		nuevaTarea.classList.add("nuevo");
		nuevaTarea.classList.add("checkbox");
		contenedor.appendChild(nuevaTarea);
		var label = document.createElement("label");
		var check = document.createElement("input");
		check.type = "checkbox";
		label.appendChild(check);
		nuevaTarea.appendChild(label);
		var texto = document.createTextNode(contenido);
		label.appendChild(texto);
		var icon = document.createElement("span");
		icon.classList.add("glyphicon","glyphicon-trash","icon");
		nuevaTarea.appendChild(icon);
		check.addEventListener("click", function() {
			tachar();
		});
		function tachar(){
			label.classList.toggle("tachado");
		}
		icon.addEventListener("click", function() {
			borrar();
		});
		function borrar(){
			contenedor.removeChild(nuevaTarea);
		}
	}
});