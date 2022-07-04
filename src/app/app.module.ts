import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './app.interceptor.module';
import { ComicsModule } from './pages/comics/comics.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from './store/todo.store';
import { HeroesModule } from './pages/heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HeroesModule,
    HttpClientModule,
    Interceptor,
    ComicsModule,
    FontAwesomeModule,

  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
