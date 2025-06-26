import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule , FormBuilder , Validator, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-add-user',
  imports: [
     ReactiveFormsModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser implements OnInit {

  // profileForm = new FormGroup({
  //     name: new FormControl<string>(''),
  //     email: new FormControl<string>(''),
  //     address: new FormControl<string>(''),
  //     dob: new FormControl<string>('')
  // })

  @Output() addNewUser =  new EventEmitter<User>();

  @Output() closeComponent = new EventEmitter<boolean>();

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
      name: ['' , Validators.required],
      email: ['', Validators.required],
      address: [''],
      dob: ['' , Validators.required]
  })

  ngOnInit(): void {

  }

  saveUser() : void {
      this.profileForm.value;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    const user: User = this.formMapper(this.profileForm.value);
    this.addNewUser.emit(user);
    //console.warn(this.profileForm.value);
  }

  private formMapper(params: any) : User{
     return {
        id: 1,
        name: params.name,
        address: params.address,
        email: params.email,
        designation: "ICTO II",
        title: "Application Programmer",
        dob: params.dob
     };
  }

  close(): void {
    this.closeComponent.emit(true);

    setTimeout(() => {
      this.closeComponent.emit(false);
    },100);
  }
}
