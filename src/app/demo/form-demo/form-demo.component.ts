import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  public peopleInfo:any = {
    username: 'key your name',
    password: 'key new password',
    sex: '1',
    cityList:['上海','广州','北京','深圳','杭州'],
    city:'广州',
    hobby:[
      {
        title: '游泳',
        checked:false
      },
      {
        title: '唱歌',
        checked:true
      },
      {
        title: '敲代码',
        checked:false
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.peopleInfo);
  }


}
