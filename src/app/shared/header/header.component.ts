import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  open() {
    const hamburger = document.querySelector("#ham");
    const pageName = document.querySelector("#page-name");
    const menu = document.querySelector("#menu");
    const body = document.querySelector("body");
    body.classList.toggle("no-scroll");
    menu.classList.toggle("menu-open");
    pageName.classList.toggle("open");
    hamburger.classList.toggle("is-active");
  }

  close() {
    const hamburger = document.querySelector("#ham");
    const pageName = document.querySelector("#page-name");
    const menu = document.querySelector("#menu");
    const body = document.querySelector("body");
    if (menu.classList.contains("menu-open")) {
      body.classList.toggle("no-scroll");
    }
    menu.classList.remove("menu-open");
    pageName.classList.remove("open");
    hamburger.classList.remove("open");
  }
}
