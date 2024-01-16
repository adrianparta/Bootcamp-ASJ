import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	static int dinero = 1000;
	static Scanner scanner = new Scanner(System.in);
	static int opcion = 1;
	static ArrayList<String> array = new ArrayList<>();
	public static void main(String[] args) {
		/*
		ATM (cajero automático)

		Crear un programa que tenga un dinero inicial.
		El programa también deberá contar con un menú con las siguientes opciones:
		  
		EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
		DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
		CONSULTAR SALDO: debe mostrar el saldo actual
		VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
		SALIR: debe terminar la ejecución del programa

		El programa debe mostrar el menú de opciones, y permitir ingresar una opción. 
		Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. 
		Si se elige SALIR, debe terminar el programa. 
		Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, 
		volver al menú de opciones. 
		Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder 
		consultarse luego, por ejemplo:
		
		ULTIMOS MOVIMIENTOS
		 
		Extraido: $50
		Depositado: $550
		Extraido: $1000
		Consultado saldo: $3400
		Depositado: $100
		otra operacion
		otra operacion
		*/
		
		
		
		do {
			System.out.println("Ingrese una opcion:");
			System.out.println("1-Extraer");
			System.out.println("2-Depositar");
			System.out.println("3-Consultar Saldo");
			System.out.println("4-Ver ultimos movimientos");
			System.out.println("0-Salir");
			opcion = scanner.nextInt();
			
			switch(opcion) {
			case 1: dinero = extraer(dinero);
			break;
			case 2: dinero = depositar(dinero);
			break;
			case 3: saldo(dinero);
			break;
			case 4: movimientos();
			break;
			case 0: break;
			default: System.out.println("Opcion incorrecta.");
			}
			
		}
		while(opcion != 0);
		System.out.println("Gracias por elegirnos. Vuelva pronto.");
		scanner.close();
		
		
		
	}
	
	private static void movimientos() {
		for(int i = 0; i< array.size(); i++) {
			System.out.println(array.get(i));
		}
		scanner.nextLine();
		System.out.println("presione enter para continuar...");
		scanner.nextLine();
	}

	private static void saldo(int dinero) {
		int dineroActual = dinero;
		System.out.println("Su saldo es: " + dineroActual);
		scanner.nextLine();
		System.out.println("presione enter para continuar...");
		scanner.nextLine();
		array.add("Consulta saldo: " + dineroActual);
	}

	private static int depositar(int dinero) {
		System.out.println("Cuanto dinero quiere depositar?");
		
		int n = scanner.nextInt();
		while(n<1) {
			System.out.println("Ingrese un numero mayor o igual a 1: ");
			n = scanner.nextInt();
		}
		scanner.nextLine();
		System.out.println("Deposito realizo con exito, tiene " + (dinero+n) + ", presione enter para continuar...");
		scanner.nextLine();
		array.add("Deposito: " + n);
		return dinero+n;
	}

	static int extraer(int dinero) {
		System.out.println("Cuanto dinero quiere retirar? tiene: " + dinero);
		
		int n = scanner.nextInt();
		while(n> dinero || n<1) {
			if(n>dinero) {
				System.out.println("fondos insuficientes, ingrese otro valor: ");
				n = scanner.nextInt();
			}
			if(n<1) {
				System.out.println("Ingrese un numero mayor o igual a 1: ");
				n = scanner.nextInt();
			}
		}
		scanner.nextLine();
		System.out.println("Extraccion realiza con exito, presione enter para continuar...");		
		scanner.nextLine();
		array.add("Retiro: " + n);
		return dinero-n;
	}
	
	
}

