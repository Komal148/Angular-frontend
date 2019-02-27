import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchinfoService } from '../service/searchinfo.service';
import { Info } from '../domain/info.model';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent  {
  title :any;
  info;
  test;

  constructor(private search:SearchinfoService ) { }

  ngOnInit() {

    console.log("ijbv");
    
    this.test=this.search.getAll().subscribe((data)=>{
      this.info=data,
    console.log("OnInit")});
  }
  // getall(){
  
  // }

}
