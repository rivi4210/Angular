import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.scss'
})
export class ObservableDemoComponent {

  source: Observable<string> = new Observable((observer) => {
    observer.next("fisrt");
    observer.next("secound");
    observer.next("third");

    // observer.complete();
    observer.error("An error occurred in obsevable");
  })

  current: string="";

  // timer: Observable<Date> = new Observable((obs) => {
  //   setInterval(() => {
  //     obs.next(new Date());
  //   }, 2000);
  // })
  timer: Observable<Date> = interval(1000).pipe(map(x => {return new Date()}));

  val: string = "";

  constructor() {
    this.source.pipe(map(ele => { return ele + " observable" })).subscribe((val: string) => {
      console.log(val);

      this.val = val;
    },
      (err) => {
        this.val = "";
        console.log(err);
      },
      () => {
        this.val = "";
        console.log("completed!");

      });

    this.timer.subscribe((curr) => {
      this.current = curr.toLocaleTimeString();
      console.log(this.current)
    })
  };

};
