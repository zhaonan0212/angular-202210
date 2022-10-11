import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-function',
  templateUrl: './form-function.component.html',
  styleUrls: ['./form-function.component.css']
})
export class FormFunctionComponent implements OnInit {

  public name:any= new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue("Tom");
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  setValue(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: '蒙奇.D',
    });
  }

}
