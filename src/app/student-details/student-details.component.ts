import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {

  
  @Input()
  student!: Student;
  // student: Student | null = null;

  @Output()
  onSaveNewStudent = new EventEmitter<Student>();

  saveNewStudent(){
    this.onSaveNewStudent.emit(this.student);
  }
}
