import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar implements OnInit {
   isUserShown: boolean  = false;

   toogleUser(): void {
     this.isUserShown = !this.isUserShown;
   }

   ngOnInit(): void {
       this.isUserShown = false;
   }
}
