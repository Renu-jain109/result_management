import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { ShowresultComponent } from './showresult/showresult.component';

export const routes: Routes = [
  {
      path:'studentdashboard',
      component:StudentdashboardComponent
  },
  {
      path:'showresult',
      component:ShowresultComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
