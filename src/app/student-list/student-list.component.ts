import { Component } from '@angular/core';
import { CityOfStudy, PriorityLevel, Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  students: Student[] = [];
  // constructor(private _studentService: StudentService) {
  //   _studentService.getStudentsAsync().then((data) => {
  //     this.students = data;
  //   })
  // }
  constructor(private _studentService: StudentService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.students = await this._studentService.getStudentsAsync();
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  deleteStudent(student: Student) {
    let toDelete = this.students.indexOf(student);
    this.students.splice(toDelete, 1);
  }

  selectedStudent: Student | null = null;

  showDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow
  }

  showNewDetail() {
    this.selectedStudent = new Student(0, "", "", false, 0)
  }

  saveStudentToList(studentToSave: Student) {
    const index = this.students.findIndex(s => s.id === studentToSave.id)

    if (index == -1) {
      studentToSave.id = this.students.length + 1;
      this.students.push(studentToSave);
    }
    else {
      this.students[index] = studentToSave
    }

    this.selectedStudent = null;
  }

}
