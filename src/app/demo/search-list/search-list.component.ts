import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  public searchResult:any = [];
  public todoList:any[] = [];

  public search:any = 'please key';
  public todo:any='';

  constructor(public cart:CartService) { 
    var a = cart.getTest()
  }

  ngOnInit(): void {
  }

  searchElement(){
      console.log(this.search);
      this.searchResult.push(this.search);
      this.search='';
  }

  remove(key:any){

    this.searchResult.splice(key,1);
  }

  toAdd(param:any){
    if(param.keyCode == 13){
      this.todoList.push(
        {
          title:this.todo,
          status:true
        });
      this.todo="";

      }

  }
  removeList(key:any){

    this.todoList.splice(key,1);
  }

  changeStatus(item:any){
    item.status=!item.status;
    console.log(item.status)
  }


}
