import { Test } from "./models/test.model";

export class Student {
    id: number;
    firstName: string;
    lastName: string;
    address?: string;
    phone?: string;
    active: boolean;
    marksAvg: number;
    priority?: PriorityLevel;
    cityOfStudy?: CityOfStudy;

    constructor(id: number = 0, firstName: string = "", lastName: string = "", active: boolean = false, marksAvg: number = 0, priority?: PriorityLevel, cityOfStudy?: CityOfStudy) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.marksAvg = marksAvg;
        this.priority = priority;
        this.cityOfStudy = cityOfStudy
    }

}

export enum PriorityLevel {
    High = "High Level",
    Medium = "Medium level",
    Low = "Low level"
}

export enum CityOfStudy {
    Jerusalem = "Jerusalem",
    BneiBrak = "BneiBrak",
    Rehovot = "Rehovot"
}

