import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";


@NgModule({
    declarations:[AppComponent, StudentListComponent, StudentDetailsComponent],
    imports: [BrowserModule, ReactiveFormsModule ],
    bootstrap: [AppComponent]
})
export class AppModule{

}