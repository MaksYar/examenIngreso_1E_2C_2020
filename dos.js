/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marcaIngr;
	let precioIngr;
	let pesoIngr;
	let tipoIngr;
	let acumuladorpeso = 0;
	let marcasolidomasbarato;
	let preciosolidomasbarato;
	let marcaLiquidomascaro;
	let precioLiquidomascaro;
	let flagprimeringresoliquido = 0;
	let flagprimeringresosolido = 0;


	do {
		marcaIngr = prompt("Ingrese la marca");

		do {
			precioIngr = parseInt(prompt("Ingrese el precio"));
		}
		while (isNaN(precioIngr));
		do {
			pesoIngr = parseInt(prompt("ingrese el peso"));
		}
		while (isNaN(pesoIngr));
		do {
			tipoIngr = prompt("Ingrese si es solido o liquido");
		}
		while (!(tipoIngr == "solido" || tipoIngr == "liquido"));


		acumuladorpeso += pesoIngr;

		if (tipoIngr == "liquido") {
			if (flagprimeringresoliquido == 0) {
				flagprimeringresoliquido = 1;
				marcaLiquidomascaro = marcaIngr;
				precioLiquidomascaro = precioIngr;
			}
			else if (precioLiquidomascaro < precioIngr) {
				marcaLiquidomascaro = marcaIngr;
				precioLiquidomascaro = precioIngr;
				}
			}
			if (tipoIngr == "solido") {
				if (flagprimeringresosolido == 0) {
					flagprimeringresosolido = 1;
					preciosolidomasbarato = precioIngr;
					marcasolidomasbarato = marcaIngr;
				}
				else if (preciosolidomasbarato > precioIngr) {
					marcasolidomasbarato = marcaIngr;
					preciosolidomasbarato = precioIngr;
					}
				}

		do {
			confIngr = prompt("desea seguir ingresando? (si/no)");
		}
		while (!(confIngr == "si" || confIngr == "no"));
	}
	while (confIngr == "si");

	document.write("El peso total de la compra es "+ acumuladorpeso + "kilogramos <p>");
	document.write("La marca del mas caro de los liquidos es "+ marcaLiquidomascaro + "<p>");
	document.write("La marca del mas barato de los solidos es " + marcasolidomasbarato + "<p>");
}
