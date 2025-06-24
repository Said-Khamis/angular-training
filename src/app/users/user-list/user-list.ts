import { Component } from '@angular/core';
import { AppLayout } from "../../app-layout/app-layout";

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [AppLayout],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {
   users_list: any[] = [
    { id: 1 , "name": "Duce Duce" , "email": "saidhamic@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 2 , "name": "Said Duce" , "email": "abidayi@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 3 , "name": "Mgogo Mukhsin 001" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 4 , "name": "Mgogo Mukhsin 002" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 5 , "name": "Mgogo Mukhsin 003" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
   ];
}
