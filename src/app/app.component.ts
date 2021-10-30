import {Component, OnInit} from '@angular/core';
import {StudentService} from "./services/student.service";
import {Student} from "./entities/student";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  students: Student[] = [];

  idField = new FormControl();
  nameField = new FormControl();
  cityField = new FormControl();
  mobileField = new FormControl();


  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.students = this.studentService.getAll();

  }

  submit() : void {
    let newStudent: Student = new Student();
    newStudent.id = this.idField.value;
    newStudent.name = this.nameField.value;
    newStudent.city = this.cityField.value;
    newStudent.mobile = this.mobileField.value;

    this.idField.reset();
    this.nameField.reset();
    this.cityField.reset();
    this.mobileField.reset();
    this.students.push(newStudent);
  }

  /*
  formControls --> Attribute - value
                   Methods - setValue(), reset()
   */
}
