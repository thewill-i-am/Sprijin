<?php 
	$cod=$_GET["c_art"];
	$sec=$_GET["seccion"];
	$nom=$_GET["n_art"];
	require("testimonioinsertado.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	if(mysqli_connect_errno()){
		echo "Error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="INSERT INTO hoja1 (nombre,email,texto) VALUES ('$cod', '$sec', '$nom')";
	$resultados=mysqli_query($conexion,$consulta);
	if ($resultados==false){
		echo "error en la consulta";
	}
	else{
		echo "Registro Guardado";
	}
?>