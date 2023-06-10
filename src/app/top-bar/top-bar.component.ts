import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDrawerMode, MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar-style.scss"],
})
export class TopBarComponent {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  openSidenavWithDelay(): void {
    this.sidenav.open();
  }
}
