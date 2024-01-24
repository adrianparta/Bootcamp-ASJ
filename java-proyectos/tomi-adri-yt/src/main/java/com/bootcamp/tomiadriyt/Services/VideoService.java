package com.bootcamp.tomiadriyt.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.tomiadriyt.Models.Video;
import com.bootcamp.tomiadriyt.Repositories.VideoRepository;

@Service
public class VideoService {

	@Autowired
	VideoRepository videoRepository;
	
	public List<Video> obtenerVideos(){
		return videoRepository.findAll();
	}
	
	public Optional<Video> obtenerVideosById(Integer id) {
		return videoRepository.findById(id);
	}
	
	public String crearVideo(Video video) {
		video.setAvgValoration();
		videoRepository.save(video);
		return "creado con exito";
	}
	
	public Video modificarVideo(Video video) {
		if(videoRepository.findById(video.getId()) != null) {
			video.setAvgValoration();
			return videoRepository.save(video);
			
		}
		return null;
	}
	
	public Boolean eliminarVideo(Integer id) {
		videoRepository.deleteById(id);
		return true;
	}
}
