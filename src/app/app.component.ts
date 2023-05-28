import { animation, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.opened = true;
      this.close = false;
    });
  }
  // sidenav!: MatSidenav;
  opened = false;
  close = true;

  title(title: any) {
    throw new Error("Method not implemented.");
  }
}
