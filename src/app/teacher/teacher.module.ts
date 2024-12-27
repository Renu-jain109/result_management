import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';


// export const routes: Routes = [
//   {
//       path:'teacherdashboard',
//       component:TeacherdashboardComponent
//   }
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    // RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
