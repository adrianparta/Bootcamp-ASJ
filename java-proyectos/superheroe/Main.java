package superheroes;

public class Main {

	public static void main(String[] args) {
		
	        // Crear objetos Superhéroe
	        Superheroe spiderman = new Superheroe("Spiderman");
	        spiderman.setDescripcion("Hombre araña con traje rojo y azul");
	        spiderman.setCapa(false);

	        Dimension dimensionSpiderman = new Dimension(30, 15, 5);
	        
	        Figura figuraSpiderman = new Figura("SP001", 29.99, spiderman, dimensionSpiderman);
	        
	        Superheroe batman = new Superheroe("batman");
	        batman.setDescripcion("el hombre murcielago");
	        batman.setCapa(true);

	        Dimension dimensionBatman = new Dimension(40,20,10);
	        
	        Figura figuraBatman = new Figura("SP002", 40.0, batman, dimensionBatman);
	        // Crear objetos Dimension
	        
	        // Crear objetos Figura

	        // Crear objeto Colección
	        Coleccion coleccionSpiderman = new Coleccion("Spiderman Collection");

	        // Añadir figura a la colección
	        coleccionSpiderman.aniadirFigura(figuraSpiderman);
	        coleccionSpiderman.aniadirFigura(figuraBatman);
	        // Mostrar información de la colección
	        System.out.println(coleccionSpiderman.toString());

	        // Subir el precio de la figuraSpiderman
	        coleccionSpiderman.subirPrecio(5.00, "SP001");

	        // Mostrar información actualizada de la colección
	        System.out.println(coleccionSpiderman.toString());

	        // Mostrar figuras con capa en la colección
	        System.out.println(coleccionSpiderman.conCapa());

	        // Mostrar la figura más valiosa de la colección
	        System.out.println("Figura más valiosa:\n" + coleccionSpiderman.masValioso().toString());

	        // Mostrar el valor total de la colección
	        System.out.println("Valor total de la colección: $" + coleccionSpiderman.getValorColeccion());

	        // Mostrar el volumen total de la colección
	        System.out.println("Volumen total de la colección: " + coleccionSpiderman.getVolumenColeccion() + " cm^3");
	    

	}

}
