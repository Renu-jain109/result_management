import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AddresultComponent } from './addresult/addresult.component';
import { UpdateresultComponent } from './updateresult/updateresult.component';
import { authguardGuard } from '../guard/authguard.guard';


export const routes: Routes = [
  {
      path:'teacherdashboard',
      component:TeacherdashboardComponent,
      canActivate : [authguardGuard],
      data : {role : 'teacher'}

  },
  {
      path:'addresult',
      component:AddresultComponent,
      canActivate : [authguardGuard],
      data : {role : 'teacher'}

  },
  {
      path:'updateresult',
      component:UpdateresultComponent,
      canActivate : [authguardGuard],
      data : {role : 'teacher'}

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
