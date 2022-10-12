import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-demo',
  templateUrl: './data-demo.component.html',
  styleUrls: ['./data-demo.component.css'],
})
export class DataDemoComponent implements OnInit {
  public title1 = 'this is first test';       //省略类型
  title2 = 'this is second test';             //省略修饰符
  title3: string = 'this is thired test';
  title4: any = 'this is fourth test';        //any类似于java的object

  public userinfo: any = {
    name: 'Nolan',
    age: 30,
    salary: 3800,
  };

  public url =
    'https://img-blog.csdnimg.cn/img_convert/7b0d6ba5dcce6ce6b2e732fdffde6496.gif';
  public content = '<h2>this is a html test</h2>';

  //方式1：定义数组
  public arrs = ['1111', '2222', '33333'];
  //方式2： 推荐
  public list: any[] = ['我是第一个新闻', 222222222222, '我是第三个新闻'];
  //方式3:
  public items: Array<string> = ['我是第一个新闻', '我是第二个新闻'];

  //复杂数组
  public cars: any[] = [
    {
      cate: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '20w',
        },
        {
          title: '宝马x2',
          price: '25w',
        },
      ],
    },
    {
      cate: '奔驰',
      list: [
        {
          title: '奔驰C1',
          price: '20w',
        },
        {
          title: '奔驰C2',
          price: '25w',
        },
      ],
    },
  ];

  public isDisply: boolean = true;
  public imgUrl1 =
    'https://img-blog.csdnimg.cn/61c4432e1345455aa98bf70ef1adfc86.gif';
  public imgUrl2 =
    'https://img-blog.csdnimg.cn/f78a21ac36af4c8695f69d4ec77f623c.gif';

  public fruit: number = 2;

  public attr = 'orange';

  public today: any = new Date();

  public title = 'this is a title';

  constructor() {
    /**
     * 也可以重新赋值
     */

    this.title4 = 'this is 4th test';
    console.log(this.today);
  }

  ngOnInit(): void {}

  getData() {
    alert(this.title);
  }
  setData() {
    this.title = 'this is a change title';
  }

  keyDown(e: any) {
    console.log(e.key);
  }
}
