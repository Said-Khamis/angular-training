import { Component } from '@angular/core';
import { AppLayout } from "../../app-layout/app-layout";

@Component({
  selector: 'app-office-users',
  imports: [AppLayout],
  templateUrl: './office-users.html',
  styleUrl: './office-users.scss'
})
export class OfficeUsers {
   office_users: any[] = [
    { id: 1 , "name": "Said Khamis" , "email": "saidhamic@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 2 , "name": "Fredreick Abisayi" , "email": "abidayi@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
    { id: 3 , "name": "Mukhusin Siraji" , "email": "siraji@gmail.com", designation: "ICTO II" , title: "Application Programmer"},
   ];
}
