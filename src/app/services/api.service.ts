import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comics } from '../interfaces/comics';
import { Store } from '../store/todo.store';

@Injectable({

  providedIn: 'root'
})

export class ApiService {

  offset: number = 20;

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getHereos$: Observable<any> = this.http.get(`${environment.apiURL}/characters`)
    .pipe(tap(next => this.store.setHeroes('characters', next)));


  getImage(variant: string, thumbnail: any): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

  getHereosComics(characterId: number) {
    this.http.get(`${environment.apiURL}/characters/${characterId}/comics`)
      .subscribe(res => this.store.setComics('comics', res))

  }

  searchWithName(nameCharacter: string) {
    let params = new HttpParams()
    if (nameCharacter)
      params = new HttpParams().append('nameStartsWith', nameCharacter);

    this.http.get(`${environment.apiURL}/characters`, { params: params })
      .subscribe((res) => this.store.setHeroes('characters', res))
  }

  getMoreHereos() {
    const params = new HttpParams()
      .append('offset', this.offset)
      .append('limit', 20);
    this.offset += 20;

    return this.http.get(`${environment.apiURL}/characters`, { params: params }).pipe(map((res: any) => {
      return res.data.results;
    }));
  }

  ordeByHereos(typeOrder: string) {
    let subscribe = this.store.getHereos$.subscribe((res: any) => {
      let Heroes = res;

      Heroes.data.results = Heroes.data.results.sort(function (a: any, b: any) {
        if (typeOrder === 'asc') return a.name.localeCompare(b.name);
        else return b.name.localeCompare(a.name);
      });

      subscribe.unsubscribe;
      this.store.setHeroes('characters', Heroes)
    })
  }

  ordeByComics(typeOrder: string) {
    let subscribe = this.store.getComics$.subscribe((res: any) => {
      let Comics = res;

      Comics.data.results = Comics.data.results.sort(function (a: any, b: any) {
        if (typeOrder === 'asc') return a.title.localeCompare(b.title);
        else return b.title.localeCompare(a.title);
      });

      subscribe.unsubscribe;
      this.store.setComics('comics', Comics)
    })
  }

}
