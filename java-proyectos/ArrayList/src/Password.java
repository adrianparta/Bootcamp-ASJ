//3) Haz una clase llamada Password que siga las siguientes condiciones:
//Que tenga los atributos longitud y contraseña . Por defecto, la longitud sera de 8.
//Un constructor por defecto.
//Un constructor con la longitud que nosotros le pasemos. Generara una contraseña
//aleatoria con esa longitud.
//Los métodos que implementa serán:
//
//    -- esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
//tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
//    -- generarPassword(): genera la contraseña del objeto con la longitud que
//tenga.
//   -- Método get para contraseña y longitud.
//   -- Método set para longitud.
//
//Ahora, crea una clase clase ejecutable:
//Obtener por teclado, contraseñas ingresadas por el usuario (pueden utilizar arrays o ArrayList).
//Mostrar todas las contraseñas y si son fuertes o no
//
//Ej: 
//contraseña_1 FUERTE
//  contraseña_2 DEBIL
//  contraseña_3 FUERTE 

import java.util.Random;

public class Password {
	
	private int longitud;
	private String contrasenia;
	
	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public Password() {
		this.longitud = 8;
		this.generarPassword(this.longitud);
	}
	
	public Password(int longitud) {
		this.longitud = longitud;
		this.generarPassword(this.longitud);
	}
	
	public boolean esFuerte(String dato) {
		
		int cantMayusculas = 0;
		int cantMinusculas = 0;
		int cantNumeros = 0;
		char[] x = new char[dato.length()];
		
		for(int i=0; i<dato.length();i++) {
			x[i] = dato.charAt(i);
		}
		
		for(char character: x) {
			if(Character.isUpperCase(character)) {
				cantMayusculas ++;
			}
			if(Character.isLowerCase(character)) {
				cantMinusculas ++;
			}
			if(Character.isDigit(character)) {
				cantNumeros ++;
			}
		}
		
		if(cantMayusculas > 2 && cantMinusculas > 1 && cantNumeros > 5) {
			return true;
		}
		return false;
	}
	
	public boolean esFuerte() {
		return this.esFuerte(this.contrasenia);
	}
	
	public void generarPassword(int longitud) {
		char[] array = new char[longitud];
		for(int i=0;i<longitud;i++) {		
			Random random = new Random();
	
	        int lowerCaseRange = 'z' - 'a' + 1;
	        int upperCaseRange = 'Z' - 'A' + 1;
	        int digitRange = '9' - '0' + 1;            
	
	        int totalRange = lowerCaseRange + upperCaseRange + digitRange;
	
	        int randomNumber = random.nextInt(totalRange);
	
	        char randomChar;
	
	        if (randomNumber < lowerCaseRange) {
	            randomChar = (char) (randomNumber + 'a');
	        } else if (randomNumber < lowerCaseRange + upperCaseRange) {
	            randomChar = (char) (randomNumber - lowerCaseRange + 'A');
	        } else {
	        	randomChar = (char) (randomNumber - lowerCaseRange - upperCaseRange + '0');
	        }
	        
	        array[i] = randomChar;
		}
		
		this.contrasenia = new String(array);
        System.out.println(this.contrasenia);
        
	}
	
}
