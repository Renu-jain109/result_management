import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-showresult',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './showresult.component.html',
  styleUrl: './showresult.component.css'
})
export class ShowresultComponent implements OnInit {
studentData : any = [];
  studentService = inject(StudentService);
  rollno: number;
ngOnInit(): void {
  this.loadData();
}
getRes(rollno : number){
  this.studentService.getResult(this.rollno).subscribe((res : any)=>{
    console.log(res);
    
  } )
}

loadData (){
  const data = history.state?.data;
    this.studentData.push(data);
  }
}
  

