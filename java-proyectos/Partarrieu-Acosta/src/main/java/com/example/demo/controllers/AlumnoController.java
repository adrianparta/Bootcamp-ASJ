package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Alumno;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class AlumnoController {

	List<Alumno> alumnos = new ArrayList<Alumno>(
			List.of(new Alumno(1, "Bob", "Patiño", 9.5), new Alumno(2, "Moe", "Sczyslak", 4),
					new Alumno(3, "Troy", "McLure", 2.6), new Alumno(4, "Edna", "Krabaples", 8.7)));

	@GetMapping("/alumnos")
	public List<Alumno> getAlumnos() {
		return alumnos;
	}

	@GetMapping("/alumnos/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				return alumno;
			}
		}
		return null;
	}

	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				alumnos.remove(alumnos.indexOf(alumno));
				return "Eliminando el alumno " + id;
			}
		}
		return null;
	}

	@PostMapping("/alumnos/post")
	public String postAlumno(@RequestBody Alumno alumno) {
		alumnos.add(alumno);
		return "Se creo con exito";
	}

	@PutMapping("/alumnos/put/{id}")
	public String updateAlumno(@PathVariable int id, @RequestBody Alumno alumnoUpdate) {
	    for(Alumno a: alumnos) {
	        if(a.getId() == id){
	            a.setNombre(alumnoUpdate.getNombre());
	            a.setApellido(alumnoUpdate.getApellido());
	            a.setNota(alumnoUpdate.getNota());
	            return "Se actualizo correctamente al alumno " + id;
	        }
	    }
	    return "No se encontro al alumno " + id;
	}
	
}
