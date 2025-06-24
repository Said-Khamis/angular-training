import { Component } from '@angular/core';
import { SideBar } from "../side-bar/side-bar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [SideBar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss'
})
export class AppLayout {

}
