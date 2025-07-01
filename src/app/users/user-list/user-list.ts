import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppLayout } from "../../app-layout/app-layout";
import { UserDetails } from "../user-details/user-details";
import { User } from '../../model/user';
import { Users } from '../users';
import { AddUser } from '../../add-user/add-user';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [AppLayout, UserDetails , AddUser , DatePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
   selectedUser: User | null = null;
   isClose: boolean = false;
   isAddingUser: boolean = false;
   
   users_list: any[] = [];

   users: any[] = [
    { id: 1 , name: "Duce Duce" , email: "saidhamic@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 2 , "name": "Said Duce" , "email": "abidayi@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 3 , "name": "Mgogo Mukhsin 001" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 4 , "name": "Mgogo Mukhsin 002" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 5 , "name": "Mgogo Mukhsin 003" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
   ];


   ngOnInit(): void {
       localStorage.setItem('users', JSON.stringify(this.users));
       this.users_list = JSON.parse(localStorage.getItem("users")!);
   }

   addUser(): void{
     this.isAddingUser = true;
   }

   viewUser(user: User): void {
      this.selectedUser = user;
      //console.log("Email::" + user.name);
   }

   componentClose(event: boolean){
      //this.isClose = !event;
      this.selectedUser = null;
      if (typeof event  === 'boolean') {
         this.isClose = event; 
      }
   }

   handleNewUser(user: User){
       //console.log("User Email::" + user.email);
       this.users_list = [...this.users_list , user]
   }
}
