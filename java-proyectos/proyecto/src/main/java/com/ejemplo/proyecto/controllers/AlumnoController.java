package com.ejemplo.proyecto.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ejemplo.proyecto.models.Alumno;

@RestController
public class AlumnoController {
	
	List<Alumno> alumnos = new ArrayList<Alumno>();
	
	Alumno alumno1 = new Alumno(1, "Juan", "Perez", 8.5);
	Alumno alumno2 = new Alumno(2, "Juana", "Perez", 2.0);
	Alumno alumno3 = new Alumno(3, "Hernan", "Rodriguez", 10);
	Alumno alumno4 = new Alumno(4, "Ana", "Juarez", 6.8);
	
	@GetMapping("/alumnos")
	public List<Alumno> listPersonas(){
		alumnos.add(alumno1);
		alumnos.add(alumno2);
		alumnos.add(alumno3);
		alumnos.add(alumno4);
		return alumnos;
	}
	
	@GetMapping("/alumnos/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				return alumno;
			}
		}
		return null;
	}
	
	@DeleteMapping("alumnos/{id}")
	public Alumno deleteAlumnoById(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				alumnos.remove(alumnos.indexOf(alumno));
				return alumno;
			}
		}
		return null;
	}
	
	@PostMapping("alumnos")
	public List<Alumno> postAlumno(@RequestBody Alumno alumno){
		alumnos.add(alumno);
		return this.alumnos;
	}

	@PutMapping("alumnos/{id}")
	public List<Alumno> putAlumnoById(@RequestBody Alumno alumno, @PathVariable int id){
		for (Alumno alumno1 : this.alumnos) {
			if(alumno1.getId() == id) {
				this.alumnos.set(this.alumnos.indexOf(alumno1), alumno);
				return this.alumnos;
			}
		}
		
		return null;
	}
}
