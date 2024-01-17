package superheroes;

import java.util.ArrayList;

class Figura {
    private String codigo;
    private double precio;
    private Superheroe superheroe;
    private Dimension dimensiones;

    // Lista estática para almacenar códigos existentes y garantizar su unicidad
    private static ArrayList<String> codigosExistentes = new ArrayList<>();

    // Constructor
    public Figura(String codigo, double precio, Dimension dimensiones, Superheroe superheroe) {
        // Verificar la unicidad del código antes de asignarlo
        if (esCodigoUnico(codigo)) {
            this.codigo = codigo;

            // Agregar el nuevo código a la lista de códigos existentes
            codigosExistentes.add(codigo);
        } else {
            throw new IllegalArgumentException("El código '" + codigo + "' ya está en uso.");
        }

        this.precio = precio;
        this.dimensiones = dimensiones;
        this.superheroe = superheroe;
    }

    public void setCodigo(String codigo) {
        if (esCodigoUnico(codigo)) {
            codigosExistentes.remove(this.codigo);
            this.codigo = codigo;
            codigosExistentes.add(codigo);
        } else {
            throw new IllegalArgumentException("El código '" + codigo + "' ya está en uso.");
        }
    }

    // Método toString
    @Override
    public String toString() {
        return "Código: " + codigo + "\nPrecio: " + precio + "\n" + superheroe + "\n" + dimensiones;
    }

    // Método modificador adicional
    public void subirPrecio(double cantidad) {
        this.precio += cantidad;
    }

    // Método para verificar la unicidad del código
    private boolean esCodigoUnico(String codigo) {
        return !codigosExistentes.contains(codigo);
    }

	public Superheroe getSuperheroe() {
		return this.superheroe;
	}

	public double getPrecio() {
		return this.precio;
	}

	public Dimension getDimensiones() {
		return this.dimensiones;
	}

	public String getCodigo() {
		return this.codigo;
	}
}
