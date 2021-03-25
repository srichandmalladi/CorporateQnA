import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { User } from '../../models/user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(public userService: UserService,
    private toastr: ToastrService,
  ) {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      fullName: new FormControl(''),
      email: new FormControl('', Validators.email),
      position: new FormControl(''),
      company: new FormControl(''),
      location: new FormControl(''),
      passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl('', Validators.required)
      },
        this.comparePasswords
      ),
      profilePictureURL: new FormControl('')
    });
  }

  ngOnInit() {
    this.registrationForm.reset();
  }

  comparePasswords(fb: FormGroup) {
    if (fb.get('password').value != fb.get('confirmPassword').value) {
      return { passwordMismatch: true };
    }
    else {
      return null;
    }
  }

  processImage(event: any) {
    const reader = new FileReader();
    if (event.target.files[0] && event.target.files.length) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.registrationForm.value.profilePictureURL = reader.result as string;
      }
    }
  }

  onSubmit() {
    this.userService.register(new User(this.registrationForm.value)).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.registrationForm.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        }
        else {
          res.errors.forEach((element: any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;
              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
