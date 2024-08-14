import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') formEl;
  default = 'pet'
  
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.dir(this.formEl)
  }
}
