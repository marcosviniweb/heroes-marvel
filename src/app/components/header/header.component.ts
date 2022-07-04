import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchIcon = faSearch
  back: boolean = false;
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  @Output() public emmitChange: EventEmitter<string> = new EventEmitter();

  constructor(
     private api: ApiService,
     private router: Router,
     ) { }

  ngOnInit() {

  }

  search(e:Event){
    const targe = e.target as HTMLInputElement
    const value = targe.value

    this.api.searchWithName(value)

  }

  filter(e:Event){
    const targe = e.target as HTMLSelectElement
    const value = targe.value;
    if(this.router.url.includes('comics'))
    this.api.ordeByComics(value);
    else this.api.ordeByHereos(value);

  }
}
