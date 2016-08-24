<html>
<body>

<?php 
if ($enviar) {
   // process form
   $link = mysql_connect("localhost", "root");
   mysql_select_db("test",$db);
   $sql = "INSERT INTO datos (carnet, nombres, apellidos, carrera) ".
     "VALUES ('$carnet', '$nombres', '$apellidos', '$carrera')";
   $result = mysql_query($sql);
   echo "¡Gracias! Hemos recibido sus datos.\n"; 
}else{
?> 
  
   <form method="post" action="add_reg.php3">
   Carnet   :<input type="Text" name="carnet"><br>
   Nombres  :<input type="Text" name="nombres"><br>
   Apellidos :<input type="Text" name="apellidos"><br>
   Carrera   :<input type="Text" name="carrera"><br>
   <input type="Submit" name="enviar" value="Guardar">
   </form> 
  
<?php 
} //end if 
?> 

</body>
</html> 