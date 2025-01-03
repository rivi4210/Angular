import { Injectable } from "@angular/core";
import { CityOfStudy, PriorityLevel, Student } from "./student.model";

@Injectable({ providedIn: 'root', })
export class StudentService {

    students: Student[] = [
        new Student(1, "John", "Doe", true, 85),
        new Student(2, "Dave", "Green", true, 100),
        new Student(3, "Dan", "Rock", false, 90),
        new Student(4, "Emily", "Tie", true, 70, PriorityLevel.High, CityOfStudy.Rehovot),
    ];

    getStudents(): Student[] {
        return this.students;
    }

    getStudentsAsync(): Promise<Student[]>{
        return new Promise((res, rej)=>{
            res(this.students)
        })
    }
}