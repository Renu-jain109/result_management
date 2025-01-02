import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentService } from '../student.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatToolbarModule,FormsModule],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent implements OnInit {

  studentResult : FormGroup;
  fb = inject(FormBuilder);
  studentService = inject(StudentService);
  router = inject(Router);

  ngOnInit(): void {
    this.studentResult = this.fb.group({
      rollno : new FormControl<number>(null),
      name : new FormControl<string>(null)
    });
  }


  submit(){
   let rollno = this.studentResult.controls['rollno'].value;
   if(!rollno){
    alert("Please enter a rollno ");
   }
    this.studentService.getResult(this.studentResult.controls['rollno'].value).subscribe((res : any)=>{
      if(res){
      this.router.navigate(['/student/showresult'],{state:{data : res}});
      } 
    },
    (error)=>{
      alert("Data not Found")
    }
  )
  };
  
  clear(){
    this.studentResult.reset();
  }

}
