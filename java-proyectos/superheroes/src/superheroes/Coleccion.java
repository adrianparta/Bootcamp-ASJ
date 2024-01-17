package superheroes;

import java.util.ArrayList;

public class Coleccion {

	private String nombreColeccion;
	private ArrayList<Figura> listaFiguras;

	public Coleccion(String nombreDeColeccion) {
		this.nombreColeccion = nombreDeColeccion;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreDeColeccion() {
		return nombreColeccion;
	}

	public void setNombreDeColeccion(String nombreDeColeccion) {
		this.nombreColeccion = nombreDeColeccion;
	}

	public void aniadirFigura(Figura fig) {
		this.listaFiguras.add(fig);
	}

	public void subirPrecio(double cantidad, String id) {
		for (Figura figura : listaFiguras) {
			if (figura.getCodigo().equals(id)) {
				figura.subirPrecio(cantidad);
				break;
			}
		}
	}

	@Override
	public String toString() {
		StringBuilder result = new StringBuilder("Colección: " + this.nombreColeccion + "\n");
		for (Figura figura : listaFiguras) {
			result.append(figura.toString()).append("\n\n");
		}
		return result.toString();
	}

	public String conCapa() {
		StringBuilder result = new StringBuilder("Colección de figuras con capa: " + this.nombreColeccion + "\n");
		for (Figura figura : listaFiguras) {
			if (figura.getSuperheroe().isCapa()) {
				result.append(figura.toString()).append("\n\n");
			}
		}
		return result.toString();
	}
	
	public Figura masValioso() {
		
		Figura figuraMax = null;
		double precioMax = 0;
		for (Figura figura : listaFiguras) {
			if(figura.getPrecio() > precioMax) {
				figuraMax = figura;
				precioMax = figura.getPrecio();
			}
		}
		
		return figuraMax;
	}
	
	
	public double getValorColeccion() {
		double total = 0;
		for (Figura figura : listaFiguras) {
			total += figura.getPrecio();
		}
		return total;
	}
	
	public double getVolumenColeccion() {
		double volumenTotal = 0;
		for (Figura figura : listaFiguras) {
			volumenTotal += figura.getDimensiones().getVolumen();
		}
		return volumenTotal + 200;
	}

}
