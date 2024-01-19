package com.bootcamp.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer>{

}
