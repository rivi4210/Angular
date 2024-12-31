import { Component } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";


@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root",
    imports: [StudentListComponent, ObservableDemoComponent]

})
export class AppComponent{
    x: number = 5
    hello: string = "Hello"

}