import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/Shared/Models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("");
  }

  getMovieDetails(id:number){

  }

  getMovieByGenre(genreId:number){

  }

}
