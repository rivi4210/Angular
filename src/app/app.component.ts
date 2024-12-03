import { Component } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";


@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root",
    imports: [StudentListComponent]

})
export class AppComponent{
    x: number = 5
    hello: string = "Hello"

}