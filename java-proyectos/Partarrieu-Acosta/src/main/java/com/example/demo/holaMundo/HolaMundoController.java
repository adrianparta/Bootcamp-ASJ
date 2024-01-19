package com.example.demo.holaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

	@GetMapping("/saludo/{name}")
	public String holaMundo(@PathVariable String name) {
	    return "Hola " + name + "!";
	}
	
}

/*
 * El controlador ENTIENDE las peticiones que hace un cliente
 * Signifca que necesitamos:
 * URL
 * METODO
 * DATOS(opcional) 
 */