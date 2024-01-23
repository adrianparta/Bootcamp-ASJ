import { Component } from '@angular/core';
import { Video } from '../../models/video';
import { FormsModule, NgForm } from '@angular/forms';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'new-video',
  templateUrl: './new-video.component.html',
  styleUrl: './new-video.component.css'
})
export class NewVideoComponent {
  video: Video = {
    id: 0,
    title: '',
    description: '',
    url: '',
    amountLike: 0,
    amountDislike: 0,
    valoration: [],
    avgValoration: 0,
    category: '',
    views: 0
  };

  constructor(private videoService: VideoService){}

  addVideo(miForm: NgForm) {
    if(miForm.valid){
      this.videoService.post(this.video).subscribe();
      //si el post retorna true redirijimos a la lista de videos, si no, mostramos un mensaje de error
    }                
  }
}
