import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AddresultComponent } from './addresult/addresult.component';


export const routes: Routes = [
  {
      path:'teacherdashboard',
      component:TeacherdashboardComponent
  },
  {
      path:'addresult',
      component:AddresultComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
