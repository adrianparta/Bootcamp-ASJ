import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrl: './view-video.component.css'
})
export class ViewVideoComponent implements OnInit{
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
  flag!: boolean;
  safeUrl!: SafeResourceUrl;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStar!: number;
  
  constructor(private videoService: VideoService, private route: ActivatedRoute, private sanitizer: DomSanitizer){
  }
  
  onValoration(star: number) {
    this.video.valoration.push((star+1));
    this.selectedStar = star+1;
    this.videoService.update(this.video).subscribe((data:Video) => {
      this.video = data;
    });
  }

  onLike() {
    this.video.amountLike++;
    this.videoService.update(this.video).subscribe();
  }

  onDislike() {
    this.video.amountDislike++;
    this.videoService.update(this.video).subscribe();
  }

  

  ngOnInit(): void {
    this.selectedStar = 0;
    let id: number = parseInt(this.route.snapshot.params['id']);

    this.videoService.getById(id).subscribe((data:Video)=>{
      this.video = data;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      this.video.views++;
      this.videoService.update(this.video).subscribe();
    });
  }
}
