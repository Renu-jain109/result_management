import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { authguardGuard } from '../guard/authguard.guard';

export const routes: Routes = [
  {
      path:'studentdashboard',
      component:StudentdashboardComponent,
      canActivate : [authguardGuard],
      data : {role : 'student'}
  },
  {
      path:'showresult',
      component:ShowresultComponent,
      canActivate : [authguardGuard],
      data : {role : 'student'}

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
