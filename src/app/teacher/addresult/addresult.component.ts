import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../teacher.service';
import { Student } from '../../student';

@Component({
  selector: 'app-addresult',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './addresult.component.html',
  styleUrl: './addresult.component.css'
})
export class AddresultComponent implements OnInit{

  addResultForm : FormGroup;
  formBuilder = inject(FormBuilder);
  teacherService = inject(TeacherService);

  ngOnInit(): void {
    this.addResultForm = this.formBuilder.group({
      rollNo : ['',Validators.required],
      name : ['',Validators.required],
      dob : ['',Validators.required],
      score : ['',Validators.required]
    });
  };



  submit (){
    let json = {
      rollNo : this.addResultForm.get('rollNo').value,
      name : this.addResultForm.get('name').value,
      dob : this.addResultForm.get('dob').value,
      score : this.addResultForm.get('score').value
    }
    this.teacherService.saveAddResult(json).subscribe((res : any)=>{
      console.log(res);
      
    })
  };

}
