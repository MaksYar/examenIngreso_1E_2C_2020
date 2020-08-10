/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
		let nombreIngr;
		let pesoIngr;
		let sexoIngr;
		let edadIngr;
		let acumuladorpersonas = 0;
		let acumuladoredad = 0;
		let flagprimeringreso = 0;
		let acumuladorf = 0;
		let pesohombremaspesado;
		let hombremaspesado;
		let confIngr;

	
		do {
			nombreIngr = prompt("Ingrese el nombre");
	
			do {
				pesoIngr = parseInt(prompt("Ingrese el peso"));
			}
			while (!(pesoIngr > 0 && pesoIngr < 150));
			do {
				sexoIngr = prompt("ingrese sexo (m/f)");
			}
			while (!(sexoIngr == "m" || sexoIngr=="f"));
			do {
				edadIngr = parseInt(prompt("Ingrese la edad"));
			}
			while (!(edadIngr > 0 && edadIngr < 120));
	
			acumuladoredad += edadIngr;
			acumuladorpersonas++;
	
			if (sexoIngr == "f") {
				acumuladorf++;
			}
			else if (sexoIngr == "m") {
				if (flagprimeringreso = 0) {
					flagprimeringreso = 1;
					pesohombremaspesado = pesoIngr;
					hombremaspesado = nombreIngr;
				}
				else if (pesoIngr > pesohombremaspesado)
				pesohombremaspesado = pesoIngr;
				hombremaspesado = nombreIngr;
			}
	
			do {
				confIngr = prompt("desea seguir ingresando? (si/no)");
			}
			while (!(confIngr == "si" || confIngr == "no"));
		}
		while (confIngr == "si");
	
	
		document.write("La cantidad de mujeres es " + acumuladorf + "<p>");
		document.write("La edad promedio total es " + acumuladoredad / acumuladorpersonas + "<p>");

		if (flagmujeringresada = 1) {
			document.write("El hombre mas pesado es " + hombremaspesado + "<p>");
		}
		

}