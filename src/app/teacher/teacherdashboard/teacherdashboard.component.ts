import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { EditableRow, TableModule } from 'primeng/table';
import { TeacherService } from '../teacher.service';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [TableModule,CommonModule,InputIconModule,IconFieldModule,RouterLink,ButtonModule,SharedModule],
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent implements OnInit{
  teacherService = inject(TeacherService);
  resultList : any []= [];
  router = inject(Router);

  ngOnInit(): void {
    this.getAllResult();
    
  }

  getAllResult (){
    this.teacherService.getAllResult().subscribe((res : any)=>{
      this.resultList = res;

    })
  }
  deleteResult (rollno : any){
 this.teacherService.deleteResult(rollno).subscribe((res : any)=>{
  console.log(res);
  this.getAllResult();

  if(res.result){
    alert("Deleted Successfully");
  }else{
    alert("Not Deleted ");
  }
 });
  };

  edit (result : any){
  this.router.navigate(['/teacher/updateresult'],{state : {data : result}});

  }

}
