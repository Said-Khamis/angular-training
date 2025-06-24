import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterOutlet],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  standalone: true
})
export class Users implements OnInit {
   
    ngOnInit(): void {
        
    }
}
