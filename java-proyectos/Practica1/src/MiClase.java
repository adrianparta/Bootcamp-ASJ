import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
//		System.out.println("Hola Mundo");
//		System.out.println("short: " + Short.MIN_VALUE + " " + Integer.MAX_VALUE);
//		System.out.println("long: " + Long.MIN_VALUE + " " + Long.MAX_VALUE);
//		System.out.println("double: " + Double.MIN_VALUE + " " + Double.MAX_VALUE);
//		System.out.println("float: " + Float.MIN_VALUE + " " + Float.MAX_VALUE);
		
		/*
		 Dada una palabra ingresada por el usuario, 
		 mostrar su equivalente en ASCII
		 
		*/
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("ingrese una palabra, se devolverá el ASCII");
		String text = scanner.nextLine();
		scanner.close();
		String textNumbers = "";
		
		for(int i = 0; i<text.length();i++) {
			textNumbers += (int)text.charAt(i) + " ";
		}
		System.out.println(textNumbers);
		
		/*pedirle al usuario que ingrese cuantas notas quiere ingresar
		 segun eso, pedir el valor de cada nota (1 al 10)
		 sacar promedio*/
		
		
		//--------------for
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("ingrese cantidad de notas: ");
//		int cantNotas = scanner.nextInt();
//		int nota;
//		int suma = 0;
//		if(cantNotas>=1) {
//			for(int i=0; i<cantNotas; i++) {
//				do {					
//				System.out.println("ingrese la nota (1-10) n° " + (i+1));
//				nota = scanner.nextInt();
//				if(nota>10 || nota<1) {
//					System.out.println("Ingrese un numero entre 1 y 10");
//				}
//				}while(nota>10 || nota<1);
//				suma += nota;
//			}
//		}
//		else {
//			System.out.println("Ingrese un valor mayor o igual a 1");
//		}
//		System.out.println("El promedio es: " + (double)suma/cantNotas);
//		scanner.close();
//		
		//-----------------while
		
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("ingrese cantidad de notas: ");
//		int cantNotas = scanner.nextInt();
//		int nota;
//		int suma = 0;
//		int i = 0;
//		if(cantNotas>=1){
//			while(i<cantNotas){
//				do {					
//					System.out.println("ingrese la nota (1-10) n° " + (i+1));
//					nota = scanner.nextInt();
//					if(nota>10 || nota<1) {
//						System.out.println("Ingrese un numero entre 1 y 10");
//					}
//				}while(nota>10 || nota<1);
//				i++;
//				suma+=nota;
//			}
//			System.out.println("El promedio es: " + (double)suma/cantNotas);
//		}
//		else {
//		System.out.println("Ingrese un valor mayor o igual a 1");
//		}
//		scanner.close();
		
		
		//------------do while
		
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("ingrese cantidad de notas: ");
//		int cantNotas = scanner.nextInt();
//		int nota;
//		int suma = 0;
//		int i = 0;
//		if(cantNotas >= 1) {
//		do {
//			if(cantNotas<=1) {
//				break;
//			}
//			do {					
//				System.out.println("ingrese la nota (1-10) n° " + (i+1));
//				nota = scanner.nextInt();
//				if(nota>10 || nota<1) {
//					System.out.println("Ingrese un numero entre 1 y 10");
//				}
//				}while(nota>10 || nota<1);
//			i++;
//			suma+=nota;
//		}	
//		while(i<cantNotas);
//		System.out.println("El promedio es: " + (double)suma/cantNotas);
//		}
//		else {
//			System.out.println("Valor incorrecto");
//		}
//		
//		scanner.close();

		//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo
		//y se determine si el triángulo es válido o no.

		//Scanner scanner = new Scanner(System.in);

		/*int suma = 0;
		System.out.println("ingrese 3 angulos de un triangulo: ");
		System.out.println("primer angulo: ");
		suma+= scanner.nextInt();
		System.out.println("segundo angulo: ");
		suma+= scanner.nextInt();
		System.out.println("tercer angulo: ");
		suma+= scanner.nextInt();
		
		System.out.println((suma == 180) ? "valido" : "invalido");
		
		*/
		//Crear un programa que determine si un string introducido 
		//por un usuario empieza con un número o con una letra.

		/*System.out.println("ingrese un texto:");
		String texto = scanner.nextLine();
		
		try {  
		    Integer.parseInt((String) texto.subSequence(0, 1));  
		    System.out.println("Empieza con numero");
		  } catch(NumberFormatException e){  
		    System.out.println("no empieza con numero");
		  }  
		*/
		
		
		//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
		
		/*
		System.out.println("ingrese un numero: ");
		int n = scanner.nextInt();
		System.out.println("ingrese otro numero: ");
		int m = scanner.nextInt();
		int suma = 0;
		if(n<=m) {
			int i=n;
			while(i<=m) {
				if(i%2 == 0) {
					suma+=i;
				}
				i++;
			}
			System.out.println("la suma de los pares es: " + suma);
		}
		else {
			int i=m;
			while(i<=n) {
				if(i%2 == 0) {
					suma+=i;
				}
				i++;
			}
			System.out.println("la suma de los pares es: " + suma);
		}
		*/
		
		//Crear un programa que determine si un número es perfecto o no, 
		//(se dice que un número es perfecto si el número es igual a la suma de sus 
		//divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)

		/*
		 System.out.println("ingrese un numero");
		
		int n = scanner.nextInt();
		int suma = 0;
		for(int i = 1; i < n; i++) {
			if(n%i == 0) {
				suma += i;
			}
		}
		System.out.println((n == suma) ? "perfecto" : "no es perfecto");
		*/
		
		
		//Recrear el siguiente dibujo:(ver imagen)

		/*
		System.out.println("ingrese un numero");
		int n = scanner.nextInt();
		boolean flag = true;
		
		for(int i = 0; i<n; i++) {
			System.out.println((flag) ? "* * * * * * * *" : " * * * * * * *");;
			flag = !flag;
		}
		*/
		
		
		
		
		
		scanner.close();
	}
}
