import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		System.out.println("seleccione un ejercicio (1-4)");
		Scanner s = new Scanner(System.in);
		switch(s.nextInt()) {
		case 1: ej1();
		break;
		case 2: ej2();
		break;
		case 3: ej3();
		break;
		case 4: ej4();
		break;
		}
	}

	
	public static void ej1() {
		System.out.println("------Ejercicio 1 ------");
		OperacionMatematica x = new OperacionMatematica(2.0,4.0);
		
		x.suma();
		x.resta();
		x.multiplicacion();
		x.division();
	}
	
	public static void ej4() {
		System.out.println("------Ejercicio 4 ------");
		
		//Crea 3 objetos: el primer objeto obtendrá los datos pedidas por teclado (nombre edad, sexo, peso y altura), el segundo objeto 
		//obtendrá por teclado todos los datos anteriores menos el peso y la altura, y el último por defecto.
		//Para cada objeto, deberá comprobar si esta en su peso ideal, tiene sobrepeso o por debajo de su peso ideal 
		//con un mensaje.
		//Indicar para cada objeto si es mayor de edad.
		//Por último, mostrar la información de cada objeto.
		Scanner scanner = new Scanner(System.in);
		System.out.println("ingrese nombre: ");
		String nombre = scanner.nextLine();
		System.out.println("ingrese edad: ");
		int edad = scanner.nextInt();
		scanner.nextLine();
		System.out.println("ingrese sexo (H para hombre, M para mujer): ");
		char sexo = scanner.nextLine().charAt(0);
		System.out.println("ingrese peso en kg: ");
		double peso = scanner.nextDouble();
		System.out.println("ingrese altura en m: ");
		double altura = scanner.nextDouble();
		
		Persona p1 = new Persona(nombre, edad, sexo, peso, altura);
		Persona p2 = new Persona(nombre, edad, sexo);
		Persona p3 = new Persona();
		
		System.out.println("IMC persona 1: " + p1.calcularIMC());
		System.out.println("persona 1:" + ((p1.esMayorDeEdad())? "mayor " : "menor ") + "de edad.");
		System.out.println("persona 1: "+ p1.toString());
		
		System.out.println("-----------");
		
		System.out.println("IMC persona 2: " + p2.calcularIMC());
		System.out.println("persona 2:" + ((p2.esMayorDeEdad())? "mayor " : "menor ") + "de edad.");
		System.out.println("persona 2: "+ p2.toString());
		
		System.out.println("-----------");
		
		System.out.println("IMC persona 3: " + p3.calcularIMC());
		System.out.println("persona 3:" + ((p3.esMayorDeEdad())? "mayor " : "menor ") + "de edad.");
		System.out.println("persona 3: "+ p3.toString());
		
		scanner.close();
	}

	public static void ej2() {
		System.out.println("------Ejercicio 2 ------");
		
		Cuenta cuenta = new Cuenta("Adrian Partarrieu", 100);
		
		cuenta.saldo();
		cuenta.ingresar(20.3);
		cuenta.saldo();
		cuenta.retirar(100);
		cuenta.saldo();
		cuenta.retirar(2000);
		cuenta.saldo();
	}

	public static void ej3() {
		System.out.println("------Ejercicio 3 ------");
		Password pass = new Password(10);
		System.out.println(pass.esFuerte());
		
		Scanner scanner = new Scanner(System.in);
		boolean seguir = true;
		ArrayList<String> contrasenias = new ArrayList<String>();
		
		while(seguir) {
			System.out.println("ingrese una contraseña: ");
			contrasenias.add(scanner.nextLine());
			System.out.println("quiere ingresar otra?");
			seguir = scanner.nextBoolean();
			scanner.nextLine();
		}
		
		System.out.println("-------");
		for(String contrasenia: contrasenias) {
			pass.setLongitud(contrasenia.length());
			System.out.println(contrasenia + (pass.esFuerte(contrasenia)? " Fuerte" : " Debil"));
		}
		scanner.close();
	}
}

