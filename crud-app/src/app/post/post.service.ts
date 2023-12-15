import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  constructor( private http: HttpClient ) { }
  
  ngOnInit(): void {
    
  }

}
