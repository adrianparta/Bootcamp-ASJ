package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {

	@Autowired
	TareaRepository tareaRepository;
	
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	public Optional<TareaModel> obtenerTareaPorId(int id) {
		return tareaRepository.findById(id);
	}
	
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea insertada correctamente"; 
	}
	
	public String eliminarTarea(int id) {
		tareaRepository.deleteById(id);
		return "Tarea eliminada correctamente";
	}
	
	public String modificarTarea(int id, TareaModel tarea) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			t.setEstado(tarea.isEstado());
			tareaRepository.save(t);
			return "Tarea #" + id + "modificada correctamente";
		}
		return "error";
	}
}
