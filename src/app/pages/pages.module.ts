import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RoutingModule } from './home/routing.module';
import { SharedModule } from '../shared/shared.module';

// Pages Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
