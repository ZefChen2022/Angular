import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/Shared/Models/Movie';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/Shared/Models/Movie-Details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("http://movieshopapi.azurewebsites.net/api/Movies/top-grossing");
  }

  getMovieDetails(id:number):Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>("https://movieshopapi.azurewebsites.net/apt/Movies/" + id);
  }

  getMovieByGenre(genreId:number){

  }

}
