import { animate, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar-style.scss"],
})
export class TopBarComponent {
  @Output()
  cardClick = new EventEmitter();

  @ViewChild("sidenav") sidenav!: MatSidenav;
  // openSidenavWithDelay(): void {
  //   this.sidenav.open();
  // }

  // opened = false;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
