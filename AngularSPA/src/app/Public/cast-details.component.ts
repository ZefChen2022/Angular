import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastService } from '../Core/Services/cast.service';
import { Cast } from '../Shared/Models/Cast';


@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  id?:number;
  cast?:Cast;
  constructor(private castService:CastService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {this.id = p['castId'];});
    this.castService.getCastDetails(this.id).subscribe(c => {this.cast = c;});
  }

}