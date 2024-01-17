
public class Automovil {
	private String modelo;
	private int anio;
	
	public void mostrarAuto() {
		System.out.println("modelo: " + this.modelo + " año: " + this.anio);
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}
}
