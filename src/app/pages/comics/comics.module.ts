import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics.routing.module';
import { ListComicsComponent } from './list-comics/list-comics.component';



@NgModule({
  declarations: [
    ComicsComponent,
    ListComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    FontAwesomeModule

  ]
})
export class ComicsModule { }
