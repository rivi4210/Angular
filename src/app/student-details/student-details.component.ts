import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CityOfStudy, PriorityLevel, Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
})
export class StudentDetailsComponent {

  private _stusdent!:Student
  studentForm!: FormGroup ;


  public get student():Student{
    return this._stusdent
  }

  @Input()
  public set student(value: Student){
    this._stusdent = value
    this.initializeForm();
    
  }
  // student!: Student;
  // student: Student | null = null;

  @Output()
  onSaveStudent = new EventEmitter<Student>();

  private initializeForm() {
    this.studentForm = new FormGroup({
      id: new FormControl(this.student?.id, [Validators.required]),
      firstName: new FormControl(this.student?.firstName, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(this.student?.lastName, [Validators.required, Validators.minLength(2)]),
      active: new FormControl(this.student?.active, [Validators.required]),
      marksAvg: new FormControl(this.student?.marksAvg, [Validators.required, Validators.min(0), Validators.max(100)]),
      priority: new FormControl(this.student?.priority),
      cityOfStudy: new FormControl(this.student?.cityOfStudy)
    });
  }

  priorityLevels =  Object.values(PriorityLevel).filter(value => typeof value === 'string');
  // priorityLevels = PriorityLevel;
  cityOfStudy =  CityOfStudy;


  saveNewStudent() {
    this.student = this.studentForm.value;
    this.onSaveStudent.emit(this.student);
  }
}
