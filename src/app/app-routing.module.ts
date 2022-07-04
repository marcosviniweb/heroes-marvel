import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';

const routes: Routes = [
  {path:'', component:HomeComponent},


  {path:'comics', component:ComicsComponent,
  loadChildren: ()=> import('./pages/comics/comics.module').then(m=>m.ComicsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
