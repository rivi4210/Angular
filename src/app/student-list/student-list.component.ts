import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  constructor() { }
  students: Student[] = [
    new Student(1, "John", "Doe", true, 85),
    new Student(2, "Dave", "Green", true, 100),
    new Student(3, "Dan", "Rock", false, 90),
    new Student(4, "Emily", "Tie", true, 70),
  ]

  deleteStudent(student: Student) {
    let toDelete = this.students.indexOf(student);
    this.students.splice(toDelete, 1);
  }

  selectedStudent: Student | null = null;

  showDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow
  }

  showNewDetail(){
    this.selectedStudent = new Student(0, "","", false,0)
  }

  addNewStudentToList(newStudent:Student){
    this.students.push(newStudent);
    this.selectedStudent = null;
  }
}
