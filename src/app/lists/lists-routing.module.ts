import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHomeComponentComponent } from './list-home-component/list-home-component.component';

const routes: Routes = [
  {path:'',component:ListHomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
