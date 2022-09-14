import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from 'src/app/Shared/Models/Genre';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>("http://movieshopapi.azurewebsites.net/api/Genres/" );
  }

  addGenre(genre:Genre){
    return this.httpClient.post("http://localhost:7079/api/Genres/add", genre);
  }

  deleteGenre(id:number){
    return true;
  }
  
}
