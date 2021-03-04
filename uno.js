
function mostrar()
{

	let nombre;
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let contador;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let acumuladorAlcohol;
	let acumuladorIac;
	let acumuladorQuat;
	let contadorAlcohol;
	let contadorIac;
	let contadorQuat;
	let acumuladorDesinfectante;
	let contadorDesinfectante;
	let acumuladorBactericida;
	let contadorBactericida;
	let acumuladorDetergente;
	let contadorDetergente;
	let acumuladorDetergenteMenos;
	let precioMasCaro;
	let categoriaMasCaro;
	let fabricanteMasCaro;


    contador = 0;
	acumuladorAl = 0;
	contadorAl = 0;
	contadorIac = 0;
	acumuladorIac = 0;
	promedioQuat = 0;
	acumuladorQuat = 0;
	contadorQuat = 0;
	acumuladorDesinfectante = 0;
	acumuladorBactericida = 0;
	acumuladorDetergente = 0;
	contadorDesinfectante = 0;
	contadorBactericida = 0;
	contadorDetergente = 0;
	acumuladorDetergenteBarato = 0;
	precioMasCaro = 0;
	categoriaMasCaro = 0;
	fabricanteMasCaro = 0;


	for(let i = 0; i < 5; i++)
	{
	nombre = prompt("Ingrese el nombre del producto");

		tipoProducto = prompt("Ingrese el tipo de producto: alcohol, iac o quat.");
		while(isNaN(tipo) == false || tipo != "alcohol" && tipo != "iac" && tipo != "quat")
	{
		tipo = prompt("Error. Ingrese producto valido ");
	}
	precio = parseFloat(prompt("Ingrese el precio(entre 100 y 300)"));
	while(isNaN(precio) || precio < 100 || precio > 300){
		precio = parseFloat(prompt("Error. Ingrese el precio(entre 100 y 300)"));
	{
	cantidad = parseInt(prompt("Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	while(isNaN(cantidad) || cantidad <= 0 || cantidad >1000){
	cantidad = parseInt(prompt("Error. Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
	}
        categoria = prompt("Ingrese una de las 3 categorias: desinfectante, bactericida o detergente");
    }
       fabricante = prompt( "Ingrese el fabricante deseado");

	







}
