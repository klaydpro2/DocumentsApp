import { Component, OnInit } from '@angular/core';

import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html'
  //styleUrls: ['./documents.component.css']
})
@Injectable()
export class DocumentsComponent {

  //constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8080/documents';


  title = 'DOCUMENTS';
  greeting = {'id': '1', 'content': 'Hello World'};

 /* public ckickbtn(){
    return this.http.get<String>(this.userUrl);
  }*/
}
