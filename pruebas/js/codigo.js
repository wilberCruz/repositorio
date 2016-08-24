$(document).on("ready",inicio);
function inicio () {
	//alert("Inicio del Sitio Web");
	$(".button-collapse").sideNav();
	$("#publicar").on("click",ver);
	$("#publicarr").on("click",ver);
	$("#enviar").on("click",envio);
	function ver () {
	$("#formulario").slideToggle();
	}



	function envio(){
     var nombre=$("input[name=docente]").val();
     var categoria=$("input[name=categoria]").val();
 	var horario=$("input[name=horario]").val();
      //alert(nombre +  "    " +categoria+ "    " +horario);

      var articulo='<div class="col s12 m6 l4"> \
					<div class="card orange accent-3"> \
						<div class="card-content white-text"> \
							<h5 class="center card-title" class="card-title">Información Docente</h5><hr> \
							<img class="responsive.img"src="img/avatar.png" alt=""></img><br> \
							<p><stron>Nombre del Docente:'+nombre+'</stron></p> \
							<p><stron>Categoria Docente:'+categoria+'</stron></p> \
							<p><stron>Horario del Docente:'+horario+'</stron></p \
						</div> \
						<div class="card-action"> \
							<a class="black-text"href="#">Borrar</a> \
						</div> \
					</div>';
		$(".row").prepend(articulo);
		$("#formulario").slideUp();	
		$("input[type=text]").val("");
	}

}

