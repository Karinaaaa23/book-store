import { animation, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";
import { delay, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // isButtonEnabled = false;
  // private buttonDelaySubject = new Subject<void>();
  // destroy$: Subject<void> = new Subject<void>();

  // onClick() {
  //   this.isButtonEnabled = true;
  //   this.buttonDelaySubject.next();
  // }

  // ngOnInit() {
  //   this.buttonDelaySubject
  //     .pipe(delay(2000), takeUntil(this.destroy$))
  //     .subscribe(() => {
  //       this.isButtonEnabled = true;
  //     });
  // }

  // ngOnDestroy() {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
  @ViewChild("sidenav") sidenav!: MatSidenav;
  ngOnInit(): void {
    setTimeout(() => {
      this.opened = true;
      this.close = false;
    });
  }
  events: string[] = [];
  opened = false;
  close = true;

  title(title: any) {
    throw new Error("Method not implemented.");
  }
}
