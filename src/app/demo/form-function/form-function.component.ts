import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-function',
  templateUrl: './form-function.component.html',
  styleUrls: ['./form-function.component.css']
})
export class FormFunctionComponent implements OnInit {

  public name:any= new FormControl('');

  public profileForm:any = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  public loginForm:any = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      })
    });

  public userForm = this.fb.group({
      username: ['',Validators.required],
      password: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });  

  constructor(
    private fb: FormBuilder
    ) { }

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
      firstName: '路飞',
      lastName: '蒙奇.D',
    });
  }
  setGroupValue(){
    this.loginForm.patchValue({
      username: '蒙奇.D.龙',
      password: '海贼王东海',
      address: {
        street: '33小镇',
        city: '东莞市',
        state: '广东省',
        zip: 570261,
      }
    });
  }
  onGroupSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
  setBuilderValue(){
    this.userForm.patchValue({
      username: '蒙奇.D.路飞',
      password: '海贼王南海',
      address: {
        street: '福田区',
        city: '深圳市',
        state: '广东省',
        zip: '570261',
      }
    });
  }
  onBuilderSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }

}
