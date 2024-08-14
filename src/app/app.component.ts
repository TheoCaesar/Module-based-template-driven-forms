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

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.formEl.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email: 'admin@example.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer:'el perro',
    //   gender:'male'
    // });
    this.formEl.form.patchValue({
      userdata: {
        username: suggestedName
      }
    })
  }

  onSubmit(){
    console.dir(this.formEl)
  }
}
