<?php
	if(isset($_POST["button"])){
		$operacion=$_POST["operacion"];
		if (!strcmp("Escazu",$operacion)){
			echo "El resultado es ";
		}
		else
			if(!strcmp("Central",$operacion)){
				echo "El resultado es";
			}
			else
			if(!strcmp("Desamparados",$operacion)){
				echo "El resultado es";
			}
					else
						if(!strcmp("Hatillo",$operacion)){
							echo "El resultado es";
				}
					else
						if(!strcmp("Nada",$operacion)){
							echo "El resultado es";
				}

	}
?>