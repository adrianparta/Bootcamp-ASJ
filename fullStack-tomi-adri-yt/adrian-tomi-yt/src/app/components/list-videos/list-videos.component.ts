import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-videos',
  templateUrl: './list-videos.component.html',
  styleUrl: './list-videos.component.css'
})
export class ListVideosComponent implements OnInit {
  videos: Video[] = [];
  filter: string = '';
  categorias: string = '';

  constructor(private videoService: VideoService, private router: Router){}

  onDelete(video: Video) {
    if(confirm(`¿Desea eliminar a ${video.title}?`)){
      this.videoService.delete(video.id).subscribe( () => {this.ngOnInit()} );      
    }    
  }

  // Vemos si funciona
  ngOnInit(): void {
    this.videoService.get().subscribe((data: Video[]) => {
      this.videos = data;
    });
  }

  onView(id: number){
    this.router.navigate([`videos/${id}`]);
  }
}
