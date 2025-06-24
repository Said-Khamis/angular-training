import { Component, OnInit } from '@angular/core';
import { AppLayout } from "../app-layout/app-layout";
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [AppLayout, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
     //this.router.navigate(["/settings/regions"]); 
  }
}
