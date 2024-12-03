import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
    students : Student[] = [
      new Student(1, "John", "Doe", true, 85),
      new Student(2, "Dave", "Green", true, 100),
      new Student(3, "Dan", "Rock", true, 90),
      new Student(4, "Emily", "Tie", true, 85),
    ]

    deleteStudent(student: Student){
        let toDelete = this.students.indexOf(student);
        this.students.splice(toDelete, 1);
    }
}
