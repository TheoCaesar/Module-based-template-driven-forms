import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string;
  @ViewChild('myForm') formEl;
  default = 'pet';
  genders = ['male', 'female'];
  user = {
    username: "",
    email: "",
    secretQuestion:'',
    answer: "",
    gender: ""
  }
  isSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formEl.setValue({
      userdata: {
        username: suggestedName,
        email: 'admin@example.com'
      },
      secret: 'pet',
      questionAnswer:'el perro',
      gender:'male'
    });
    // this.formEl.form.patchValue({
    //   userdata: {
    //     username: suggestedName
    //   }
    // })
  }

  onSubmit(){
    console.dir(this.formEl);
    this.user.username = this.formEl.value.userdata.username;
    this.user.email = this.formEl.value.userdata.email;
    this.user.secretQuestion = this.formEl.value.secret;
    this.user.answer = this.formEl.value.questionAnswer;
    this.user.gender = this.formEl.value.gender;
    this.isSubmitted = true;

    //reset form afresh
    this.formEl.reset();
  }
}
