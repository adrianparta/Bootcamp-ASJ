//1) Cree una clase que me permita realizar una operación matemática de 2 números. 
//(Crear los metodos y atributos necesarios)
public class OperacionMatematica {

	private double n1;
	private double n2;

	public OperacionMatematica(double a, double b) {
		this.n1 = a;
		this.n2 = b;
	}

	public double getN1() {
		return n1;
	}

	public void setN1(double n1) {
		this.n1 = n1;
	}

	public double getN2() {
		return n2;
	}

	public void setN2(double n2) {
		this.n2 = n2;
	}
	
	public void suma() {
		System.out.println("suma= " + (this.n1 + this.n2));
	}

	public void resta() {
		System.out.println("suma= " + (this.n1 - this.n2));
	}

	public void multiplicacion() {
		System.out.println("suma= " + (this.n1 * this.n2));
	}
	
	public void division() {
		System.out.println("suma= " + (this.n1 / this.n2));
	}
}
