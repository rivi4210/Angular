import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentService } from "./student.service";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";


@NgModule({
    declarations:[AppComponent, StudentListComponent, StudentDetailsComponent, ObservableDemoComponent],
    imports: [BrowserModule, ReactiveFormsModule ],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule{

}