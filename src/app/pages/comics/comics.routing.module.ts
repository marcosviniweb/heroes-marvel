import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ListComicsComponent } from './list-comics/list-comics.component';


const routes: Routes = [
  {path:'', component:ComicsComponent, children:[
    {path:'list', component: ListComicsComponent},
    {path:'list/:id', component: ListComicsComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
