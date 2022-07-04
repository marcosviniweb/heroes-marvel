import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Store } from 'src/app/store/todo.store';

import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  showMore = 'flex'

  heroes: any;


  heroesFav: string[] = []
  todoHereos: Observable<any> | undefined;
  btnFav: boolean = false
  heartfavr = farHeart;
  heartfavs = fasHeart
  allHeroes: any;
  constructor(
    private apiService: ApiService,
    private store: Store) { }

  ngOnInit() {

    this.store.getHereos$.subscribe((res: any) => {
      this.allHeroes = res.data.results;
      this.heroes = this.allHeroes;
    })

  }

  getImageHereos(item: any) {
    return this.apiService.getImage('standard_medium', item.thumbnail)
  }

  getMoreHereos() {
    this.apiService.getMoreHereos().subscribe((res) => {
      res.map((hero: any) => this.heroes.push(hero))
    })
  }

  favOnOff() {
    if (this.btnFav == false) {
      this.btnFav = true
      console.log(this.btnFav);

    }
    else {
      this.btnFav = false
      console.log(this.btnFav);

    }

  }
  selectFav(name: string) {

    let heart = document.getElementById(name)

    if (this.heroesFav.includes(name)) {
      this.heroesFav.splice(this.heroesFav.indexOf(name), 1)
    }
    else {

      if(this.heroesFav.length < 5){
        this.heroesFav.push(name)
      }
      else{
        alert('você já tem 5 favoritos !')
      }
    }


    if (this.heroesFav.includes(name)) {
      heart!.style.color = 'red'
    }
    else {
      heart!.style.color = 'black'
    }

  }

  filterFavBtn() {

    if (this.btnFav) {
      this.heroes = this.allHeroes;
      this.btnFav = false;
    }
    else {
      this.heroes = this.allHeroes.filter((a: any) => this.heroesFav.includes(a.name));
      this.btnFav = true;
    }

    if (this.showMore == 'flex') this.showMore = 'none'
    else {
      this.showMore = 'flex'
    }
  }
  deleteHero(i:any){
    this.heroes.splice(i, 1)
  }


}

