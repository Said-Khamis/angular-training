import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // template: `
  //    <h1>Hellow World 02</h1>
  //    <router-outlet />
  //  `,
  // styles: `
  //   *{
  //      background-color: blue;
  //      color: white
  //   },
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-training';
}
