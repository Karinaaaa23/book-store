import { animation, state, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";
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
  @ViewChild("sidenav", { static: true })
  sidenav!: MatSidenav;
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.opened = false;
    //   this.close = true;
    // });
  }
  opened = false;
  //close = false;

  console = console;
  toggleSidenav() {
    this.sidenav.toggle();
  }

  title(title: any) {
    throw new Error("Method not implemented.");
  }
}
