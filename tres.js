/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexotitularIngr;
	let lugarIngr;
	let temporadaIngr;
	let personasIngr;
	let confIngr;
	let contbariloche = 0;
	let contcataratas = 0;
	let contsalta = 0;
	let flagprimeraentrada = 0;
	let sexotitular;
	let titularmasgenerosopersonas;
	let acumuladorviajantes=0;
	let acumuladorviajesinvierno=0;
	let lugarmaselegido;


	do {
		do {
			sexotitularIngr = prompt("ingrese sexo del titular (m/f)");
		}
		while (!(sexotitularIngr == "m" || sexotitularIngr=="f"));

		do {
			lugarIngr = prompt("Ingrese destino (bariloche/cataratas/salta)");
		}
		while (!(lugarIngr == "bariloche" || lugarIngr == "cataratas" || lugarIngr == "salta"));

		do {
			temporadaIngr = prompt("Ingrese la temporada (otoño/invierno/verano/primavera)");
		}
		while (!(temporadaIngr == "primavera" || temporadaIngr == "verano" || temporadaIngr == 
		"invierno" || temporadaIngr == "otoño"));
		do {
			personasIngr = parseInt(prompt("Ingrese la cantidad de personas"));
		}
		while (isNaN(personasIngr) && !(personasIngr > 0));

		switch (lugarIngr) {
			case "bariloche":
				contbariloche++;
				break;
			case "cataratas":
				contcataratas++;
				break;
			case "salta":
				contsalta++;
				break;
		}
		if (flagprimeraentrada == 0) {
			flagprimeraentrada = 1;
			sexotitular = sexotitularIngr;  
			titularmasgenerosopersonas = personasIngr;
		}
		else if(titularmasgenerosopersonas<personasIngr){
			sexotitular = sexotitularIngr;  
			titularmasgenerosopersonas = personasIngr;
		}
		if(temporadaIngr=="invierno"){
			acumuladorviajantes++;
			acumuladorviajesinvierno+=personasIngr;

		}

		do {
			confIngr = prompt("desea seguir ingresando? (si/no)");
		}
		while (!(confIngr == "si" || confIngr == "no"));
	}
	while (confIngr == "si");

		if(contbariloche>contcataratas || contbariloche>contsalta){
		lugarmaselegido="Bariloche";
		}
		else if(contbariloche<contcataratas || contcataratas>contsalta){
		lugarmaselegido="Cataratas";
		}
		else if(contsalta>contcataratas || contsalta>contbariloche){
			lugarmaselegido="Salta";
		}
		else{
		lugarmaselegido="hay empate, los parquetes vedidos fueron " +contbariloche+ " para Bariloche, " + contcataratas + " para Cataratas y "+ contsalta+ " para Salta";
		}

		
		document.write("El lugar es "+ lugarmaselegido+ "<p>");
		document.write("El sexo del titular que lleva mas pasajeros es " + sexotitular + "<p>");
		if(acumuladorviajantes==0){
		acumuladorviajantes=1;
		}
		document.write("El promedio de personas por viaje en invierno es "+ (acumuladorviajesinvierno/acumuladorviajantes).toFixed(2));
}
