import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponentComponent } from './list-home-component/list-home-component.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItewlistComponent } from './itewlist/itewlist.component';


@NgModule({
  declarations: [
    ListHomeComponentComponent,
    StatisticsComponent,
    ItewlistComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
