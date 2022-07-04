import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { Store } from '../store/todo.store';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    Store
  ],
})
export class ComponentsModule { }
