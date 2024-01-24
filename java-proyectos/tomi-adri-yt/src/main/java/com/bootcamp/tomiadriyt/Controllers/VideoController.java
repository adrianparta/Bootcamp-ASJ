package com.bootcamp.tomiadriyt.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.tomiadriyt.ErrorHandler;
import com.bootcamp.tomiadriyt.Models.Video;
import com.bootcamp.tomiadriyt.Services.VideoService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/videos")
public class VideoController {

	@Autowired
	VideoService videoService;
	
	@GetMapping
	public ResponseEntity<List<Video>> getVideos(){
		return ResponseEntity.ok(videoService.obtenerVideos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Video>> getVideoById(@PathVariable Integer id){
		return ResponseEntity.ok(videoService.obtenerVideosById(id));
	}
	
	@PostMapping
	public ResponseEntity<Object> postVideo(@Valid @RequestBody Video video, BindingResult bindingResult) {
		
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = new ErrorHandler().validation(bindingResult);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<>(videoService.crearVideo(video), HttpStatus.OK);
	}
	
	@PutMapping
	public ResponseEntity<Video> putVideo(@RequestBody Video video) {
		return ResponseEntity.ok(videoService.modificarVideo(video));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteVideo(@PathVariable Integer id){
		return ResponseEntity.ok(videoService.eliminarVideo(id));
	}
}
