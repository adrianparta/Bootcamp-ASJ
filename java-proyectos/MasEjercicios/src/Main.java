import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void ejercicio2() {

		//Escribe un programa que lea 15 números por teclado y que los 
		//almacene en un array. Rota los elementos de ese array, es decir, 
		//el elemento de la posición 0 debe pasar a la posición 1, el de la 1 a la 2, etc. 
		//El número que se encuentra en la última posición debe pasar a la posición 0. 
		//Finalmente, muestra el contenido del array.

				Scanner scanner = new Scanner(System.in);
				int[] array = new int[15];
				System.out.println("ingrese 15 numeros:");
				for(int i = 0; i<15; i++) {
					System.out.println("n°" + (i+1) + ": ");
					array[i] = scanner.nextInt();
				}
				
				
				System.out.println("Array modificado:");
				System.out.println(array[14]);
				for(int i=1;i<15;i++) {
					System.out.println(array[i-1]);
				}
				
				scanner.close();
	}
	public static void ejercicio3() {
		//Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100
		//y que los almacene en un array. El programa debe ser capaz de pasar 
		//todos los números pares a las primeras posiciones del array 
		//(del 0 en adelante) y todos los números impares a las celdas restantes. 
		//Utiliza arrays auxiliares si es necesario.
		
		int[] array = new int[20];
		int[] arrayAux = new int[20];
		int aux = 0;
		int aux2 = 19;
		System.out.println("numero random: ");
		for(int i=0; i<20;i++) {
			array[i] = (int) (Math.random()*101);
			System.out.println(array[i]);
			if(array[i] % 2 == 0) {
				arrayAux[aux] = array[i];
				aux++;
			}
			else {
				arrayAux[aux2] = array[i];
				aux2--;
			}
		}
		System.out.println("numeros ordenados");
		for(int i=0; i<20;i++) {
			System.out.println(arrayAux[i]);
		}
		
		
	}
	public static void ejercicio4()	{
		//Generar una matriz de 3×3 con números aleatorios sin repetirse.
		
		int[][] matriz = new int[3][3];
		int[] array = {-1,-1,-1,-1,-1,-1,-1,-1,-1};
		boolean flag = false;
		for(int i=0; i<3;i++) {
			for(int j=0; j<3;j++) {
				do{
					matriz[i][j] = (int)(Math.random()*101);
					flag = false;
					for(int w=0; w<9;w++) {
						if(matriz[i][j] == array[w]) {
							flag = true;
						}
					}
				}
				while(flag);
				array[(i*3)+j] = matriz[i][j];
				
			}
		}
		for(int i=0; i<3;i++) {
			for(int j=0; j<3;j++) {
				System.out.println(matriz[i][j]);
			}
		}
		
	}
	public static void ejercicio5() {
		//Dada la matriz anterior, 
		//realizar la suma de una columna o fila aleatoria 
		//(preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
		//Extra: mostrar el resultado al final de la fila/columna correspondiente
		

		int[][] matriz = new int[3][3];
		int[] array = {-1,-1,-1,-1,-1,-1,-1,-1,-1};
		boolean flag = false;
		for(int i=0; i<3;i++) {
			for(int j=0; j<3;j++) {
				do{
					matriz[i][j] = (int)(Math.random()*101);
					flag = false;
					for(int w=0; w<9;w++) {
						if(matriz[i][j] == array[w]) {
							flag = true;
						}
					}
				}
				while(flag);
				array[(i*3)+j] = matriz[i][j];	
			}
		}
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("ingrse true para filas, false para columnas:");
		boolean filOCol = scanner.nextBoolean();
		System.out.println("ingrese un numero de fila o columna");
		int n = scanner.nextInt() -1;
		int acumulador = 0;
		scanner.close();
		
		if(filOCol) {
			for(int i=0; i<3;i++) {
				acumulador += matriz[n][i];
			}
					
			for(int i=0; i<3;i++) {
				for(int j=0; j<3;j++) {
					System.out.print(matriz[i][j] + " ");
				}
				if(i == n) {
					System.out.print(acumulador);
				}
				System.out.print("\n");
			}
		}
		else {
			for(int i=0; i<3;i++) {
				acumulador += matriz[i][n];
			}
					
			for(int i=0; i<3;i++) {
				for(int j=0; j<3;j++) {
					System.out.print(matriz[i][j] + " ");
				}
				System.out.print("\n");
			}
			
			for(int i=0; i<n;i++) {
				System.out.print("   ");
			}
			System.out.print(acumulador);
		}
		
	}
	public static void ejercicio6() {
			//Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:

			//Rellenar TODA la matriz de números, debes pedírselo al usuario.
			//Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
			//Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
			//Sumar la diagonal principal (ver ejemplo)
			//Sumar la diagonal inversa (ver ejemplo)
			//La media de todos los valores de la matriz
		
			int[][] matriz = new int[4][4];
			Scanner scanner = new Scanner(System.in);
			int fila;
			int suma = 0;
			int columna;
			System.out.println("insegrese 16 valores, llenaran una matriz de 4x4");
			for(int i=0; i<4;i++) {
				for(int j=0; j<4;j++) {
					System.out.println((i+1) + "x" + (j+1) + ":");
					matriz[i][j] = scanner.nextInt();
				}
			}
			
			System.out.println("esta es su matriz:");
			for(int i=0; i<4;i++) {
				for(int j=0; j<4;j++) {
					System.out.print(matriz[i][j] + " ");
				}
				System.out.println();
			}
			
			
			do {
				System.out.println("ingrese el numero de una fila (1-4), se hara la suma: ");
				fila = (scanner.nextInt()) - 1;
			}while(fila<1 || fila>4);
			
			suma = 0;
			for(int i=0; i<4;i++) {
				suma += matriz[fila][i];
			}
			
			System.out.println("La suma es: " + suma);
			
			do {
				System.out.println("ingrese el numero de una columna (1-4), se hara la suma: ");
				columna = (scanner.nextInt()) -1;
			}while(columna<1 || columna>4);
			
			suma = 0;
			for(int i=0; i<4;i++) {
				suma += matriz[i][columna];
			}
			
			System.out.println("La suma es: " + suma);
			
			suma = 0;
			for(int i=0; i<4;i++) {
				suma += matriz[i][i];
			}
			
			System.out.println("la suma de la diagonal principal es: " + suma);
			
			suma = 0;
			for(int i=0, j=3; i<4;i++, j--) {
				suma += matriz[i][j];
			}
			
			System.out.println("la suma de la diagonal inversa es: " + suma);
			suma = 0;
			double prom;
			for(int i=0; i<4;i++) {
				for(int j=0; j<4;j++) {
					suma += (matriz[i][j]);
				}
			}
			prom= (double)suma/16;
			
			System.out.println("la media de los valores de la matriz es: " + prom);
			scanner.close();
	}
	public static void ejercicio7() {
			//Queremos realizar una encuesta a 10 personas, en esta encuesta indicaremos el sexo 
			//(1=masculino, 2=femenino), si trabaja (1=si trabaja, 2= no trabaja) 
			//y su sueldo (si tiene un trabajo, sino sera un cero) estará entre 600 y 2000 (valor entero). 
			//Los valores pueden ser generados aleatoriamente. Calcula y muestra lo siguiente:
			//Porcentaje de hombres (tengan o no trabajo).
			//Porcentaje de mujeres (tengan o no trabajo).
			//Porcentaje de hombres que trabajan.
			//Porcentaje de mujeres que trabajan.
			//El sueldo promedio de las hombres que trabajan.
			//EL sueldo promedio de las mujeres que trabajan.
			//Usa todos los métodos que veas necesarios, piensa que es aquello que se repite o que puede
			//ser mejor tenerlo por separado.
			
		int[] sexo = new int[10];
		int[] trabaja = new int[10];
		int[] sueldo = new int[10];
		Scanner scanner = new Scanner(System.in);
		for(int i=0; i<10;i++) {
			System.out.println("sexo(1masculino, 2 femenino): ");
			sexo[i] = scanner.nextInt();
			
			System.out.println("trabaja? 1 para si, 2 para no");
			trabaja[i] = scanner.nextInt();
			
			if(trabaja[i] == 2) {
				sueldo[i] = 0;
			}
			else {
			System.out.println("sueldo (entre 600 y 2000):");
			sueldo[i] = scanner.nextInt();
			}
		}
		
		int hombres = 0;
		int mujeres = 0;
		for(int i=0; i<10;i++) {
			if(sexo[i] == 1) {
				hombres++;
			}
			else {
				mujeres++;
			}
		}
		System.out.println("El porcentaje de hombres es: " + hombres+0 + "%");
		System.out.println("El porcentaje de mujeres es: " + mujeres+0 + "%");
		
		int hombresTrabajan = 0;
		int mujeresTrabajan = 0;
		for(int i=0; i<10;i++) {
			if(sexo[i] == 1 && trabaja[i] == 1) {
				hombresTrabajan++;
			}
			else if(sexo[i] ==2 && trabaja[i] == 1){
				mujeresTrabajan++;
			}
		}
		
		System.out.println("El porcentaje de hombres que trabaja es: " + (hombresTrabajan*10)/hombres+0 + "%");
		System.out.println("El porcentaje de mujeres que trabaja es: " + (mujeresTrabajan*10)/mujeres+0 + "%");
		
		double sueldoPromHombres = 0;
		double sueldoPromMujeres = 0;
		
		for(int i=0; i<10;i++) {
			if(sexo[i] == 1 && trabaja[i] == 1) {
				sueldoPromHombres += sueldo[i];
			}
			else if(sexo[i] ==2 && trabaja[i] == 1){
				sueldoPromMujeres += sueldo[i];
			}
		}
		
		System.out.println("El promedio de sueldos de los hombres que trabajan es: " + sueldoPromHombres/hombres);
		System.out.println("El promedio de sueldos de las mujeres que trabajan es: " + sueldoPromMujeres/mujeres);
		
		
		scanner.close();
	}
	public static void ejercicio8() {
		//Cifrado Cesar
		//Crear un programa que codifique el texto ingresado por el usuario, utilizando el cifrado de Cesar. 
		//Los carácteres no-alfabéticos no son transformados.
		//El Cifrado de Caesar es uno de los métodos de codificación conocidos más antiguos. 
		//Es muy simple, sólo se cambian las posiciones del alfabeto. 
		//La transformación se denomina ROTn, donde "n" es el valor de cambio de posiciones y 
		//ROT significa "ROTAR", porque es un cambio cíclico.
		//Por ejemplo, ROT2 significa que "a" se vuelve "c", "b" se vuelve "d" y al final "y" 
		//se vuelve "a", y "z" se vuelve "b". 
		//La cantidad de transformaciones posibles depende de la longitud del alfabeto. Para Español sólo llega a 27.
	
		Scanner scanner = new Scanner(System.in);
		System.out.println("ingrese un texto: ");
		String text = scanner.nextLine();
		System.out.println("ingrese cantidad de caracteres a mover: ");
		int cant = scanner.nextInt();
		text = text.toLowerCase();
		char[] characters = new char[text.length()];
		char[] abc = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
		
		for(int i=0; i<characters.length;i++) {
			characters[i] = text.charAt(i);
			for (int j = 0; j<27; j++) {
			    if (characters[i] == abc[j]) {
			    	if(j > (26-cant)) {
			    		characters[i] = abc[j-(27-cant)];
			    	}
			    	else {
			    		characters[i] = abc[j+cant];
			    	}
			        break;
			    }
			}
		}
		
		String newText = new String(characters);
		System.out.println("La palabra cifrada es: " + newText);
	
	}
	
	public static void main(String[] args) {
		
		System.out.println("que ejercicio? ");
		Scanner scanner = new Scanner(System.in);
		int ejercicio = scanner.nextInt();
		switch(ejercicio) {
		case 2: ejercicio2();
		break;
		case 3: ejercicio3();
		break;
		case 4: ejercicio4();
		break;
		case 5: ejercicio5();
		break;
		case 6: ejercicio6();
		break;
		case 7: ejercicio7();
		break;
		case 8: ejercicio8();
		break;
		}
		scanner.close();
	}

}
