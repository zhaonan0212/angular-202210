import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit {
  @Input('title') receiveTitle: any;

  public msg: any = '这是一个生命周期函数测试';

  public userInfo: any = '';

  public oldUserInfo: any = '';

  changeMsg() {
    this.msg = '只是变更后的结果';
  }

  constructor() {
    console.log('构造函数执行了');
  }

  ngOnChanges() {
    console.log(
      'ngOnChanges执行了,父子组件传参，参数变更---------------------------'
    );
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit执行啦，Angular第一次显示数据绑定和设置指令、组件的输入属性后，初始化指令'
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck执行啦，自定义一些操作');

    if (this.userInfo != this.oldUserInfo) {
      console.log(`你从 ${this.oldUserInfo}改成 ${this.userInfo}`);
      this.oldUserInfo = this.userInfo;
    } else {
      console.log('暂时没有数据变化');
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit执行啦，组件初始化,只调用一次');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked执行啦，组件初始化后的自定义操作');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit执行啦，视图件初始化，只调用一次');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked执行啦，视图初始化后的自定义操作');
  }
  ngOnDestory() {
    console.log(' ngOnDestory执行啦，组件销毁');
  }
}
