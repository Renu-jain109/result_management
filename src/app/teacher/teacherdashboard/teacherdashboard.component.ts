import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [TableModule,CommonModule,InputIconModule,IconFieldModule,RouterLink],
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent implements OnInit{
  teacherService = inject(TeacherService);
  resultList : any []= [];

  ngOnInit(): void {
    this.getAllResult();
  }

  getAllResult (){
    this.teacherService.getAllResult().subscribe((res : any)=>{
      console.log(res);
      
    })
  }

}
