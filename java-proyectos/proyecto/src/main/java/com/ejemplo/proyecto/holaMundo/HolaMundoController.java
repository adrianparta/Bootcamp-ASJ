package com.ejemplo.proyecto.holaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {
	@GetMapping("/saludo/{name}")
	public String holaMundo(@PathVariable String name) {
		return "Hola " + name + "! Estamos probando SpringBoot";
	}
}
