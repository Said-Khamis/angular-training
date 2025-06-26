import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss'
})
export class UserDetails implements OnInit {
  @Input() user!: User;

  @Output() closeComponent = new EventEmitter<boolean>();

  ngOnInit(): void {
      
  }

  close(): void{
    this.closeComponent.emit(true);
  }
}
