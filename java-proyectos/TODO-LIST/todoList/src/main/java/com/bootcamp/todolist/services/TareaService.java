package com.bootcamp.todolist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

public class TareaService {

	@Autowired
	TareaRepository tareaRepository;
	
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
}
