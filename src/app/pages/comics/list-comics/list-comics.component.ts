import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/store/todo.store';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.scss']
})
export class ListComicsComponent implements OnInit {
  id:number
  comics:any
  link:any

  backHome = faArrowAltCircleLeft
  constructor(
    private api:ApiService,
    private router:ActivatedRoute,
    private store: Store,
    private route: Router) {

    this.id = this.router.snapshot.queryParams['id'];

  }

  ngOnInit() {
    this.api.getHereosComics(this.id)
    this.store.getComics$.subscribe((res:any)=>{
      this.comics = res.data.results
    });

  }

  getImageComics(item:any){
    return this.api.getImage('portrait_fantastic', item.thumbnail)

  }

}
