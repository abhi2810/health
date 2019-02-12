import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
    console.log(this.user);
   }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.user.name = form.value.name;
    this.user.age = form.value.age;
    this.user.weight = form.value.weight;
    this.user.height = form.value.height;
    this.user.gender = form.value.gender;
    this.authService.updateUser({... this.user});
  }

}
