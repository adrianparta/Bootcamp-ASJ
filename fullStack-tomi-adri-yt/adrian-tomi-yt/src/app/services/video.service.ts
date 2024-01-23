import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url: string = "http://localhost:8080/videos";

  constructor(private http: HttpClient) {}

  get() : Observable<Video[]>{
    return this.http.get<Video[]>(this.url);
  }

  getById(id: number) : Observable<Video>{
    return this.http.get<Video>(this.url + `/${id}`);
  }

  post(video: Video) : Observable<boolean>{
    return this.http.post<boolean>(this.url, video);
  }

  update(video: Video) : Observable<Video>{
    return this.http.put<Video>(this.url, video);
  }

  delete(id: number) : Observable<boolean> { 
    return this.http.delete<boolean>(this.url + `/${id}`);
  }

}
