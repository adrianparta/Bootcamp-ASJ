package tecladoTelefono;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
	 telefono();

	}

	
	public static void telefono() {
		
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine();
		String[] textToSplit = text.split(" ");  
		String[] abcNumbers = {
				"2",
				"22",
				"222",
				"3",
				"33",
				"333",
				"4",
				"44",
				"444",
				"5",
				"55",
				"555",
				"6",
				"66",
				"666",
				"7",
				"77",
				"777",
				"7777",
				"8",
				"88",
				"888",
				"9",
				"99",
				"999",
				"9999",
				"0"
		};
		
		String[] abcText = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "};
		
		
		for(int i = 0; i<textToSplit.length;i++) {
			
			if(textToSplit[i].charAt(0) == '7' || textToSplit[i].charAt(0) == '9') {
				if(textToSplit[i].length()>4) {					
				textToSplit[i] = textToSplit[i].substring(0, ((textToSplit[i].length())%4));
				}
			}
			else if(textToSplit[i] == "0") {}
			else if(textToSplit[i].length()>3){
				textToSplit[i] = textToSplit[i].substring(0, ((textToSplit[i].length())%3));
			}
			
			for(int j = 0; j<abcNumbers.length; j++) {
				if(textToSplit[i].equals(abcNumbers[j])) {
					textToSplit[i] = abcText[j];
					break;
				}
			}
		}
		
		for(int i = 0; i<textToSplit.length;i++) {
			System.out.print(textToSplit[i]);
		}
		scanner.close();
	}
}
