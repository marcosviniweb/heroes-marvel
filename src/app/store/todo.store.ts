import { BehaviorSubject, map, Observable, filter } from "rxjs";
import { Comics } from "../interfaces/comics";
import { Heroes } from "../interfaces/heroes";

export interface StateHeroes {
  characters: Heroes[]
}

export interface StateComics {
  comics: Comics[]
}


const stateHeroes: StateHeroes = {
  characters: []
};

const stateComics: StateComics = {
  comics: []
};

export class Store {
  private heroes = new BehaviorSubject<StateHeroes>(stateHeroes);
  private comics = new BehaviorSubject<StateComics>(stateComics);
  private storeHeroes = this.heroes.asObservable();
  private storeComics = this.comics.asObservable();

  get valueHeroes() {
    return this.heroes.value;
  }

  getHereos$: Observable<Heroes[]> = this.storeHeroes.pipe(map(store => store.characters))

  setHeroes(name: string, state: any) {
    this.heroes.next({
      ...this.valueHeroes, [name]: state
    })
  }

  get valueComics() {
    return this.comics.value;
  }

  getComics$: Observable<Comics[]> = this.storeComics.pipe(map(store => store.comics));

  setComics(name: string, state: any) {
    this.comics.next({
      ...this.valueComics, [name]: state
    })
  }
}
