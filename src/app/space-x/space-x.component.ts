import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})

export class SpaceXComponent implements OnInit {
  li:any;
  // lis=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3/missions')
    .subscribe(Response =>{
      this.li=Response;
      // this.lis=this.li.list;
    });
  }

  

}
