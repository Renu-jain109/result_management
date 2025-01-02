import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AddresultComponent } from './addresult/addresult.component';
import { UpdateresultComponent } from './updateresult/updateresult.component';


export const routes: Routes = [
  {
      path:'teacherdashboard',
      component:TeacherdashboardComponent
  },
  {
      path:'addresult',
      component:AddresultComponent
  },
  {
      path:'updateresult',
      component:UpdateresultComponent
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
